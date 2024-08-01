import React from 'react'
import Header from '../component/Header'
import JobCategory from '../component/JobCategory'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import FeaturedJobs from '../component/FeaturedJobs'
import WorkingProcess from '../component/WorkingProcess'
function Home() {
  return (
  <div>
<Header/>
<Hero/>
<JobCategory/>
<FeaturedJobs/>
<WorkingProcess/>
<Footer/>
  </div>
  )
}

export default Home
