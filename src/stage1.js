import React from 'react'
import './CSS/stage1.css'
import { Link } from 'react-router-dom'

export default function STG1(){
    return(
        <div>
            <div className='card-deck'>
                <div className='card bg-primary'>
                    <div className='card-body text-center'>
                        <Link to='/s1q1'><div className='card-text'>Question 1</div></Link>
                    </div>
                </div>
                <div className='card bg-primary'>
                    <div className='card-body text-center'>
                        <div className='card-text'>Question 2</div>
                    </div>
                </div>
                <div className='card bg-primary'>
                    <div className='card-body text-center'>
                        <div className='card-text'>Question 3</div>
                    </div>
                </div>
                <div className='card bg-primary'>
                    <div className='card-body text-center'>
                        <div className='card-text'>Question 4</div>
                    </div>
                </div>
                <div className='card bg-primary'>
                    <div className='card-body text-center'>
                        <div className='card-text'>Question 5</div>
                    </div>
                </div><div className='card bg-primary'>
                    <div className='card-body text-center'>
                        <div className='card-text'>Question 6</div>
                    </div>
                </div>
            </div>
        </div>
    )
}