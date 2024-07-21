import React from 'react'

function Header() {
  return (
    <div className='bg-slate-400'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <div className='text-4xl font-bold'>Auth App</div>
            <div>
                <ul className='flex gap-10 text-2xl max-w-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Signin</li>
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default Header