import React, { Component } from 'react';
import MyComponent from './component/MyComponent';
import EventPractice from './component/EventPractice';
import ValidationSample from './component/ValidationSample';
import ScrollBox from './component/ScrollBox';
import InteractionSample from './component/InterationSample'
import LifeCycleSample from './component/LifeCycleSample'
import CssModule from './component/CssModule'

function getRamdomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  } 

  handleClick = () => {
    this.setState({
      color: getRamdomColor()
    });
  }

  render() {
    return (
      <div>
        <MyComponent name = "React" age = {4}/>
        <EventPractice/>
        <ValidationSample/>
        <ScrollBox ref={(ref) => this.scrollBox = ref}/>
        <button onClick = {() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <InteractionSample/>
          <button onClick = {this.handleClick}>랜덤 색상</button>
          <LifeCycleSample color = {this.state.color}/>
        <CssModule/>
      </div>
    );
  }
}

export default App;