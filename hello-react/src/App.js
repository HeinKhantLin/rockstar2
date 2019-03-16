import React from 'react';
import Item from './Item';
import Add from './Add';

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      data: ['A','B','C']
    }

    this.input = React.createRef();
    this.add = this.add.bind(this);
  }

  add(name){
    var data = this.state.data;
    data.push(name);

    this.setState({
      data:data
    })

  }

  render() {
    return (
      //<div>Hello World</div> /*jsx*/
      <div>
        <ul>
          {this.state.data.map(item => <Item name={item}/>)}
        </ul>
        <Add add={this.add} />
      </div>
    );
  }
}

export default App;

