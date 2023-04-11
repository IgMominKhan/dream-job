
import { useState, useEffect } from "react";
import { getJobsFromDatabase } from "../../utilities/utilities";
import { Link, useOutletContext, Form } from "react-router-dom";
import locationIcon from '../assets/Icons/Frame-4.png';
import dollar from '../assets/Icons/Frame.png';
import { ChevronDownIcon } from '@heroicons/react/24/outline'


function ShowSavedJob({ job }) {
    const { _id, title, logo, location, salary, jobType, typeOfEmployment, company } = job;
    return (
        <div className="flex lg:items-center flex-col lg:flex-row border rounded-lg p-5 md:p-8 text-start flow-content-sm gap-8">
            <div className="h-48 sm:w-48  rounded-lg flex items-center justify-center bg-slate-300"><img className="max-w-3/4" src={logo} alt="" />

            </div>

            <div className="mr-auto flow-content-sm">
                <h4 className="text-2xl font-extrabold text-dark02 my-">{title}</h4>
                <p className="text-xl font-semibold text-dark03">{company}</p>
                <div>
                    <button className='cursor-default outline outline-1 outline-primary px-4 py-1 text-transparent bg-gradient bg-clip-text rounded font-extrabold mr-4'>{typeOfEmployment}</button>
                    <button className="cursor-default outline outline-1 outline-primary px-4 py-1 text-transparent bg-gradient bg-clip-text rounded font-extrabold mr-4">
                        {jobType}
                    </button>
                </div>

                <div className='flex gap-4 -ml-1 font-semibold text-dark03 text-xl'>
                    <span><img className='inline' src={locationIcon} /> {location}</span><span> <img className='inline' src={dollar} /> Salary: {salary}</span>
                </div>
            </div>

            <Link to={`/jobs/${_id}`} className='self-center gradient-btn !py-3 !px-5'>View Details</Link>


        </div>
    )
}


const AppliedJobs = () => {
    const { jobs } = useOutletContext();
    // console.log(jobs)
    let [savedJobs, setSavedJobs] = useState([]);


    useEffect(() => {

        let tempJobs = []

        const savedData = getJobsFromDatabase();
        for (const id of savedData) {
            const foundJob = jobs.find(job => job._id === id)
            if (foundJob) {
                tempJobs.push(foundJob)
                console.log(tempJobs)
            }
        }

        setSavedJobs(tempJobs)
    }, []);


    function filterBy(val){
        
    }
 
    return (
        <section className="container">
            <Form className='flex justify-end mt-16'>
                <select id="sort" className="bg-slate-300 appearance-none py-3 px-5 font-medium rounded-lg">
                    <option> Filter By <ChevronDownIcon className="w-5 h-5" /></option>
                    <option>Remote</option>
                    <option>On-Site</option>
                </select>
            </Form>

            <div className="my-12 flow-content">{savedJobs.map(job => <ShowSavedJob job={job} />)}</div></section>
    )
}

export default AppliedJobs;