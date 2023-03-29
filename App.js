import React from "react";

import Mobiles And Computers from './screen1';
import Mobile Accessories  from './screen2';
import SmartPhone from './screen3';

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
function app(){
  return{
    <div>
    <div>
      <center><div>
        <h2>Catogories</h2>
    </div></center>
    <center>
    <div class="box">
        <div class="item"><a href="screen2.js">Mobiles And Computers</a> <br></div>
              <div class="item">TV, Applications, Electronics <br></div>
                 <div class="item"> Mens Fashion</div>

     </div></center>

    
        
    </div>
    </div>
    <center>
        <table class="tab ">
        <thead>
            <tr>
            <th>Product Name</td>
            <th>price</td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>product1</td>
            <td>00</td>
            </tr>
            <tr>
            
                <td>product2</td>
                <td>00</td>

            </tr>
        </tbody>
        
    </table></center>
  }
}


