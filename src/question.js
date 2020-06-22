import React from 'react'
import './CSS/questions.css'
import { Link } from 'react-router-dom'

export default function QUES(){
    return(
        <div className='card-deck'>
            <div className='card bg-primary'>
                <div className='card-body text-center'>
                    <Link to='/stage1'><div className='card-text'>Stage 1 Questions</div></Link>
                </div>
            </div>
            <div className='card bg-success'>
                <div className='card-body text-center'>
                    <div className='card-text'>Stage 2 Questions</div>
                </div>
            </div>
            <div className='card bg-danger'>
                <div className='card-body text-center'>
                    <div className='card-text'>Stage 3 Questions</div>
                </div>
            </div>
        </div>
    )
}