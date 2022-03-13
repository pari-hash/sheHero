import React from "react";

const CardList = () => {
  return (
    <div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img style={{backgroundColor:'rgb(189, 218, 165)'}}alt='robots' src={require('./job.png')}/>
           <div style={{color:"black",backgroundColor:'rgb(189, 218, 165)'}}>
               <h2 style={{backgroundColor:'rgb(189, 218, 165)'}}>Jobs</h2>
               <p style={{backgroundColor:'rgb(189, 218, 165)'}} className="f5">Women out there searching for jobs can find a list of job options here.</p>
           </div>
       </div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img style={{backgroundColor:'rgb(189, 218, 165)'}} alt='robots' src={require('./opportunity.png')}/>
           <div style={{color:"black",backgroundColor:'rgb(189, 218, 165)'}}>
               <h2 style={{backgroundColor:'rgb(189, 218, 165)'}}>Opportunities</h2>
               <p style={{backgroundColor:'rgb(189, 218, 165)'}}className="f5">Women new to tech field and looking for tech-related opportunities can be find out here.</p>
           </div>
       </div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img style={{backgroundColor:'rgb(189, 218, 165)'}} alt='robots' src={require('./blog.png')}/>
           <div style={{color:"black",backgroundColor:'rgb(189, 218, 165)'}}>
               <h2 style={{backgroundColor:'rgb(189, 218, 165)'}} >Blogs</h2>
               <p style={{backgroundColor:'rgb(189, 218, 165)'}} className="f5">Women can find blogs related to social taboo topics that are not discussed much in public.</p>
           </div>
       </div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img  style={{backgroundColor:'rgb(189, 218, 165)'}}  alt='robots' src={require('./govtSchemes.png')}/>
           <div style={{color:"black",backgroundColor:'rgb(189, 218, 165)'}}>
               <h2 style={{backgroundColor:'rgb(189, 218, 165)'}}  >Government Schemes</h2>
               <p  style={{backgroundColor:'rgb(189, 218, 165)'}}  className="f5">The list of government schemes announced by government for women can be found here.</p>
           </div>
       </div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img   style={{backgroundColor:'rgb(189, 218, 165)'}}alt='robots' src={require('./crisis.png')}/>
           <div style={{color:"black",backgroundColor:'rgb(189, 218, 165)'}}>
               <h2 style={{backgroundColor:'rgb(189, 218, 165)'}} >Crisis hotlines</h2>
               <p   style={{backgroundColor:'rgb(189, 218, 165)'}}className="f5"> The helpline numbers for women safety of various localities can be found here.</p>
           </div>
       </div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img style={{backgroundColor:'rgb(189, 218, 165)'}} alt='robots' src={require('./coming.png')}/>
           <div  style={{color:"black",backgroundColor:'rgb(189, 218, 165)'}}>
               <h2 style={{backgroundColor:'rgb(189, 218, 165)'}}>Coming Soon</h2>
               <p  style={{backgroundColor:'rgb(189, 218, 165)'}}className="f5" >This card is currently under construction will be coming soon.See you soon.</p>
           </div>
       </div>
    </div>
  );
};

export default CardList;