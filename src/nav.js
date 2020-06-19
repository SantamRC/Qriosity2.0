import React from 'react'
import './CSS/nav.css'
import {Link, Route} from 'react-router-dom'

export default function NAV(){
    return(
        <div>
            <div className='navbar'>
                <Route>
                    <div className='qriosity'><Link to=''>QRIOSITY2.0</Link></div>
                    <div className='login'><Link to='/login'>LOGIN</Link></div>
                    <div className='rules'><Link>RULES</Link></div>
                </Route>
                
            </div>
        </div>
    )
}