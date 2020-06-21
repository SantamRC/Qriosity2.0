import React from 'react'
import './CSS/nav-new.css'
import { Route,Link} from 'react-router-dom'

export default function NAVN(){
    return(
        <div>
            <div className='navbar'>
                <Route>             
                    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                        <Link to='/'><a class="navbar-brand" >Qriosity2.0</a></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul class="navbar-nav">
                                <li class="nav-item">
                                   <Link to='/login'><a class="nav-link" >LOGIN</a></Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">RULES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">ABOUT</a>
                                </li>    
                                </ul>
                            </div>
                    </nav>               
                </Route>  
            </div>
        </div>
    )
}