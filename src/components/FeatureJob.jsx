import { Link } from 'react-router-dom';
import locationIcon from '../assets/Icons/Frame-4.png';
import dollar from '../assets/Icons/Frame.png';
export default function FeatureJob({ job }) {
    const { _id, title, logo, location, salary, jobType, typeOfEmployment, company } = job;
    return (
        <div className="border rounded-lg p-5 md:p-8 text-start flow-content-sm">
            <img src={job.logo} />
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

            <Link to={`jobs/${_id}`} className='inline-block gradient-btn !py-3 !px-5'>View Details</Link>

        </div>
    )
}