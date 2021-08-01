import React from 'react'
import './Header.css'


export default function IMCHeader(props){

    return (
        <header> 
            <h1> {props.title} </h1>
        </header>
     );

}