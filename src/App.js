import React from 'react';
import { render } from '@testing-library/react';

const App=()=>{
  return(<div>
  <Cat />
  <Cat />
  <Cat />
  <Cat />
  </div>)
}

const Cat=()=>{
  return<div>Hi!</div>
}

export default App;
