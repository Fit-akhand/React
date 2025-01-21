import './App.css'
import Login from './componentes/Login'
import Profile from './componentes/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Akhand</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
