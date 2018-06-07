import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({date: new Date(), margin: -20, margin2: 75, margin3: 30, margin4: 10});
    console.log("initial state is staged - 80")
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.change(),
      60
    );
    console.log("component did mount")
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  change() {
    if(this.state.margin > 75|| this.state.margin2 > 75 || this.state.margin3 > 75 || this.state.margin4 >75){
      this.setState({date: new Date(),
        margin: this.state.margin - 0.5, 
        margin2: this.state.margin2 + 1.5, 
        margin3: this.state.margin3 - 0.5,
        margin4: this.state.margin4 - 1
      });
    }
    else {
      this.setState({date: new Date(), 
        margin: this.state.margin + 0.5, 
        margin2: this.state.margin2 - 1.5, 
        margin3: this.state.margin3 + 0.5,
        margin4: this.state.margin4 + 1
      });
      console.log("new margin value")
    }  
  }
 
  render() {
    console.log("html is displayed")
    return (
      <div>
        <div>
          <p>Time: {this.state.date.toLocaleTimeString()}</p>
        </div>
        <div style = {{marginLeft: `${this.state.margin}%`, marginBottom: `-50%`}}> {/* kommentaar kirjuta niimoodi */}
          <img src={'assets/clouds2.png'} alt="cloud"/>
        </div>
        <div style = {{marginLeft: `${this.state.margin2}%`, marginBottom: `-50%`}}>
          <img src={'assets/clouds2.png'} alt="cloud"/>
        </div>
        <div style = {{marginLeft: `${this.state.margin3}%`, marginBottom: `-20%`}}>
          <img src={'assets/clouds2.png'} alt="cloud"/>
        </div>
        <div style = {{marginLeft: `${this.state.margin4}%`, marginBottom: 0}}>
          <img src={'assets/clouds2.png'} alt="cloud"/>
        </div>
      </div>
    )
  }
}

export default App;
