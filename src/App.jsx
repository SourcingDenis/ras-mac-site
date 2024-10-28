import React from 'react'
import Header from './components/Header'
import CurrentlyCooking from './components/CurrentlyCooking'
import Services from './components/Services'
import Projects from './components/Projects'
import LatestBlog from './components/LatestBlog'
import FreelanceClients from './components/FreelanceClients'
import Footer from './components/Footer'

function App() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <div className="flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]">
        <Header />
        <CurrentlyCooking />
        <Services />
        <Projects />
        <LatestBlog />
        <FreelanceClients />
      </div>
      <Footer />
    </main>
  )
}

export default App