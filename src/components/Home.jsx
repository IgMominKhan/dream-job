import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Hiring from '../assets/animation/hiring.json';

const Home = () => {
    return (
        <main className='w-11/12 mx-auto '>
            <div className="min-h-[calc(100vh-7rem)] flex items-center justify-center">

                <div className="flex flex-col lg:flex-row gap-6 py-16">
                    <div className='text-center flex flex-col  justify-center lg:text-left flow-content flex-1 p'>
                        <h1 className='text-[clamp(2.5rem,1.75rem+3vw,4.5rem)] leading-[1.15] md: font-extrabold lg:max-w-[10ch] max-w-[15ch] mx-auto lg:mx-0'>One Step closer to your <strong className='bg-gradient bg-clip-text text-transparent'>deam job</strong></h1>
                        <p className='max-w-[45ch] mx-auto text-dark03 text-lg lg:mx-0'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Link className='gradient-btn lg:self-start self-center' to='#jobs'>Get Started</Link>
                    </div>
                    <div className='flex-1'>
                        <Lottie animationData={Hiring} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;