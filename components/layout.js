import React from 'react'
import NavBar from './navBar'
import Head from 'next/head'
import { Container } from 'semantic-ui-react'

const Layout = (props) => {
    return (
        <div>
            <Head>
                //move inner element to head tag
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
            </Head>
            <NavBar></NavBar>
            <Container>
            {props.children}
            </Container>
            
        </div>
    )
}

export default Layout