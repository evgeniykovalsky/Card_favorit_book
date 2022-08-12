
import './App.css';
import React, { useState } from 'react';



function App(props) {

 const[description,setDescription]= useState(false)

  return (

       <div className="conteiner">
    <div className="head">{props.data.book}</div>

    <div className="mainBody">
        <div className="picture"> <img src={props.data.image} alt={props.data.id}/></div>
        <div className="description">
            <p><span>АВТОР</span> </p>
            <p><span>Имя:</span> {props.data.Name}</p>
            <p><span>Фамилия:</span> {props.data.SurName}</p>
            <p><span>Название книги:</span> {props.data.book}</p>
          
            <p className="lsDesc">{props.data.description}</p>
           
        </div>
    </div>
    <div className="footer">
        <button 
            onClick={()=>setDescription(prev =>!prev)}
            >{description? 'Cкрыть':'Подробнее..'}</button>
            {description && <p>{props.data.allDescription}</p>}
    </div>
    
 </div>
   
  );
}

export default App;
