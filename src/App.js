import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      books:[
        {id:0,rating:5,title:'harry potter',image:'libro01.jpg'},
        {id:1,rating:5,title:'the shining',image:'libro02.jpg'},
        {id:2,rating:5,title:'codigo da vinci',image:'libro03.jpg'},
        {id:3,rating:5,title:'el principito',image:'libro04.jpg'},
        {id:4,rating:5,title:'sobrenatural',image:'libro05.jpg'}
      ]
    };
  }
  render(){    
    return (
      <div className="app">
        <Menu title="Amozon" />
        <List items={this.state.books}/>
      </div>
    );
  }
}

export default App;
