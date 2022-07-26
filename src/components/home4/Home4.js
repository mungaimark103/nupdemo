import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home4() {
  return (
    <div>

    <Container>
        <Row>
          
          <Col>
          <h2>Locations with NUP feasibility stage</h2>
      <p>Lorem, ipsum dolorLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,  sit amet consectetur adipisicing elit. Molestias aut,</p>
            
          </Col>
          <Col>
          {/* <h2>Composition of added area</h2> */}
          {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, </p> */}
          <img width="1000" height="500" src='./image/base.png' alt='map'/>
        </Col>
       </Row>
       
    </Container>
    </div>
  )
}
