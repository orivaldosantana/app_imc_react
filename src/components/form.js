import React from 'react';


export default function IMCForm(props) {

    return ( 
        <div> 
            <div> 
                <label>Massa: </label>
                <input id="massa" />
            </div>
            <div> 
                <label>Altura: </label>
                <input id="altura" />
            </div>
        </div>
    );
}