import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name: "Photoshop", price: "$90.99"},
    {name: "Illustrator", price: "$80.99"},
    {name: "PDF Reader", price: "$6.99"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {products.map(product => <Products product={product}></Products>)}
        </ul>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(props){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users {users.length} </h3>
      <ul>
        {
          users.map(user => <li> {user.name} </li>)
        }
      </ul>
    </div>
  ) 
}

function Products(props){
  const style = {
    borderRadius: "5px",
    backgroundColor: "cyan",
    width: "200px",
    height: "200px",
    float: "left",
    margin: "10px",
    color: "red"
  }
  const {name, price} = props.product;
  return (
    <div style={style}>
      <h2>{name} </h2>
      <h1>{price} </h1>
    </div>
  )
}

export default App;
