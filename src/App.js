
import './App.css';

import { Component } from 'react';
import CardList from './components/card-list/cardlist.component';
import SearchBox from './components/search-box/searchbox.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }
      ))
  }


  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();


    this.setState(() => {
      return { searchField };
    })
  }

  render() {

    const { monsters, searchField } = this.state;

    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">

        <h1 className='apptitle'>Monsters</h1>

        <SearchBox onChangeHandler={onSearchChange} placeholder='Search monsters' className="search-box" />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
