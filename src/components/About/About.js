import React from 'react'

function Carousel() {
    return (

        // <div style={{backgroundColor:'grey'}}>
        <div>
            {/* botstrap carousel  */}

            <h2 style={{color:'rgb(189, 218, 165)', boxShadow:  '13px 13px 27px #080c13, -13px -13px 27px #20304d', width:'30%', margin:'auto', marginTop:'30px', marginBottom:'30px', borderRadius:'10px', height:'50px', padding:'5px'}} class="text-center">About Us</h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ marginTop: '20px' }}>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" style={{}}>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={require('./she3.jpg')} style={{ height: '400px', objectFit: 'contain' }} alt="First slide" />
                        {/* additionally added  */}
                        <div class="carousel-caption d-none d-md-block">
                            <span style={{ backgroundColor: '#404040', fontSize: '20px' }}>Find Jobs and Other Oppurtunities</span>
                            <br />
                            <span style={{ backgroundColor: '#404040' }}>
                                We provide job and other oppurtunities notifications  to help women <br />
                                find jobs and not miss out on the oppurtunities present!
                            </span>
                        </div>
                        {/* additionally added  */}

                    </div>
                    <div className="carousel-item ">
                        <img className="d-block w-100" src={require('./she1.jpg')} style={{ height: '400px', objectFit: 'contain' }} alt="Second slide" />
                        {/* additionally added  */}
                        <div class="carousel-caption d-none d-md-block">
                            <span style={{ backgroundColor: '#202020', fontSize: '20px' }}> Latest Blog posts!</span>
                            <br />
                            <span style={{ backgroundColor: '#202020' }}>
                                Latest blog posts to keep you motivated,
                                boost your confidence and provide<br /> knowledge and tips to excel in
                                personal and professional life!
                            </span>
                        </div>
                        {/* additionally added  */}
                    </div>
                    <div className="carousel-item ">
                        <img className="d-block w-100" src={require('./she4.jpg')} style={{ height: '400px', objectFit: 'contain' }} alt="Third slide" />
                        {/* additionally added  */}
                        <div class="carousel-caption d-none d-md-block">
                            <span style={{ backgroundColor: '#202020', fontSize: '20px' }}>Crisis Hotlines</span>
                            <br />
                            <span style={{ backgroundColor: '#202020' }}>
                                We have provided various government schemes, NGO's contact details
                                <br /> and helplines to help any woman who might be in dire need of it!

                            </span>
                        </div>
                        {/* additionally added  */}
                    </div>
                </div>
                <a style={{ marginLeft: '320px' }} className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only" style={{ color: 'black' }}>Previous</span>
                </a>
                <a style={{ marginRight: '320px' }} className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only" style={{ color: 'black' }}>Next</span>
                </a>
            </div>
            {/* botstrap carousel  */}

        </div>
    )
}

export default Carousel