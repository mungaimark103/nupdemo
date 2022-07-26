import React from 'react'
// import linkages from "../image/linkages.jpg"

export default function Main() {
  return (
    <>
    <div>
        <div className="container-fluid" style={{ 
        
      backgroundImage: `url('./liberia.webp') `, 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:.9,

  
    }}>
            <hr/>
            <div className="row container-fluid">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

              {/* city of NUP */}
            <h2 className="text size">Liberia</h2>
            <div className="row text">  
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                {/* image */}
                <img src="./image/liberia_flag.jpg" alt='flag' className='country-flag'/>
                <p>Liberia</p>
              </div>

              {/* <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text pull-left">
                 country 
                 
              </div> */}
              </div>
                  <div className="text">
                    <p >Region: West-Africa</p> 
                  </div>
                  {/* country stats */}
                  <div class="text"> 
                    <h2>2022 population</h2>
                    <p>402988</p>
                  
                  </div>
                  {/* more info links */}
                  <div className='position'>
                  <div className="row spacing-top text">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    
                      <h3>AREAS AND DENSITIES</h3>
                      <p>POPULATION</p>
                      <p>URBAN EXTENT</p>
                      <p>COMPOSITION OF ADDED AREA</p>
                  
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      <h3>STAGES OF NUP</h3>
                      <p>FEASIBILITY</p>
                      <p>DIAGNOSTICS</p>
                      <p>IMPLEMENTATION</p>
                    </div>
                    <div className="col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      
                      <a href='https://issuu.com/unhabitatorganization/docs/plgs_2021_annual_report'>
        <img width="250px" height="300px"className="pu" src='./image/publication.png' alt='liberia publication' />
        </a><p>view me on issuu</p>
                      </div>
                    </div>
                  </div>
            </div>
           </div>
        </div>
  </div>
</>
)
}
