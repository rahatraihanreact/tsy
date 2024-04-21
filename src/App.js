import{Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Friends} from "./Friends";
import "./App.css";
import { useState } from "react";
import { List } from "./components/list/List";


export const App =()=>{
    
    const [count , setCount] = useState(0);
    
    const addition=()=>{
        setCount(count=>count+1);
    }
    const substraction=()=>{
        if (count>0) {
            setCount(count=>count-1);
        }
        
    }
    const pageHello = "Hey There User,";
    const pageDescription = "Your Friend Suggestions :";
    
    return(
        <div>
            <Header/>
            <div>
                <h1 className="App">Counting</h1>
                <div className="box">
                    <p>{count}</p>
                    <button onClick={addition} className="add">Add</button>
                    <button onClick={substraction} className="sub">Sub</button>
                </div>
                <h2> {pageHello} </h2>
                <h3> {pageDescription} </h3>
                <Friends/>
            </div>
            <br /><br />
            <List/>

            <br /><br />
            <Footer/>
        </div>
    );
};