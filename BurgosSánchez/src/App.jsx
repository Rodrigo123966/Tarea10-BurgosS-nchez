import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Aside from './components/Aside'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
return(
<>
<Header/>
<Nav/>
<Main/>
<Aside/>
<Footer/>
</>
)
}
export default App
