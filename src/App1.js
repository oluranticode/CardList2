import React from 'react';
import Cardlist from './card-list/card-list.component'
import './App.css';

class App1 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
         monsters :   [],
         searchField: ''
    };
}

componentDidMount(){
    this.getMonster();
}

getMonster = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    this.setState({
        monsters : data
    });
}

    getSearch = (event) => {
        this.setState({
            searchField: event.target.value

        }, () => console.log(this.state));
         
    }

    render(){
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return(
            <div className="App1">
            <input className="search" type="search" placeholder="search monsters" onChange={this.getSearch} />
            <Cardlist monsters={this.state.monsters = filteredMonsters} />
            </div>
        );
    }
}

export default App1;