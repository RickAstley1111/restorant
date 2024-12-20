import { useState } from 'react'
import './App.css'
import {createBrowserRouter ,RouterProvider, useParams} from 'react-router-dom'
import AllList from './Components/AllList/AllList'
import SinglePage from './Components/SinglePage/SinglePage'
import resdata from '../src/assets/restaurant.json'


function App() {
  const [count, setCount] = useState(0)

  function data(){
    return resdata
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AllList/>,
      loader: data
    },
    {
      path:"/:Food",
      element:<SinglePage/>,
      loader: data
    }
  ])

  return (<>
    <RouterProvider router={router}/>
  </>)
}

export default App
