import React from 'react';
import Counter from './Counter';
import Post from './Post';
//import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <User />
      </div>
      <div className="form">
        <Post 
          user = {User.data}
        />
      </div>
      <div className="contents">

      </div>
    </div>

  );
}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser : 0
    }
    this.setUser.bind(this);
    this.contentBuilder.bind(this);
  }
  data = [
    { id: 0, name: "taro", countGive: 0, countGet: 0 },
    { id: 1, name: "hanako", countGive: 200, countGet: 0 },
    { id: 2, name: "toshiki", countGive: 10, countGet: 0 }
  ]

 
  setUser = (event) => {
    this.setState  ({selectedUser: event.target.value});
  }

  contentBuilder = (image) => {
    image = `image${Number(this.state.selectedUser)+Number(1)}.jpg`;
    return (


      <React.Fragment>
        <p>{image}</p>
        <img src={image}></img>
        <form name='user'>
          
          <select name='selected' value={this.state.selectedUser} onChange={this.setUser}>

            {this.data.map((value) => <option value={value.id} > {value.name}</option>)}

          </select>
        </form>
        <p>拍手できる数：{this.data[this.state.selectedUser].countGive}{() => this.state.selectedUser()}  拍手された数：{this.data[this.state.selectedUser].countGet}</p>
      </React.Fragment>


    )

  }

  render() {
    return (
      <this.contentBuilder />

    );
  }


}















export default App;
