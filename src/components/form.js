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
        console.log("Dados do form: "+ this.state.mass +" "+ this.state.hight )
        //evita atualizar a página 
        event.preventDefault(); 
    }

    render() {
        return ( 
            <form className="Form" onSubmit={this.handleSubmit} >
                <label> <strong> Massa: </strong></label>
                <div> 
                    <input type="number" value={this.state.mass} onChange={this.handleChangeMass} id="massa" /> 
                </div>
                <label><strong> Altura: </strong> </label>
                <div> 
                    <input type="number" value={this.state.hight} onChange={this.handleChangeHight} id="altura" />
                </div>
                <div className="BtnSubmit"> 
                    <input type="submit" value="Calcular"/> 
                </div>
            </form>
        );
    }
}