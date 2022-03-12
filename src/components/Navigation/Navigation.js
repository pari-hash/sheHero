import React from "react";

const Navigation = () => {
  return (
    <div >
    <nav style={{ display:'flex',justifyContent:'space-between' }}>
         <nav style={{ display:'flex',justifyContent: "flex-start" }}>
        <p className="f3 link dim black underline  pointer"><img src={require('./logo - Copy.png')} style={{height:'6rem',width:'10rem',padding:'2px',margin:'0px'}}/></p>
      </nav>
      <nav style={{ display:'flex',justifyContent: "center" }}>
        <p className="f3 link dim black underline pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Jobs</p>
        <p className="f3 link dim black underline pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>About us</p>
        <p className="f3 link dim black underline pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Reviews</p>
        <p className="f3 link dim black underline pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Blogs/Posts</p>
        <p className="f3 link dim black underline pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Crisis Hotline</p>
      </nav>
      <nav style={{ display:'flex',justifyContent: "flex-end" }}>
        <p className="f3 link dim black underline pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Sign In</p>
        <p className="f3 link dim black underline pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Sign Up</p>
      </nav>
    </nav>
    </div>
  );
};
export default Navigation;
