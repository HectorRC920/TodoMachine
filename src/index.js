import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/index.js';

function App(props) {
  return(
    <h1>{props.gretting}, {props.name}</h1>
  );
}

function withSaludo(WrappedComponent){
  return function WrappedComponentWithGretting(gretting) {
    return function ComponenteDeVerdad(props){
      return(
        <React.Fragment>
          <WrappedComponent {...props} gretting={gretting}  />
          <p>Estamos a companando al WrappedComponent</p>
        </React.Fragment>
      );
    }
  }
}
const AppWithGretting = withSaludo(App)('Quiubole');
ReactDOM.render(
    // <App saludo='hola' nombre='juancalo'/>,
    <AppWithGretting name='puto'/>,                                                                                 
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
