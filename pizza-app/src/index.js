import React from 'react';
// import ReactDOM from 'react-dom'; fro react v17 or lesser
import ReactDOM from 'react-dom/client';//react v18
//import externel css
import './index.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


// creating react App component
function App(){
  return (
    <div className="container">
      <Header />
      {/*
        because we put it into Menu component
       <Pizza/>
      <Pizza/>
      <Pizza/> */}
      <Menu />
      <Footer />
    </div>
  );
}

function Header(){
  const style = {
    // color:'red',
    // fontSize:'54px',
    // textTransform:'uppercase'
  };
  return (
    <header className="header">
      <h1
        style={
          //==we extract into object variable==
          // {color:'red',
          // fontSize:'54px',
          // textAlign:'center',
          // textTransform:'uppercase'
          // }
          style
        }
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu(){
  const pizzas=pizzaData;
  // const pizzas=[];
  const pizzaNumbers=pizzas.length
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* ternary conditinal operator */}
      {pizzaNumbers > 0 ? (
        <>
      <p>
        Authentic Italian cuisine. 6 Creative dishes to choose from. All from
        stone oven, all organic, all delicious
      </p>
        <ul className="pizzas">
          {/* {pizzaData.map(pizza=><Pizza name={pizza.name} photoName={pizza.photoName} ingredients={pizza.ingredients} price={pizza.price}/>)}
           */}
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}

      {/*==define props== */}
      {/* 
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        // price="10" it string we can't add a number it will condatinate as string so we use javascript
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        // price="12"
        price={12} />*/}
    </main>
  );
}


function Pizza({ pizzaObject }) {
  console.log(pizzaObject);
  // early return
  // if (pizzaObject.soldOut) return null;
  return (
    // ===recive props===
    <li className={`pizza ${pizzaObject.soldOut ?"sold-out":''}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        {/* {pizzaObject.soldOut?<span>SOLD OUT</span>:<span>{pizzaObject.price}</span>} */}
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}
function Footer(){
  //writting javascript code in component
  //since react components are just javascript function so we can write some javascript code
  const hour=new Date().getHours()
  const openHour=12;
  const closeHour=22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if(hour>=openHour && hour<=closeHour) alert("We're Currently Open 😃");
  // else alert("sorry we're closed 🥲")
  console.log(isOpen);

  // without jsx
  //1.html node(element), 2.props, 3. child elemement
  // return React.createElement("footer",null,"we're currently Open!")

  // multiple return 
  // if(!isOpen){
  //   return (
  //     <p>
  //       We're happy to Welcome to you between {openHour}:00 and {closeHour}:00
  //     </p>
  //   );
  // }

  //with jsx
  return (
  <footer className='footer'>
  {/* this is static we dynamically render the time using conditional operator */}
  {/* {new Date().toLocaleTimeString()} we're currently open! */}

  {isOpen?<Order closeHour={closeHour} openHour={openHour}/>
  :<p>We're happy to Welcome to you between {openHour}:00 and {closeHour}:00</p>
  }
  
  </footer>
  )
}

function Order({closeHour,openHour}){
  return (<div className='order'>
  <p>We're open {openHour}:00  to {closeHour}:00. Come visit us or order online </p>
  <button className='btn'>Order</button>
  </div>)
}

// render it 
// React V18
const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)//without Strict mode
root.render(<React.StrictMode>
  <App/>
</React.StrictMode>)


//Rendering React Component Before React 18
//this would be react 17 or lesser version
// React.render(<App></App>,document.getElementById('root'))

//Authentic Italian cuisine. 6 Creative dishes to choose from. All from stone oven, all organic, all delicious
