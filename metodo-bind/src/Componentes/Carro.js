import React from "react";

class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo = 'Siena'
        this.state = {
            ligado: false,
            velAtual: 0
        }
        this.ld=this.ligarDesligar.bind(this)
    }
    ligarDesligar(){
        //this.state.ligado = true
        //this.setState({ligado:!this.state.ligado})
        this.setState(
            (state)=>({
                ligado:!this.state.ligado
            })
        )
    }
    acelerar(){
        this.setState(
            (state,props)=>({
                velAtual:state.velAtual + props.fator
            })
        )
    }

    render(){
        return(
            <>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim': 'Não'}</p>
                <p>Velocidade atual: {this.state.velAtual}</p>
                <button onClick={this.ld}>{this.state.ligado ? "Desligar carro" : "Ligar Carro"}</button>
                <button onClick={()=>this.acelerar()}>Acelerar</button>
            </>
        )
    }
}
export default Carro