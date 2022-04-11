import React, { Component } from "react";

class IMCForm extends Component {

    render(){
        return(
            <form> 
                <div>
                    <label>Massa: </label>
                    <input type="number" id="massa" />
                </div>
                <div>
                    <label>Massa: </label>
                    <input type="number" id="massa" />
                </div>
                <div>
                    <input type="submit" value="Calcular" />
                </div>

            </form>
        ) 
    }; 
}

export default IMCForm; 