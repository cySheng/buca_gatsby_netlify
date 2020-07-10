// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About BUCA" description="Learn more about BUCA's mission and history." />
    <section class="about-us">
      <h2>We're BUCA</h2>
      <p>We develop software for resident associations based on the belief that it should be affordable and simple to manage and oversee their community.</p>
    </section>

    <section class="our-story">
      <h2>Our Story</h2>
      {/* <section class="description"> */}
        <p>BUCA was founded in 2019 by <a href="https://www.samsheng.my">Sheng.</a></p>
        <p>From the beginning, BUCA was built to address the pains that comes with managing a Resident Association. Unnecessary paperwork and repetitive tasks among other grievances were the catalyst to the birth of BUCA.</p>
        <p>Throughout Sheng's experience in his neigbourhood's Resident Association, he came to understand the intricacies of such associations in Malaysia and to provide an affordable solution for all similar associations in Malaysia.</p>
        <p>The BUCA team is always happy to discuss and assist RA's in general as we believe that both parties will always be able to exchange useful information.</p>
      {/* </section> */}
    </section>
    {/* <p>Welcome to page 2 ({props.path})</p> */}
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default AboutPage
