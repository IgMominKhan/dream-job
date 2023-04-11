import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from "recharts";


const data = [{
    "fullMark": 60,
    "mark": 57,
    "assignment": "New Year, New Goal"
},
{
    "fullMark": 60,
    "mark": 60,
    "assignment": "G3-Architects"
},
{
    "fullMark": 60,
    "mark": 50,
    "assignment": "Legal Solutions"
},
{
    "fullMark": 60,
    "mark": 60,
    "assignment": "Problem Solving"
},
{
    "fullMark": 60,
    "mark": 55,
    "assignment": "Geometry Genius"
},
{
    "fullMark": 60,
    "mark": 55,
    "assignment": "Ai Universe"
},
{
    "fullMark": 60,
    "mark": 60,
    "assignment": "Dev tool and Debug"
}]
// const data = [
//     {
//       "subject": "Math",
//       "A": 120,
//       "B": 110,
//       "fullMark": 150
//     },
//     {
//       "subject": "Chinese",
//       "A": 98,
//       "B": 130,
//       "fullMark": 150
//     },
//     {
//       "subject": "English",
//       "A": 86,
//       "B": 130,
//       "fullMark": 150
//     },
//     {
//       "subject": "Geography",
//       "A": 99,
//       "B": 100,
//       "fullMark": 150
//     },
//     {
//       "subject": "Physics",
//       "A": 85,
//       "B": 90,
//       "fullMark": 150
//     },
//     {
//       "subject": "History",
//       "A": 65,
//       "B": 85,
//       "fullMark": 150
//     }
//   ]



const Statistics = () => {
    return (
        <section className='container my-16'>
            <h1 className="font-extrabold text-[clamp(2rem,1.5rem+3vw,3rem)] text-center bg-slate-200 p-3">Statistics</h1>

            {/* radar chart */}
            <ResponsiveContainer height={400}>
                <RadarChart outerRadius={90} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="assignment" />
                    <PolarRadiusAxis angle={39} domain={[0, 60]} />
                    <Radar name="Momin" dataKey="mark" stroke="#8884d8" fill="#D7C9FF" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>

            {/* <RadarChart outerRadius={90} width={730} height={250} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis angle={30} domain={[0, 60]} />
    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
     <Legend />
  </RadarChart> */}

        </section>



    )
}

export default Statistics;