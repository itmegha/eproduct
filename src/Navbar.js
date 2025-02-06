import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { themeContext } from "./MyContext/ThemeProvider";
import dark from './dark_mode_24dp_1E124A_FILL0_wght400_GRAD0_opsz24.svg';
import light from './wb_sunny_24dp_321D71_FILL0_wght400_GRAD0_opsz24.svg';

function Navbar(){
    const {theme,setTheme} = useContext(themeContext);
    console.log(theme);

    let navStyle = {};
    if(theme === 'light'){
        navStyle = {
            background : 'white',
            color :'#333'
        }
    }
    else{
        navStyle = {
            background : '#333',
            color :'white'
        }
    }
    return(
        <>
            <nav style={navStyle}>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/showproduct">Showproduct</Link>
                <Link to="/home">Logout</Link> 
                 {
                    theme === 'light'
                    ?(
                        <img src={dark} alt="dark" 
                            onClick={()=>setTheme('dark')}
                            style={{cursor:"pointer"}}
                        />
                    )
                    :(
                        <img src={light} alt="light" 
                            onClick={()=>setTheme('light')}
                            style={{cursor:"pointer"}}
                        />
                    ) 
                 }

            </nav>
        </>
    );
}
export default Navbar; 