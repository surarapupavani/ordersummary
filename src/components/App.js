import React from 'react';
import Navbar from './Nav/Navbar';
import { Route, Switch } from "react-router";
import OrderStatusComponent from './orderstatus';

function App() {
  return (
    <div className="App">
      <Navbar />
      <switch>
    <Route path="/status">
      <OrderStatusComponent />
    </Route>
      </switch>
    </div>
  );
}

export default App;
