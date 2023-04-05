import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import { Outlet , useNavigation} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  const navigation = useNavigation();


  return (
    <div className="App">
      <Header></Header>
      <div className={ navigation.state === "loading" ? "loading" : ""} > 
         
      </div>
      
      <Outlet></Outlet>
    </div>
  )
}

export default App
