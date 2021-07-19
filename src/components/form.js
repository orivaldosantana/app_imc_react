import React from 'react';

import './form.css'


export default function IMCForm(props) {

    return ( 
        <div className="Form" > 
            
            <label> <strong> Massa: </strong></label>
            <div> 
                <input id="massa" /> 
            </div>
            <label><strong> Altura: </strong> </label>
            <div> 
                <input id="altura" />
            </div>
            <button type="button"> Calcular </button>
        </div>
    );
}