import { Component } from "react"
import { Route, Routes }from 'react-router-dom'
import Header from './components/Header/index.jsx'
import Home from "./components/Home/index.jsx"
import About from './components/About/index.jsx'
import Projects from "./components/Projects/index.jsx"

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content-bg">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
        </div>
      </div>
    )
  }
}

export default App