import React from 'react';
import logo from './logo.svg';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';



class App extends React.Component {

   state = {lat: null, errorMessage: ''};

  componentDidMount(){
    console.log('ComponentDidMount');
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude}),
      err => this.setState({ errorMessage: err.message})
    );

  }

  componentDidUpdate(){
    console.log('ComponentDidUpdate');
  }

  renderContent(){
      if(this.state.errorMessage && !this.state.lat){
       return (
          <div>Error: {this.state.errorMessage}</div>
        );
      }else if (!this.state.errorMessage && this.state.lat){
         return <SeasonDisplay lat={this.state.lat} />
      }

       return <Spinner message="Please accept location request"/>;
  }

  render() {
      return (
        <div className="border red">
             {this.renderContent()}
        </div>
      );
  }
    
   
}

export default App;
