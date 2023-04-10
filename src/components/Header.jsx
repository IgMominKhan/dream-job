import { useState } from 'react';
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/outline'


export default function Header() {
    const [isOpen, setIsOpen] = useState();
    return (
        <header className="bg-gradient-to-r from-accent/20 to-primary/20">

            <div className="container py-8 relative">
                <nav className={`flex items-center justify-between`}>

                    {/* brand name / logo */}

                    <h1 className="font-bold text-4xl"><Link to='/'>Dream Job</Link></h1>

                    {/* hamburger icon hidden on large device*/}

                    <div className="w-8 h-8 lg:hidden" onClick={() => setIsOpen(prevState => !prevState)}>{isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}</div>

                    {/* navigation links */}

                    <ul className={`text-center text-xl text-dark03 flex gap-4 lg:gap-8 flex-col lg:flex-row lg:flex fixed lg:static lg:w-[auto] ${isOpen ? 'bg-slate-700 rounded-lg text-white font-bold right-auto top-32 w-[calc(100vw-12%)] p-8' : 'hidden w-auto -right-full'}`}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='statistics'>Statistics</Link>
                        </li>
                        <li>
                            <Link to='applied-jobs'>Applied Jobs</Link>
                        </li>
                        <li>
                            <Link to='blog'>Blog</Link>
                        </li>
                        <li className='lg:hidden'>
                            <Link className='gradient-btn inline-block' to='#'>Start Applying</Link>
                        </li>
                    </ul>

                    {/* apply button hidden on small devices */}

                    <div className="hidden lg:block">
                        <Link className='gradient-btn' to='#'>Start Applying</Link>
                    </div>
                </nav>
            </div>

        </header>
    )
}