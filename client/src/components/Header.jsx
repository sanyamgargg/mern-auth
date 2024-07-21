import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='bg-slate-400'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
            <div className='text-4xl font-bold'>Auth App</div>
            </Link>
            
            <div>
                <ul className='flex gap-10 text-2xl max-w-2'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/signin"><li>Signin</li></Link>
                    
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default Header