import React from 'react';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      <>
      <TopBar/>
      {/*<Home/>*/}
      {/*<Single/>*/}
      {/*    <Write/>*/}
      {/*<Settings/>*/}
      {/*    <Login/>*/}
          <Register/>
      </>

    </div>
  );
}

export default App;
