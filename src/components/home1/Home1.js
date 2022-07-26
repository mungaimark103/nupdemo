import React from 'react'
// import Main from '../Main'
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';

export default function Home1() {

    const data = [
        { name: "niger", users: 2000000 },
        { name: "timbuktu", users: 150000 },
        { name: "nepal", users: 1000000 },
        { name: "acree", users: 50000 },
      ];
  return (
    <div>
         <div style={{ }}>
      
      <div className="App">
      {/* <Header/> */}
      {/* <Main/> */}
      <Container className='ps-0'>
        <Row className='g-10'>
          
          <Col>
          <h2>brief bar chart representation</h2>
          <p className='pop-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
          
        </p>
        <PieChart width={400} height={400}>
          <Pie
           dataKey="users"
           isAnimationActive={true}
           data={data}
           cx={200}
           cy={150}
           outerRadius={80}
           fill="#8884d8"
           label
         />
         <Tooltip />


       </PieChart>
       </Col>
       <Col>
          <h2>Urban Extent</h2>
          <p className='pop-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
          Lorem, iLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, psum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
          </p>
        </Col>
       <Col>
       <h2>Brief graphic repesentation</h2>
       <p className='pop-text'>Lorem, ipsLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, um dolor sit amet consectetur adipisicing elit. Molestias aut, 
         </p>
       <BarChart
         width={400}
         height={300}
         data={data}
         margin={{
           top: 5,
           right: 30,
           left: 80,
           bottom: 5,
         }}
         barSize={100}
       >
         <XAxis
           dataKey="name"
           scale="point"
           padding={{ left: 10, right: 10 }}
         />
         <YAxis />
         <Tooltip />
         <Legend />
         <CartesianGrid strokeDasharray="3 3" />
         <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
         
       </BarChart>
       </Col>
       </Row>
       
       </Container>
     </div>
   </div>
    </div>
  )
}
