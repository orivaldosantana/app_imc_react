import React, { Component } from 'react'

import './form.css'


export default class  IMCForm extends Component {
    constructor(props){
        super(props);
        this.state = {mass: '', hight: ''}; 

        
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChangeMass = this.handleChangeMass.bind(this); 
        this.handleChangeHight = this.handleChangeHight.bind(this);
    }

    handleChangeMass(event){
        this.setState({mass: event.target.value }); 
    }

    handleChangeHight(event){
        this.setState({hight: event.target.value}); 
    }
    
    handleSubmit(event){
        
        const inMass = this.state.mass; 
        const inHight = this.state.hight; 
        const imc = inMass/(inHight*inHight); 
        this.props.onIMCChange(imc);  
        console.log("Dados do form:\n massa = "+ inMass +"\n Altura = "+ inHight )
        //evita atualizar a página 
        event.preventDefault(); 
    }

    render() {
        return ( 
            <form className="Form" onSubmit={this.handleSubmit} >
                <label>  Massa: </label>
                <div className="TextIn"> 
                    <input type="number" value={this.state.mass} onChange={this.handleChangeMass} id="massa" /> 
                </div>
                <label> Altura:  </label>
                <div className="TextIn"> 
                    <input type="number" value={this.state.hight} onChange={this.handleChangeHight} id="altura" />
                </div>
                <div className="BtnSubmit"> 
                    <input type="submit" value="Calcular"/> 
                </div>
            </form>
        );
    }
}