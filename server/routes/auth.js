const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = require('../config/env');

//ROUTE - 1
//signup
//Create a user using : POST "/api/auth/createuser" - No login required
router.post('/createuser', [
    body('name', 'Enter a valid name!').isLength({ min: 3 }),
    body('email', 'Enter a valid email!').isEmail(),
    body('password', 'Password must be atleast 5 characters!').isLength({ min: 5 })
], async (req, res) => {

    //Handling Errors
    const errors = validationResult(req);
    console.log(errors.array);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Check whether the user(email) exists already
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({ error: "Sorry a user already exists with this email!" })
        }

        //Secure Password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        //Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        console.log(JWT_SECRET);
        const authToken = jwt.sign(data, JWT_SECRET);
        // res.json(user);
        res.json({ authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

//ROUTE - 2
//Authenticate a user using : POST "/api/auth/login"
router.post('/login', [
    body('email', 'Enter a valid email!').isEmail(),
    body('password', "Can't be blank").exists()
], async (req, res) => {

    //Handling Errors
    const errors = validationResult(req);
    console.log(errors.array);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");

    }
}
)

//ROUTE - 3 
// Get Logged In User Details using : POST "/api/auth/getuser". Login required
router.post('/getuser',fetchuser, async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");

    }

})
module.exports = router;