import React from 'react';
import ReactDOM from 'react-dom';
// import HelloComponent from './components/HelloComponent';
import WorldContainer from './containers/WorldContainer';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// StateLess Component
// function HelloComponent(){
//   return <h1>Hello SteteLess Component</h1>
// }

// StateFull Component
// class WorldComponent extends React.Component{
//   render(){
//     return <p>World SteteFull Component</p>
//   }
// }

ReactDOM.render(
  <WorldContainer />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
