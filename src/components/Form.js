import React, { Component } from "react";

import './Form.css' 

class IMCForm extends Component {
    constructor(props){
        super(props) 
        this.state = {mass: '', hight: ''};

        this.handleChangeMass = this.handleChangeMass.bind(this);  
        this.handleChangeHight = this.handleChangeHight.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChangeMass(event){
        this.setState( {mass: event.target.value} ); 
        //console.log(event.target.value) 
    }

    handleChangeHight(event){
        this.setState({hight: event.target.value}); 
    }

    handleSubmit(event){
        event.preventDefault(); 
        const inMass = this.state.mass; 
        const inHight = this.state.hight;         
        const imc = inMass/(inHight*inHight); 
        console.log("Dados do form:\n Massa: "+inMass+"\n Altura: "+inHight+"\n IMC: "+imc);
        this.props.onIMCChange(imc); 

        
    }

    render(){
        return(
            <div className="Form">
                <form onSubmit={this.handleSubmit}> 
                    <div>
                        <label>Massa: </label>
                        <input type="number" step="0.01" id="massa" onChange={this.handleChangeMass} />
                    </div>
                    <div>
                        <label>Altura: </label>
                        <input type="number" step="0.01" id="altura" onChange={this.handleChangeHight}/>
                    </div>
                    <div className="BtnSubmit">
                        <input type="submit" value="Calcular" />
                    </div>
                </form>
            </div>
        ) 
    }; 
}

export default IMCForm; 