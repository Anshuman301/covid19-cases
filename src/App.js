import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CountryList from './components/CountryList/CountryList';
import SearchBox from './components/SearchBox/SearchBox';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
     countries:[],
     stats:[],
     searchField:''
    }
  }
  async componentDidMount(){
    const resp = await fetch('https://api.covid19api.com/countries')
    const Countries = await resp.json()
    this.setState({countries : Countries})
    const resp2 = await fetch ('https://api.covid19api.com/summary')
    const data = await resp2.json()
    const a=(data.Countries)
    this.setState({
      stats : a
    })

  

  }
  handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }
  render(){
    
    const {stats,searchField} = this.state
  
    const filteredCountries = stats.filter(country =>(
      country.Country.toLowerCase().includes(searchField.toLowerCase())
    ))
    console.log(filteredCountries)
    return(
      <div className="App">
        <h1 >Covid-19 Stats</h1>
        <SearchBox placeholder="Enter country name ..." handleChange={this.handleChange}/>
        <CountryList stats = {filteredCountries}/>
    </div>
    )
  
}
}
export default App
