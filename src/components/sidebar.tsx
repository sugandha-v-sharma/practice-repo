import React from 'react'

function Sidebar() {
    return (
        <>
            <ul className='text-center'>
                <a href="/emiCalculator">
                    <li className='p-3'>
                        EMI Calculator
                    </li>
                </a>
                <a href="/users">
                    <li className='p-3'>
                        Users
                    </li>
                </a>
                <a href="/todoList">
                    <li className='p-3'>
                        ToDo List
                    </li>
                </a>
                <a href="/counter">
                    <li className='p-3'>
                        Counter
                    </li>
                </a>
                <a href="/userData">
                    <li className='p-3'>
                        User Data
                    </li>
                </a>
            </ul>
        </>
    )
}

export default Sidebar