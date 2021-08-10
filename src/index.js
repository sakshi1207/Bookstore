import React from 'react';
import ReactDOM from 'react-dom';
import Bookstore from './Bookstore';
import NestedComponent from './NestedComponent';
// import FirstComponent from './firstComponent';// we imported our first component
// import MyComponent from './myComponent';



ReactDOM.render(
  <React.StrictMode>
    <Bookstore />
    {/* <NestedComponent /> */}
    {/* <FirstComponent/>  using firstcomponent */}
    {/* <MyComponent/> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

