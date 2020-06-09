import React, { Component } from 'react';

import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/searchbox/searchbox.component';
import './App.css';

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
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
		);
		return (
			<div className="App">
				<h1> Monsters Roledex </h1>
				<SearchBox placeholder="Search monsters" handleChange={this.handleChange} />
				<CardList monster={filteredMonsters} />
			</div>
		);
	}
}

export default App;
