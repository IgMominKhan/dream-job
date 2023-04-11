// use local storage to manage cart data
const addToDb = id => {
    let jobs = getJobsFromDatabase();
    jobs.push(id);
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

const removeFromDb = id => {
    const savedJobs = getJobsFromDatabase();

        const index = savedJobs.indexOf(id);

        if(index>-1){
            savedJobs.splice(index,1)
        }

         localStorage.setItem('jobs', JSON.stringify(shoppingCart));
    
}

const getJobsFromDatabase = () => {
    let jobs = [];

    //get the shopping cart from local storage
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
        jobs = JSON.parse(storedJobs);
    }
    return jobs;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('jobs');
}

export {
    addToDb,
    removeFromDb,
    getJobsFromDatabase,
    deleteShoppingCart
}
