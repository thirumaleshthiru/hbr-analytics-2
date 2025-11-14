import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Industries from '../pages/Industries'
import Expertise from '../pages/Expertise'
import About from '../pages/About'
import Contact from '../pages/Contact'
export default function RouteX(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/industries-we-serve" element={<Industries />} />
                <Route path="/our-expertise" element={<Expertise />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
            </Routes>
        </>
    )
}