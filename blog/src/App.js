import React from 'react';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <>
      <TopBar/>
      {/*<Home/>*/}
      {/*<Single/>*/}
          <Write/>
      </>
    </div>
  );
}

export default App;
