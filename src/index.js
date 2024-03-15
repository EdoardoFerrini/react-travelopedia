import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./app/layout/Header"
import DestinationIndex from "../src/app/components/DestinationIndex"
import { store } from "../src/Redux/store"
import { Provider } from "react-redux"
import RandomDestination from './app/components/RandomDestination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <DestinationIndex />
      <RandomDestination />
    </Provider>
  </React.StrictMode>
);

