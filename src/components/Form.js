import React, { Component } from "react";

class IMCForm extends Component {
    constructor(props){
        super(props) 
        this.state = {mass: '', hight: ''};

        this.handleChangeMass = this.handleChangeMass.bind(this);  
    }

    handleChangeMass(event){
        
        this.setState( {mass: event.target.value} ); 
        console.log(event.target.value) 
    }

    render(){
        return(
            <form> 
                <div>
                    <label>Massa: </label>
                    <input type="number" id="massa" onChange={this.handleChangeMass} />
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