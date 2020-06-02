// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <section class="about-us">
      <h2>We're BUCA</h2>
      <p>We develop software for associations based on the belief that all neigbourhood should use software to manage and grow their community.</p>
    </section>

    <section class="our-story">
      <h2>Our Story</h2>
      {/* <section class="description"> */}
        <p>BUCA was founded in 2019 by Sheng.</p>
        <p>From the beginning, BUCA was built to address the pains that comes with managing a Resident Association. Unnecessary paperwork and repetitive tasks among other grievances were the catalyst to the birth of BUCA.</p>
        <p>Throughout Sheng's experience in his neigbourhood's Resident Association, he came to understand the intricacies of such associations in Malaysia and to provide an affordable solution for all similar associations in Malaysia.</p>
      {/* </section> */}
    </section>
    {/* <p>Welcome to page 2 ({props.path})</p> */}
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default AboutPage
