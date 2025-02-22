import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home'
import Contact from './screens/Contact'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App