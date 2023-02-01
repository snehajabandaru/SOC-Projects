/*import React from "react";

import  ReactDOM  from "react-dom";

import App from "./App"

 

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <React.StrictMode>

        <App/>

    </React.StrictMode>

);

import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Book";
import info from "./information";

function Books() {
  return (
    <section className="books">
      <div className="Book1">
        <Book img={info[0].img} title={info[0].title} PRICE={info[0].PRICE} />
      </div>
      <div className="Book2">
        <Book img={info[1].img} title={info[1].title} PRICE={info[1].PRICE}/>
      </div>
      <div className="Book3">
        <Book img={info[2].img} title={info[2].title} PRICE={info[2].PRICE}/>
      </div>
      <div className="Book4">
        <Book img={info[3].img} title={info[3].title} PRICE={info[3].PRICE}/>
      </div>
    </section>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Books />);
export default Books;*/


import React from 'react';
import ReactDOM from 'react-dom/client';
// import {default as M1, M2,M3 } from './mycode';
// import M11 from './mycode2';
//import Yourapp from './yourapp';
//import App from './App';
// import UseSE from './UseSE';
import ContextAPI from './context-api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextAPI></ContextAPI>
  {/* <M1/>
  <M2/>
  <M3/>
  <M11/> */}
  </React.StrictMode>
);

