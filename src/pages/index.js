import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Tokenomics from "../components/sections/tokenomics"
import Team from "../components/sections/team"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Tokenomics />
    <GetStarted />
    <Team />
    <Footer />
  </Layout>
)

export default IndexPage
