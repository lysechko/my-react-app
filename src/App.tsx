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
  loader: boolean;
}

export class App extends Component<IProps, IState> {
  state = {
    contacts: [],
    loader: true
  };

  render() {
    return (
      <div className='App'>
        <h1 className='header'>Contacts</h1>
        <ListItems contacts={this.state.contacts} loader={this.state.loader} />
      </div>
    );
  }

  fetchData = async (url: string) => {
    const resp = await axios.get(url);
    const data = await resp.data;
    return await data;
  };

  timeout = (m: number) => {
    return new Promise(resolve => setTimeout(resolve, m));
  };

  async componentDidMount() {
    const url = 'http://www.mocky.io/v2/5d779fe43200005300923f3e';
    const response = await this.fetchData(url);
    await this.timeout(3000);
    this.setState({
      contacts: response.items,
      loader: false
    });
  }
}

export default App;
