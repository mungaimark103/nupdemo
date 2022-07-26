import React from 'react'

  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';

export default function Home2() {
    const data = [
        { name: "niger", users: 2000000000 },
        { name: "timbuktu", users: 1500000000 },
        { name: "nepal", users: 1000000000 },
        { name: "acree", users: 500000000 },
      ];
  return (
    <div>
         <div className="container-fluid">
      
      <div className="App">
      
      <Container>
        <Row>
          <Col>
          <h2>Composition of added area</h2>
          <p className='pop-text'>Lorem, ipsum dolLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, or sit amet consectetur adipisicing elit. Molestias aut, 
          </p>
        </Col>
          <Col>
          <h2>A brief image of the regions in liberia</h2>
          <p className='pop-text'>Lorem, ipsum dolor sit ameLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, t consectetur adipisicing elit. Molestias aut, 
          </p>
            <img src='./image/map.jpg' alt='imgg' width={500} height={300}/>
          </Col>
       </Row>
       
       </Container>
     </div>
   </div>
    </div>
  )
}
