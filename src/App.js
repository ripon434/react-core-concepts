
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';




function App() {
  
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>

    </div>
    
  );
}


function ExternalUsers() {
  const [users, setUsers] = useState([]); //default value==> ([])
  useEffect(() => {  //when use fetch and must need to use==>useEffect and tow parameter [ex: useEffect(()=>{},[]); ] 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h1>External Users</h1>
      {
        users.map(user => <User name={user.name} username={user.username} Email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className="person">
      <h2>name:{props.name}</h2>
      <h3>userName:{props.username}</h3>
      <p>Email:{ props.email}</p>
    </div>
  )
}









function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    // const newCount = count + 1;
    setCount(count+1);
  }
  const handleDecrease = () => {
    // const newCount = count + 1;
    setCount(count-1);
  }
  
  
  
  return (
    <div className="count">
      <h2>Count:{count} </h2>
      <button onClick= {handleIncrease}>Increase</button>
      <button onClick= {handleDecrease}>Decrease</button>

    </div>
  )
}


export default App;




/*

const products = [
    { name: 'mobile', price: 10000 },
    { name: 'camera', price: 20000 },
    { name: 'leptop', price: 40000 },
    { name: 'kagi', price: 50000 },
    { name: 'kagi', price: 880000 },
    { name: 'baj', price: 900300 },
    { name: 'book', price: 9003200 },
    { name: 'cycle', price: 9000120 },
  ];

<div className="App">
      { <Product name="mobile" price="15000"></Product>
      <Product name="leptop" price="5000"></Product>
      <Product name="kagi" price="1000"></Product>
      <Product name="camera" price="500"></Product> }


       {
        products.map(pro=><Product name={pro.name} price={pro.price}></Product>)
       }

     </div>


*/








 {/* import logo from './logo.svg';
import './App.css';



function App() {
  const names = ['agun', 'jubun', 'fagun', 'nabil', 'kabil'];
  
   const students = [
    { name: 'agun', profession: 'student' },
    { name: 'juban', profession: 'police' },
    { name: 'fagun', profession: 'army' },
    { name: 'nabil', profession: 'border gard' }
   ];
  
  return (
    <div className="App">

      <ul>
        {
          names.map(student => <li>{student}</li>)
        }
      </ul>
      {
        students.map(student => <Friend name={student.name} profession={ student.profession}></Friend>)
      }
      
    </div>
  );
}


function Friend(props) {
  return (
    <div className="person">
      
      <h1>Name:{ props.name}</h1>
      <h3>profession:{ props.profession}</h3>
     
   
    </div>
  );
}

export default App; */}

 






{/* import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      
      <Student name="sd ripon" profession="student"></Student>
      <Student name="kamal" profession="job holder"></Student>
      <Friend phone="apple" delivary="home"></Friend>
      

      
     
    </div>
  );
}

function Student(nam) {

  const person = {
     backgroundColor:'green',color:'red',border:'10px solid salmon',borderRadius:'30px',padding:'10px',margin:'20px'
  }
  console.log(nam);
  return (
    <div style={person}>
      <h1>name: {nam.name}</h1>
      <h4>profession: {nam.profession}</h4>
     
    </div>
  )
}

function Friend(nam) {
  return (
    <div className="person">
       <h1>phone: {nam.phone}</h1>
      <h4>dalivary: { nam.delivary}</h4>
    </div>
  )
}



export default App;


  */}