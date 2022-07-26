import React from 'react'

import Main from '../Main'
// import Header from '../Header'
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
import Home1 from '../home1/Home1';
import Home2 from '../home2/Home2';
import Home3 from '../home3/Home3';
import Home4 from '../home4/Home4';

export default function Home() {

    const data = [
          { name: "niger", users: 200000 },
          { name: "timbuktu", users: 150000 },
          { name: "nepal", users: 100000 },
          { name: "acra", users: 50000 },
        ];
  return (

    <>
            <div style={{  }}>
      
         <div className="App">
         {/* <Header/> */}
         <Main/>
         <Container>
        <Row>
          <Col >
          <h2 style={{  }}>Population</h2>
          <p className='pop-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
          orem, ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, sit amet consectetur adipisicing elit. Molestias aut, 
          </p>
        </Col>
          <Col>
          <h2>sample brief graphical representation</h2>
          <p className='pop-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
        </p>
        <PieChart width={400} height={400}>
          <Pie
           dataKey="users"
           isAnimationActive={true}
           data={data}
           cx={200}
           cy={160}
           outerRadius={80}
           fill="purple"
           label
         />
         <Tooltip />


       </PieChart>
       </Col>
       <Col>
       <h2>brief bar chart representation</h2>
       <p className='pop-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
       orem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
         </p>
       <BarChart
         width={500}
         height={300}
         data={data}
         margin={{
           top: 5,
           right: 20,
           left: 20,
           bottom: 5,
         }}
         barSize={50}
       >
         <XAxis
           dataKey="name"
           scale="point"
           padding={{ left: 1, right: 1 }}
         />
         <YAxis />
         <Tooltip />
         <Legend />
         <CartesianGrid strokeDasharray="3 3" />
         <Bar dataKey="users" fill="purple" background={{ fill: "#eee" }} />
         
       </BarChart>
       </Col>
       </Row>
       
       </Container>
         {/* <Container style={{display:'flex', justifyContent:'left'}}>
           <Row className=""> 
             <Col xs={6} md={4}>
             <h2 >POPULATION</h2>
             <p className='pop-text'>Loregffm, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
             </p>
           </Col>
             <Col xs={6} md={4}>
             <h3> Graphical description </h3>
             <p className='pop-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,  
           </p>
           <PieChart width={400} height={500}>
             <Pie
              dataKey="users"
              isAnimationActive={true}
              data={data}
              cx={190}
              cy={150}
              outerRadius={100}
              fill="#8884d8"
              label
            />
            <Tooltip />
  
  
          </PieChart>
          </Col>
          <Col xs={6} md={4}>
          <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            </p>
          <BarChart
            width={350}
            height={500}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            barSize={500}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 0, right: 0 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="skyblue" background={{ fill: "grey" }} />
            
          </BarChart>
          </Col>
          </Row>
          
          </Container> */}
        </div>
      </div>
      <hr/>
      <Home1/>
      <hr/>
      <Home2/>
      <hr/>
      <Home3/>
      <hr/>
      <Home4/>
      
    </>
  )
}
