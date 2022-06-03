import React, {useContext} from 'react';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Context} from "./context/Context";


function App() {
    const {user}= useContext(Context);

    let RegisterOrRedirect=<Register/>;
    let LoginOrRedirect=<Login/>;
    let WriteOrRedirect=<Register/>;
    let SettingsOrRedirect=<Register/>;
    if(user){
        RegisterOrRedirect=<Home/>;
        LoginOrRedirect=<Home/>;
        WriteOrRedirect=<Write/>;
        SettingsOrRedirect=<Settings/>
    }
  return (

      <BrowserRouter>
      <TopBar/>
        <Routes>
            <Route path="/" exact element={<Home/>}/>

            <Route path="/login" element={LoginOrRedirect}/>
            <Route path="/register" element={RegisterOrRedirect}/>
            <Route path="/write" element={WriteOrRedirect}/>
            <Route path="/settings" element={SettingsOrRedirect}/>

            <Route path="/post/:postId" element={<Single/>}/>


        </Routes>

      </BrowserRouter>

  );
}

export default App;
