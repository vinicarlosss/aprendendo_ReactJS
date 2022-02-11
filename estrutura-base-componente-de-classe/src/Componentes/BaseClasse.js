import React from "react";

export default class BaseClasse extends React.Component{
    constructor(props){

        //Para permitir o uso de props
        super(props)

        //state
        this.state = {
            canal: 'CFB Cursos',
            curso: 'React',
            ativo: true,
            nome: this.props.nomeAluno
        }
        this.status = this.props.status

        //bindagem
        let ad = this.ativarDesativar.bind(this)
        //Instruções do construtor
    }

    //função para manipular state
    ativarDesativar(){
        this.setState(
            state=>({
                ativo = !state.ativo
            })
        )
    }
    //Métodos ciclo de vida
    componentDidMount(){
        console.log('O componente foi criado')
    }

    componentDidUpdate(){
        console.log('O componente foi atualizado')
    }
    
    componentWillUnmount(){
        console.log('Componente removido')
    }
    //método para renderização
    render(){
        return(
            <>
                <h1>Componente de Classe</h1>
                <button onClick={this.ad}>{this.state.ativo?'Desativar':'Ativar'}</button>
            </>
        )
    }


}