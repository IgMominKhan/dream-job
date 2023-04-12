import { useState, useContext } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import Lottie from 'lottie-react';
import Hiring from '../assets/animation/hiring.json';
import { CurrencyBangladeshiIcon, CpuChipIcon, RocketLaunchIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline'
import FeatureJob from './FeatureJob'
 
 
const Home = () => {

    const [showAll, setShowAll] = useState(false);

    const {jobs,setJobs} = useOutletContext();
    
    const categories = [{
        title: 'Account & Finance',
        availableJobs: 300,
        icon: <CurrencyBangladeshiIcon />,
    },
    {
        title: 'Marketing & Sales',
        availableJobs: 320,
        icon: <GlobeAsiaAustraliaIcon />
    }, {
        title: 'Engineering Job',
        availableJobs: 100,
        icon: <CpuChipIcon />
    },
    {
        title: 'Creative Design',
        availableJobs: 200,
        icon: <RocketLaunchIcon />
    }
    ]

    const Category = ({ category, children }) => {
        const { title, availableJobs, icon } = category;
        return (
            <div className='p-10 bg-accent/25 rounded-lg text-center '>
                <div className='p-4 rounded-lg bg-accent/25 w-24 h-24 mx-auto'> {icon} </div>
                <h3 className='text-xl font-extrabold text-dark02 mt-7 mb-2'>{title}</h3>
                <p className='text-dark04'>{availableJobs}+ Jobs Available</p>
            </div>
        )
    }

    return (
        <main className=''>
            <section className='bg-gradient-to-r from-accent/20 to-primary/20'>
                {/* banner / hero area */}

                <div className="container min-h-[calc(100vh-7rem)] flex items-center justify-center">

                    <div className="flex flex-col lg:flex-row gap-6 py-16">
                        <div className='text-center flex flex-col  justify-center lg:text-left flow-content flex-1 '>
                            <h1 className='capitalize text-[clamp(2.5rem,1.75rem+3vw,4.5rem)] leading-tight md: font-extrabold lg:max-w-[10ch] max-w-[15ch] mx-auto lg:mx-0'>One Step closer to your <strong className='bg-gradient bg-clip-text text-transparent'>deam job</strong></h1>
                            <p className='max-w-[45ch] mx-auto text-dark03 text-lg lg:mx-0'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <Link className='gradient-btn lg:self-start self-center' to='#jobs'>Get Started</Link>
                        </div>
                        <div className='flex-1'>
                            <Lottie animationData={Hiring} />
                        </div>
                    </div>
                </div>
            </section>

            {/* job category */}
            <div className="container">
                <section className='py-20 mx'>
                    <a id='jobs' href='jobs'></a>
                    <div className='text-center'>
                        <h2 className='text-black font-extrabold text-[clamp(2rem,1.5rem+3vw,3rem)]'>Job Category List</h2>
                        <p className='text-dark03 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12'>
                            {categories.map((category, i) => <Category key={i} category={category}></Category>)}
                        </div>
                    </div>
                </section>

                {/* featured jobs */}
                <section className="py-20 text-center" id="feature-jobs">
                    <h2 className="text-[clamp(2rem,1.5rem+3vw,3rem)] font-extrabold text-black">Featured Jobs</h2>
                    <p className="text-dark03 mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>

                    <div className="grid md:grid-cols-2 gap-6 my-12">

                        {/* jobs list here */}
                        {jobs.slice(0, showAll ? jobs.length : 4).map(job => <FeatureJob key={job._id} job={job} />)}

                    </div>
                    <button onClick={()=> setShowAll(prevState=> !prevState)} className='gradient-btn'>{showAll ? 'See Less Jobs': "See All Jobs"}</button>
                 </section>
            </div>
        </main>
    )
}

export default Home;