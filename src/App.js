import React from 'react';
import Nav from './Component/Nav';

// import Nav from './Component/Nav';
import './App.css';
const tab = [{menu:"Home"},{menu:"Services", submenu:["For entrepreneurs","For students","For Hobbyists"]},{menu:"Contact"}]
// const tab = ["Home", "Services",["For entrepreneurs","For students","For Hobbyists"]]

function App() {
  return (
    <div className="App">
      <Nav arr={tab}/>

    </div>
  );
}

export default App;
