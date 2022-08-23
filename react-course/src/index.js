import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Button } from "./Button";
import {TaskCard} from './Task';
import {Saludar} from './Saludar';
import {Post} from './Posts';
import {useState} from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const handleChange = (e) => {
  console.log(e.target.value)}

const users = [
  {
    id: 1,
    name: 'Ryan Ray',
    image: 'http://robohash.org/user1'
  },
  {
    id: 2,
    name: 'Joe Morales',
    image: 'http://robohash.org/user2'
  }
]

/* C O N T A D O R   U S E S T A T E
function Counter() {

  const [counter, setCounter] = useState(10)

  return (
    <div>
      <h1> Counter: {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>
          Sumar
      </button>
    </div>
  )
  */
function Counter() {

  const [mensaje, setMensaje] = useState('')
  const [counter, setCounter] = useState(0)

  useEffect(() =>{
    console.log('render')
  }, [counter]);

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)}/>
      <button onClick={() => {
        alert('El mensaje es: ' + mensaje)
      }}>
        Save
      </button>

      <hr/>
        <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter +1)}>
        Incrementar
      </button>
    </div>
  )
}


root.render(
  <>

  <Counter/>

   {/* 
    {users.map((user, i) => {
      return (
        <div key='i '>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
      );
    })}

    <Post/>
    <TaskCard ready={true}/>
    <Saludar/>   
    <Button text="Saludar"/>
    <input id="hola" onChange={handleChange}/>
   
    <Button text='Click me'/>
    <Button text='Pay me'/>
    <Button text='Hello World'/>


    A R R A Y S
    <UserCard 
      name="Ryan Ray" 
      amount={3000} 
      married={true}
      points={[99, 33.3, 22.2]} 
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function() {alert('Hello')}}
    />

    <UserCard
      name="Joe Mcmillan"
      amount={1000}
      married={false}
      points={[1000, 20]}
      address={{
        street: "av some 123",
        city:"Madrid"
      }}
    /> */}

  </>

);
