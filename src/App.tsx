import React from 'react';
import './App.css';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import StylesOverview from './pages/StylesOverview/StylesOverview';
import HotNow from './pages/HotNow/HotNow';

function App() {
  return (
    <div className="App">
      <Header />
    <Main />
    {/* <HotNow /> */}
    <StylesOverview />
    </div>
  );
}

export default App;
