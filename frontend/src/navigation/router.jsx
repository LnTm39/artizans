import {BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Artisans from '../pages/Artisans'
import Artisan from '../pages/Artisan'
import Home from '../pages/Home'
import Auth from '../pages/Auth'


function Router () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='artisans'>
                    <Route index  element={<Artisans />} />
                    <Route path=':artisanSlug' element={<Artisan />} />
                </Route>
                <Route path='about' element={<About/>} />
                <Route path='contact' element={<Contact/>} />
                <Route path='services' element={<Services/>} />
                <Route path='authentication' element={<Auth/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router