import React from 'react'

import Layout from '../components/layout'

import SEO from '../components/seo'
import WorksSection from '../components/works-section'
import AboutSection from '../components/about-section'
import ContactSection from '../components/contact-section'
import { Constants, HtmlIds } from '../utils'

const IndexPage = () => (
  <Layout isHomePage>
    <SEO title={Constants.PAGE_TITLES.INDEX} />
    <WorksSection id={HtmlIds.WORKS} />
    <AboutSection />
    <ContactSection id={HtmlIds.CONTACT} />
  </Layout>
)

export default IndexPage
