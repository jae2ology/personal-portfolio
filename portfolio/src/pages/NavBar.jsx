import React from 'react';

export default function NavBar() {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="flex-none">
                <a className="btn btn-ghost text-xl">Jae's Portfolio</a>
            </div>

            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}