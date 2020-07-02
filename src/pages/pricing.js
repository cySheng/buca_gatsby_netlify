// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PricingPage = () => (
  <Layout>
    <SEO title="BUCA Pricing" description="From Free to Paid, BUCA has a plan to work with your association."/>

    <section class="pricing-front-page">
      <section class="header">
        <h4>Pricing</h4>
        <h1>Plans for all</h1>
      </section>
      <section class="announcement">
        <section class="new">
          <span class="new">NEW</span>
        </section>
        <section class="description">
          <h2>BUCA requirements</h2>
          <p>To be eligible to use BUCA, your association has to meet the following requirements:</p>
          <ol>
            <li>Based in Malaysia.</li>
            <li>Must be a legal and registered society under ROS (Registrar of Society).</li>
          </ol>
        </section>
        <section class="action-button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScrJMD2s14lrdJ_uvSRMe-jB_U3oxkcvXTJzRd_6RLACTCxTQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Sign Up Now</a>
        </section>
      </section>

      {/* <h3>BUCA's Implementation Process</h3> */}
      {/* <p>The steps to </p> */}
      {/* <ol>
        <li>Fill up the registration form.</li>
        <li>Detailed inspection and </li>
        <li>If eligible, there will be a discussion process.</li>
        <li>Once details ironed out , a subdomain will be created for your </li>
      </ol> */}

      <section class="pricing-tables">
        <section class="free">
          <section class="first">
            <h2>Basic</h2>

            <p class="light">RM1 per house/year</p>
          </section>
          <section class="second">
            <p class="header">
              Security Fee Management
            </p>
            {/* <p>FREE</p> */}
          </section>
          <section class="third">
            <p class="header">
              Internal Finance Management
            </p>
            {/* <p>FREE</p> */}
          </section>
          <section class="fourth">
            <p class="header">Internal Security Management</p>
            {/* <p>RM0.50 per house</p> */}
          </section>
          <section class="fifth">
            <p class="header">Resident Association Management</p>
          </section>
        </section>

        <section class="paid">
          <section class="first">
            <h2>Standard</h2>
            <p class="light">RM2 per house/year</p>
            {/* <p></p> */}
          </section>
          <section class="second">
            <p>All <span class="free">FREE</span> features</p>
            {/* <p class="header">Subscription fee</p>
            <p>FREE</p> */}
          </section>
          <section class="third">
            <p class="header">
              Integrated Telegram Bot features:
            </p>
            <ul>
              <li>Automated directory</li>
              <li>Automated report handling</li>
              <li>Auto-manage Telegram groups</li>
              {/* <li class=""></li> */}
              {/* <li>Auto-join outsiders</li>
              <li>Report</li> */}
              {/* <li>Allow residents to </li> */}
            </ul>
            {/* <p class="header">Licence fee</p>
            <p>FREE</p> */}
          </section>
          {/* <section class="fourth">
            <p class="header">Maintenance fee</p>
            <p>RM2 per house</p>
          </section>
          <section class="fifth">
            <p class="header">Setup Fee*</p>
            <p>RM1000</p>
            <p class="light">*One-off fee includes training, implementation and monitoring</p>
          </section> */}
        </section>
      </section>
    </section>

    <section class="pricing-faq">
    <h3>Frequently Asked Questions</h3>
      <section class="question">
        <p class="header">Is the application really free?</p>
        <p>Yes! BUCA's primary aim is to assist resident associations and rukun tetanggas (neigborhood watch).</p>
      </section>
      {/* <section class="question">
        <p class="header">I am interested but my society is not based in Malaysia. Can I still apply?</p>
        <p>Please do submit a  <a href="https://forms.gle/NHbVCBFLMxjFxg657" target="_blank" rel="noreferrer" class="get-in-touch">general inquiry</a> to us.</p>
      </section> */}
    </section>
    <section class="pricing-last-section">
      <h2>Digitize your neighbourhood</h2>
      <section class="buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScrJMD2s14lrdJ_uvSRMe-jB_U3oxkcvXTJzRd_6RLACTCxTQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" class="get-started">Start now</a>
        <a href="https://forms.gle/NHbVCBFLMxjFxg657" target="_blank" rel="noreferrer" class="get-in-touch">Get in touch</a>
      </section>
    </section>
  </Layout>
)

export default PricingPage
