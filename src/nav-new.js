import React from 'react'
import './CSS/nav-new.css'
import { Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function NAVN(){
    return(
        <div>
            <div className='navbar'>               
                    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                        <a class="navbar-brand" href="#">Qriosity2.0</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <Route>
                            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul class="navbar-nav">
                                <li class="nav-item">
                                   <Link to='/login'><a class="nav-link" href="#">LOGIN</a></Link> 
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">RULES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">ABOUT</a>
                                </li>    
                                </ul>
                            </div>
                        </Route>  
                    </nav>
                
                
            </div>
        </div>
    )
}