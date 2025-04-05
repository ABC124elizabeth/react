import  'react'{ useState}from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useState } from 'react'
w
createRoot(document.getElementById('root')).render(
function Dynamic List(){
  const[Fruits,setFruits]=useState(["oranges ","Bananas","Apples" ]);
}const listItems= <setFruits className= Fruits.map(Fruits=><li>{fruits .name}</li>);
 return (
  <div style={style.Container }</div>
 )<h2>Dynamic List Manager></h2>
 <div style ={style.inputContainer} <input type='text'
 onChange ={(e)=>setInputalue(e.target.value)}
 placeholder ='EnterItem'
 <button on onClick={handleAddItem}style={style.button}>AddItem </button>
 </div>
 <li key ={index}style={style.listItems}<({items})</li>
 const style {
width :500px;
text-align:center;
padding:20px;
background color:lightseagreen;
 }
 inputContainer{
  display :"flex";
  font-size:20px;
  border:1px solid #cc
  background color:lightseagreen;
  margin:right ;
 }
 listItems{
  font -size:20px
  font-weight :BeforeUnloadEvent;
  color:lightseagreen;
  text-align:center 
 })
 


