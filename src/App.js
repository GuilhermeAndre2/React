import React from 'react';
import './App.css';
import SW1 from './SW1.png';
import './index.js';



//Exibe na tela em formato com apenas o horario
// Vai exibir quando chamado la na função APP
function DataFormatada(props) {
  return <p>{props.date.toLocaleTimeString()}</p>
}


//Criando Classe chamada clock que herda de um componente React
//Essa classe será chamada na renderização do App
class Clock extends React.Component{
  constructor(props){
    super(props);
    //State é um objeto que dentro dele tem algumas propriedades que representam nossas variaveis
    this.state = {
      // Datetime.now é igual ao Date
      // Define o "state" date usando a data e hora atual
      date : new Date()
    };
  }

  //Função invocada quando a pagina é inicializada 
  //Tudo que está dentro das chaves será executado automaticamente na hora que a pagina carrega
  //Atráves da função setInterval o relogio "funciona"

  componentDidMount(){
    this.timerID = setInterval(() => {
      this.thick()
    }, 1000 );
  }


  //Ocorre quando o componente é removido da DOM
  //Por exemplo quando troca a pagina o componente não será mais renderizado
  //Quando o component for removido da DOM 
  componentWillUnmount(){
    clearInterval(this.timerID);
  }


  //Função criada para atualizar o valor do relogio e consequentimente a pagina renderizada
  thick(){
    //Set traduzido é definir
    this.setState({
      date : new Date()
    });
  }

  Stop(){
    clearInterval(this.timerID)
    window.alert("RELÓGIO " + this.timerID + " PARADO!")
  }

  Play(){
    this.timerID = setInterval(() => {
      this.thick();
    }, 1000);

    window.alert("Relógio retomado!")
  }

  //Renderiza o titulo na tela
  render(){
    return(
      <div>
        <DataFormatada date={this.state.date}/>
        <button class="btn1" onClick={() => this.Stop()}></button>    
        <button class="btn" onClick={() => this.Play()}></button>
      </div>
    )
  }
}

//Chamada no Index.js
//Função Principal
function App() {
  return (
    <div className="App">

      <header className="App-header">
        {/* Chama dois relogios para mostrar a independencia deles */}
        <div className="Div123">       
        <img src={SW1} className="SW1" alt="SW1"/>
        <img src={SW1} className="SW2" alt="SW1" />
        </div>
        <h2 class="RG1">{<Clock/>}</h2>
        <h2 class="RG2">{<Clock/>}</h2>
        
      </header>
    </div>
  );
}

//Declara que a função APP pode ser usada fora do escopo dela mesma
export default App;
