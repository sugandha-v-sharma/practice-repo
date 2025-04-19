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
                <a href="/bankingPage">
                    <li className='p-3'>
                        Banking Page
                    </li>
                </a>
            </ul>
        </>
    )
}

export default Sidebar