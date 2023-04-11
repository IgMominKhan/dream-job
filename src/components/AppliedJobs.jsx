
import { useEffect } from "react";
import { getJobsFromDatabase } from "../../utilities/utilities";
import { useOutletContext } from "react-router-dom";

const AppliedJobs = () => {
    const { jobs } = useOutletContext();
    // console.log(jobs)
    let savedJobs = [];


    const savedData = getJobsFromDatabase();
    for (const id of savedData) {
        const foundJob = jobs.find(job => job._id === id)
        if (foundJob) {
            savedJobs.push(foundJob)
        }
    }



    console.log(savedJobs)

    return (
        <section className="container">
            <h1>app</h1>
        </section>
    )
}

export default AppliedJobs;