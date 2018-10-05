// É necessário sempre importar as classes React e Component
import React, { Component } from 'react';

// Todo componente no React é uma classe que herda de Component
class Tasks extends Component {

    // Componentes possuem construtores (OOP)
    constructor(props){
        // É necessário enviar as propriedades para a classe base (Component)
        super(props);

        // O state pode ser entendido como a memória deste componente
        this.state = {
            nome: "Jonatan",
            tarefas: [
                {
                    titulo: "Fazer café",
                    descricao: "Até as 10 da noite"
                },
                {
                    titulo: "Escovar os dentes",
                    descricao: "Antes de dormir"
                },
                {
                    titulo: "Subir o código",
                    descricao: "Hoje ainda"
                },
            ]
        }
    }

    // Todo componente no React retorna um JSX através do método render
    render(){
        return (
            <div>
                <h2>Atividades do {this.props.nome}</h2>
                <p>Idade: {this.props.idade}</p>
                <ul>
                {
                    this.state.tarefas.map((item, index) => {
                        return (
                            <li>{item.titulo} - {item.descricao}</li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}

// Todo componente deve ser exportavel
export default Tasks;