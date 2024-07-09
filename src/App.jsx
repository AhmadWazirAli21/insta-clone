
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/homePage/HomePage'
import AuthPage from "./pages/authPage/AuthPage"
import LayoutPage from "./Lyouts/pageLayout/PageLayout"
import ProfilePage from "./pages/profilePage/profilePage"
function App() {

  return (
    <LayoutPage>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/:username" element={<ProfilePage/>}/>
      </Routes>
    </LayoutPage>
  )
}

export default App
