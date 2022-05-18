import React from "react"
import Intro from './components/Intro'
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import {DATA} from "./components/data"

function App() {
  

    const projects = DATA.map(item => {
      return (     
        <Projects 
          key= {item.id}
          image= {item.image}
          projectName= {item.projectName}
        />
      )
    })
    return (
      <div>
        <Intro />
        <About />
          <section className="project text-center">
            <h1 className="p-4">Projects</h1>
            {projects}
          </section>
        <Contact />
      </div>
    )
}

export default App