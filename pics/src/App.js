import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ImagesList from './components/ImagesList';


class App extends Component {
  state = {
    term : '',
    images: []
  };

  onSearchSubmit = async (event) => {
    event.preventDefault();
    const term = this.state.term;
    const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: term,
            client_id: 'W0JaZKHZByN0r_P1Y3agUxL4LFQ62NGlJBxqZAZLsS8'
          }
    });
     this.setState({
        images: response.data.results
     });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <div className="ui segment">
                 <form className="ui form" onSubmit={this.onSearchSubmit.bind(this)}>
                     <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                        onChange={(e) => this.setState({ term: e.target.value})} 
                        value={this.state.term}/>
                     </div>
                 </form>
        </div>
      <h3>Has {this.state.images.length} images</h3>
      <ImagesList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
