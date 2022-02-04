import React from "react";

class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo = 'Siena'
        this.state = {
            ligado: false,
            velAtual: 0
        }
    }
    ligar(){
        //this.state.ligado = true
        this.setState({ligado:true})
    }
    desligar(){
        this.setState({ligado:false})
    }

    render(){
        return(
            <>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim': 'Não'}</p>
                <p>Velocidade atual: {this.state.velAtual}</p>
                <button onClick={this.state.ligado ? ()=> this.desligar(): ()=>this.ligar()}>{this.state.ligado ? "Desligar carro" : "Ligar Carro"}</button>
            </>
        )
    }
}
export default Carro