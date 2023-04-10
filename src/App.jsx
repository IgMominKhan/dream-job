import { useState, createContext } from 'react'
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import { Outlet, useLoaderData } from 'react-router-dom'

// export const JobContext = createContext();

function App() {
  const fetchData = useLoaderData();
  const [jobs, setJobs] = useState(fetchData);
    return (
    <div className="App">
      <Header />
         <Outlet context={{jobs, setJobs}} />
       <Footer />
    </div>
  )
}

export default App
