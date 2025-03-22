import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import Certificates from './components/Certificate'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        
        <Tech />
        <Certificates />
        
        <div className="relative z-0">  
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}
//APAGUEI TIMELINE WORK
export default App
