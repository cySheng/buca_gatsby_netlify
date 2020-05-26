// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PricingPage = () => (
  <Layout>
    <SEO title="Pricing" />

    <section class="pricing-front-page">
      <section class="pricing-page-title">
        <h1>Affordable pricing plans for your neighbourhood</h1>
      </section>
      <section class="pricing-tables">
        <section class="rukun-tetangga">
          <section class="first">
            <h2>Rukun Tetangga</h2>
            <p>per year</p>
            {/* <p></p> */}
          </section>
          <section class="second">
            <p class="header">Subscription fee</p>
            <p>FREE</p>
          </section>
          <section class="third">
            <p class="header">Licence fee</p>
            <p>FREE</p>
          </section>
          <section class="fourth">
            <p class="header">Maintenance fee</p>
            <p>RM0.50 per house</p>
          </section>
          <section class="fifth">
            <p class="header">Setup Fee*</p>
            <p>RM500</p>
            <p class="light">*One-off fee includes training, implementation and monitoring</p>
          </section>
        </section>

        <section class="resident-association">
          <section class="first">
            <h2>Resident Association</h2>
            <p>per year</p>
            {/* <p></p> */}
          </section>
          <section class="second">
            <p class="header">Subscription fee</p>
            <p>FREE</p>
          </section>
          <section class="third">
            <p class="header">Licence fee</p>
            <p>FREE</p>
          </section>
          <section class="fourth">
            <p class="header">Maintenance fee</p>
            <p>RM2 per house</p>
          </section>
          <section class="fifth">
            <p class="header">Setup Fee*</p>
            <p>RM1000</p>
            <p class="light">*One-off fee includes training, implementation and monitoring</p>
          </section>
        </section>
      </section>
    </section>

    <section class="pricing-faq">
    <h3>Frequently Asked Questions</h3>
      <section class="question">
        <p class="header">Is the subscription and licence fee really free?</p>
        <p>Yes! BUCA's primary aim is to assist resident associations and rukun tetangga.</p>
      </section>
      <section class="question">
        <p class="header">My neigbourhood is not able to afford the fees. Is there a cheaper option?</p>
        <p>Please do submit a  <a href="https://forms.gle/NHbVCBFLMxjFxg657" target="_blank" rel="noreferrer" class="get-in-touch">general inquiry</a> to us.</p>
      </section>
    </section>
    <section class="pricing-last-section">
      <h2>Digitize your neighbourhood</h2>
      <section class="buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScrJMD2s14lrdJ_uvSRMe-jB_U3oxkcvXTJzRd_6RLACTCxTQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" class="get-started">Start for free</a>
        <a href="https://forms.gle/NHbVCBFLMxjFxg657" target="_blank" rel="noreferrer" class="get-in-touch">Get in touch</a>
      </section>
    </section>
  </Layout>
)

export default PricingPage
