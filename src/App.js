import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function App(){
    return(
        <>
          <header>
          <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        </>
    );
}
export default App;