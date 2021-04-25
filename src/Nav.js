import React ,{useState,useEffect} from 'react'
import "./Nav.css"

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        let e = window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll",e);
        };

    }, []);



    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
                alt="netflix logo"/>
           
            
        </div>
    )
}

export default Nav
