import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from './MetaHead'

const Layout = ({ children }) => {
    return (
        <div>
            <Head />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
