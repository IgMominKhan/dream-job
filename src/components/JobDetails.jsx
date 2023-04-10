import { useParams, useOutletContext } from "react-router-dom";
import locationIcon from '../assets/Icons/Frame-4.png';
import dollarIcon from '../assets/Icons/Frame.png';
import phoneIcon from '../assets/Icons/Frame-3.png'
import emailIcon from '../assets/Icons/Frame-2.png'

const Details = ({ job }) => {
    const { title, description, requirements, salary, location } = job;
    return (
        <div className='grid lg:grid-cols-3 gap-10 py-12 lg:py-20 text-dark03 leading-7'>
            <div className="lg:col-span-2 flow-content">
                <p><strong className="font-extrabold text-black">Job Description: </strong> {description}</p>
                <p><strong className="font-extrabold text-black">Job Responsibility:  </strong> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                <p><strong className="font-extrabold text-black">Educational Requirements:</strong></p>
                <p>Bachelor degree to complete any reputational university.</p>
                <p><strong className="font-extrabold text-black" >Experiences</strong></p>
                <p>2-3 Years in this field.</p>

            </div>
            <div>
                <div className='bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg text-xl flow-content-sm'>
                    <h4 className="text-black font-extrabold">Job Details</h4>
                    <hr className="mt-3 mb-0 border-" />
                    <p className="flex items-center gap-1"> <img className="w-5 h-5" src={dollarIcon} />
                        <strong className="text-dark02">Salary :</strong> {salary} (Per Month)</p>
                    <p className="flex items-center gap-1"><img className="w-5 h-5" src={locationIcon} /> <strong className="text-dark02">Job Title :</strong> {title} </p>

                    <hr />

                    <h4 className='text-xl font-extrabold text-black'>Contact Information</h4>
                    <p className="flex items-center gap-1"> <img className="w-5 h-5" src={phoneIcon} /><strong className="text-dark02">Phone :</strong> 01700 00 00 00</p>
                    <p className="flex items-center gap-1"> <img className="w-5 h-5" src={emailIcon} /><strong className="text-dark02">Email :</strong> info@gmail.com</p>
                    <p className="flex items-center gap-1"> <img className="w-5 h-5" src={locationIcon} /><strong className="text-dark02">Address :</strong> {location}</p>

                </div>
                <div className='gradient-btn text-center mt-8'>Apply Now</div>

            </div>
        </div>
    )
};

export default function JobDetails() {
    const { jobs } = useOutletContext();
    console.log(jobs)
    const { id } = useParams();

    const job = jobs.find(job => job._id === id);


    return (
        <section className="">

            <div className="bg-gradient-to-r from-accent/10 to-primary/10">

                <div className="py-12">
                    <h1 className="text-[clamp(2rem,1.5rem+3vw,3rem)] font-extrabold text-3xl  text-center">Job Details</h1>
                </div>
            </div>

            {/* details */}

            <div className='container'>
                <Details job={job} />
            </div>

        </section>
    )
}