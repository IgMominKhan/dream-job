import { useState } from 'react';
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'


export default function Header() {
    const [isOpen, setIsOpen] = useState();
    return (<header className="bg-gradient-to-r from-accent/5 to-primary/5 bg-sky-500/05">
        
        <div className="mx-auto w-11/12  px-4 py-8 relative">
            <nav className="flex items-center justify-between">
                {/* brand name / logo */}
                <h1 className="font-bold text-4xl"><Link to='/'>Dream Job</Link></h1>
                {/* hamburger icon hidden on large device*/}
                <div className="w-8 h-8 lg:hidden" onClick={() => setIsOpen(prevState => !prevState)}><Bars3BottomRightIcon /></div>
                {/* navigation links */}
                <ul className={`text-center text-xl text-dark03 flex gap-4 lg:gap-8 flex-col lg:flex-row lg:flex absolute lg:static lg:w-[auto] ${isOpen ? 'right-auto top-24 w-[calc(100%-2rem)]' : 'hidden w-auto -right-full'}`}>
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
                        <div className="gradient-btn">
                            <Link to='#'>Start Applying</Link>
                        </div>
                    </li>
                </ul>
            
                {/* apply button hidden on small devices */}
            
                <div className="gradient-btn hidden lg:block">
                    <Link to='#'>Start Applying</Link>
                </div>
            </nav>
        </div>

    </header>
    )
}