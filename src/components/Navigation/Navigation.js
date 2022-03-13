import React from "react";

const Navigation = ({onRouteChange,isSignedIn}) => {
  return (
    <div >
    <nav style={{ display:'flex',justifyContent:'space-between' }}>
         <nav style={{ display:'flex',justifyContent: "flex-start"}}>
        <p onClick ={()=>onRouteChange('home')} className="f3 link dim black pointer"><img src={require('./logo - Copy.png')} style={{height:'6rem',width:'10rem',padding:'2px',margin:'0px'}}/></p>
      </nav>
      <nav style={{ display:'flex',justifyContent: "center" }}>
        <p onClick ={()=>onRouteChange('Jobs')}className="f3 link dim black pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Jobs</p>
        <p onClick ={()=>onRouteChange('Opportunities')} className="f3 link dim black pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Opportunity</p>
        <p  onClick ={()=>onRouteChange('Blogs')}className="f3 link dim black pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Blogs/Posts</p>
        <p onClick ={()=>onRouteChange('Schemes')}className="f3 link dim black pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Government Schemes</p>
        <p onClick ={()=>onRouteChange('NGOs')}className="f3 link dim black pa3 pointer" style={{color:'rgb(189, 218, 165)'}}>Crisis Hotline</p>
      </nav>
      <nav style={{ display:'flex',justifyContent: "flex-end" }}>
        <p className="f3 link dim black pa3 pointer" onClick={()=>onRouteChange('signIn')}style={{color:'rgb(189, 218, 165)'}}>Sign In</p>
        <p className="f3 link dim black pa3 pointer" onClick={()=>onRouteChange('register')} style={{color:'rgb(189, 218, 165)'}}>Sign Up</p>
      </nav>
    </nav>
    </div>
  );
};
export default Navigation;
