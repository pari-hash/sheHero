import React from "react";

const CardList = () => {
  return (
    <div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img alt='robots' src={require('./job.png')}/>
           <div>
               <h2>Jobs</h2>
               <p className="f5">Women out there searching for jobs can find a list of job options here.</p>
           </div>
       </div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img alt='robots' src={require('./opportunity.png')}/>
           <div>
               <h2>Opportunity</h2>
               <p className="f5">Women new to tech field and looking for tech-related opportunities can be find out here.</p>
           </div>
       </div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img alt='robots' src={require('./blog.png')}/>
           <div>
               <h2>Blogs</h2>
               <p className="f5">Women can find blogs related to social taboo topics that are not discussed much in public.</p>
           </div>
       </div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img alt='robots' src={require('./govtSchemes.png')}/>
           <div>
               <h2>Government Schemes</h2>
               <p className="f5">The list of government schemes announced by government for women can be found here.</p>
           </div>
       </div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img alt='robots' src={require('./crisis.png')}/>
           <div>
               <h2>Crisis hotlines</h2>
               <p className="f5"> The helpline numbers for women safety of various localities can be found here.</p>
           </div>
       </div>
      <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" style={{backgroundColor:'rgb(189, 218, 165)',width:'31%'}}>
           <img alt='robots' src={require('./coming.png')}/>
           <div>
               <h2>Coming Soon</h2>
               <p className="f5">This card is currently under construction will be coming soon.See you soon.</p>
           </div>
       </div>
    </div>
  );
};

export default CardList;