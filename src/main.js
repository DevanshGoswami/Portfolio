import React, {useEffect} from 'react';
import App from './App';
import AOS from 'aos';
import "aos/dist/aos.css";

const Main = () =>{
    useEffect(()=>{
        AOS.init();
        });
    return(
        <App/>
    );
}

export default Main;