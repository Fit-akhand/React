import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/home/home'
import About from './components/about/About'
import Contact from './components/contactUs/Contact'
import User from './components/User/user'
import Git_hub, { githubInfoLoder } from './components/Git_Hub/Git_hub'
// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
      loader={githubInfoLoder}
      path='Github'
      element={<Git_hub/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
