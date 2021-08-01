import React from "react"; 


export default function Display(props) {
    const imc = parseFloat( props.imc ); 
    const displayOutput = imc !== 0 ? `Valor do IMC é ${imc}` : "" 

    return(
        <div>
            {displayOutput}
        </div>
    );
}