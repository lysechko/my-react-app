import React, { Component } from 'react';

interface IProps {}

interface IState {
  value: string;
}

class Forms extends React.Component<IProps, IState> {
  state = {
    value: ''
  };

  handlerChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value }: any = e.target;

    this.setState({
      value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form className='form'>
        <input
          type='text'
          value={value}
          placeholder='Filter by address...'
          onChange={this.handlerChange}
        />
      </form>
    );
  }
}

export default Forms;
