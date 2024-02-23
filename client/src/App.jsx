import {Route, Routes} from 'react-router-dom'
import {MainLayout} from './layout/main-layout'
import { Home } from './pages/home/home'
import {Blog} from './pages/blog'
import {Services} from './pages/services'
import {Contact} from './pages/contact'
import { UserLayout } from './layout/user-layout'
import {NotFound} from './pages/not-found'
import { About } from './pages/about/about'
import { Profile } from './pages/user/profile'

function App() {


  return (
   <div>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user' element={<UserLayout/>} >
          <Route index element={<Profile/>}/>
          <Route/>
        </Route>

        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
   </div>
  )
}

export default App
