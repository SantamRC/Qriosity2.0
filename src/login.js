import React from 'react'
import './CSS/login.css'

export default function LOGIN(){
    return(
        <div>
            <div className='log-box'>
                <div className='side-box'>
                    <div className='login-svg'></div>
                </div>
                <form>
                    <input className='email-login' type='text' placeholder='E-MAIL'></input>
                    <input className='password-login' type='text' placeholder='PASSWORD'></input>
                    <input type='submit' className='login-button' ></input>
                </form>
            </div>
        </div>
    )
}