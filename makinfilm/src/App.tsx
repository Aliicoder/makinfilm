import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <RootLayout/>,
      errorElement: <ErrorPage />,
      children:[
        { index: true ,element: <HomePage/>},//instead of using ""
        { path: "about" ,element: <AboutPage/>},//absolute path 
        { path: "work", element: <WorkPage/>},
        { path: "contact", element: <ContactPage/>}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
