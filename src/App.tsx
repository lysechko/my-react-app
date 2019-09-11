import React, { Component } from 'react';
import ListItems from './components/list/ListItems';
import './components/list/ListItems';
import axios from 'axios';
import './App.css';

export interface IListItem {
  companyName: string;
  address: string;
  zipCode: string;
  city: string;
  countryName: string;
}

interface IProps {}

interface IState {
  contacts: IListItem[] | [];
}

export class App extends Component<IProps, IState> {
  state = {
    contacts: []
  };

  render() {
    return (
      <div className='App'>
        <h1 className='header'>Contacts</h1>
        <ListItems contacts={this.state.contacts} />
      </div>
    );
  }

  fetchData = async (url: string) => {
    const resp = await axios.get(url);
    const data = await resp.data;
    return await data;
  };

  async componentDidMount() {
    const url = 'http://www.mocky.io/v2/5d779fe43200005300923f3e';
    const response = await this.fetchData(url);
    this.setState({
      contacts: response.items
    });
  }
}

export default App;
