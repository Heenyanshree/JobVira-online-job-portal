import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import JobVira from "./components/JobVira"
import JobData from "./JobDummyData"

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {JobData.map((job)=> (
        <JobVira key={job.id} {...job}/>
      ))}
    </div>
  )
}

export default App
