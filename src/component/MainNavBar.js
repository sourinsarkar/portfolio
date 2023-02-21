import React from 'react'
import logo1 from './assests/media/logos/logo.svg'

export default function MainNavBar() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container">
                    <img src={logo1} alt="Sourin Logo" width="30" height="24"> </img>
                </div>
            </nav>
        </div>
    )
}