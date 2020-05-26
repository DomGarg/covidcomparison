import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './comp/Cards/Cards';
import Charts from './comp/Charts/Charts';
import {fetchData} from './api';

class App extends React.Component {
  state = {
    data: {}
  }


  async componentDidMount() {
    const data = await fetchData();
    this.setState({data: data});
  }
  render() {
    const { data } = this.state;
    return (
    <div className={StyleSheet.container}>
      <Cards data={data}/>
      <h2> </h2>
      <Charts data={data}/>
    </div>
    )
  }
}

export default App;
