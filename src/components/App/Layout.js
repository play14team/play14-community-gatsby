import React from 'react'
import { RecoilRoot } from 'recoil'
import GoTop from './GoTop'
import SEO from './SEO'

const Layout = ({ title, children }) => {
    return (
        <RecoilRoot>
            <SEO title={title} />
            {children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </RecoilRoot>
    )
}

export default Layout
