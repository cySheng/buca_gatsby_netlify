import React from "react"
import { Link } from "gatsby"

// import Normalize from "../components/normalize"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import SignInPage from "../images/sign_in_page.jpg"
// import Payment from "../images/payments_page.png"
// import Security from "../images/security_page.png"
// import Event from "../images/events_page.png"
// import PaymentVoucher from "../images/payment_vouchers_page.png"
// import Telegram from "../images/telegram.svg"

import Evolve from "../images/refresh.svg"
import Management from "../images/files.svg"
import SecurityIcon from "../images/shield-check.svg"
import Coin from "../images/coin.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="landing-page">
      <section class="front-page">
        <section class="description">
          <h1 class="motto">The New Standard for Resident Associations</h1>
          <p class="tagline">BUCA is a simple and powerful solution for running an effective Resident Association. We assist you in reducing your workload by digitizing your association while automating menial tasks.</p>
          <section class="contact-us">
            {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLScrJMD2s14lrdJ_uvSRMe-jB_U3oxkcvXTJzRd_6RLACTCxTQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Sign Up</a> */}
            <Link  to="/features">Learn More</Link>
          </section>
        </section>
        <section class="image">
          <img src={SignInPage} alt="Sign In Page of BUCA app"/>
        </section>
      </section>
      <section class="first-section">
        <section class="selling-line">
          <h2>Why use BUCA?</h2>
        </section>
        <section class="selling-points">
          {/* <section class="selling-point">
            <img src={SecurityIcon} alt="Security Icon"/>
            <h3>Digitized Security</h3>
            <p>From detailed security logs to a centralized security reporting system for residents, provide hassle-free security to both residents and committee members.</p>
          </section> */}
          <section class="selling-point">
            <img src={Management} alt="Effective Management Icon"/>
            <h3>Effective Management</h3>
            <p>Manage your Resident Association efficiently with a simplified workflow giving you more time to focus on the important things.</p>
          </section>
          <section class="selling-point">
            <img src={Coin} alt="Evolution Icon"/>
            <h3>Free of Charge</h3>
            <p>Servers are currently self-funded and the service is offered free of charge.</p>
          </section>
          <section class="selling-point">
            <img src={Evolve} alt="Constantly Updating Icon"/>
            <h3>Always Evolving</h3>
            <p>Whether it's with bug fixes or newly added features, BUCA is constantly evolving by finding new ways to improve the processes of Resident Associations.</p>
          </section>
        </section>
      </section>

      <section class="divider">
        <section class="title">
          <h2>Built by Resident Association.</h2>
          <h2>For Resident Associations.</h2>
        </section>
        <section class="description">
          <p>BUCA was built to address the tedious and repetitive tasks that comes with managing a Resident Association.</p>
          <p>BUCA is the no-frills Resident Association solution.</p>
        </section>
      </section>

      <section class="last-section">
        <h2>Ready to get started with BUCA?</h2>
        <section class="contact-us">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScrJMD2s14lrdJ_uvSRMe-jB_U3oxkcvXTJzRd_6RLACTCxTQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Sign Up</a>
        </section>
      </section>
    </section>

    {/* <section class="features">
      <section class="feature">
        <section class="image">
          <img src={Payment} alt="Example of Fee Payments"/>
        </section>
        <section class="description">
          <h3>Add and Track Resident Payments</h3>
          <p>The BUCA app allows residents or committee members to add a payment instantaneously. Receipts will be auto-generated upon confirmation. Managing and tracking resident payments has never been this easy.</p>
        </section>
      </section>
      <section class="feature">
        <section class="image">
          <img src={Security} alt="Example of Security Log Book Page"/>
        </section>
        <section class="description">
          <h3>Comprehensive Security Logs</h3>
          <p>BUCA's security logs gives you the power to track specific car entries or visits to a specific house. Easily pinpoint vital security information when needed.</p>
        </section>
      </section>
      <section class="feature">
        <section class="image">
          <img src={Event} alt="Example of Resident Association Events"/>
        </section>
        <section class="description">
          <h3>Event Management</h3>
          <p>Allow BUCA to assist in efficiently plan your event through its simple to use RSVP system. A printable sheet of all attendees will be available (as required by Malaysia's Registrar of Societies).</p>
        </section>
      </section>
      <section class="feature">
        <section class="image">
          <img src={PaymentVoucher} alt="Exaple of Payment Vouchers page"/>
        </section>
        <section class="description">
          <h3>Simple Finance Management</h3>
          <p>BUCA keeps a record of all invoices and payment vouchers. Print payment vouchers with a single click of a button.</p>
        </section>
      </section>
      <section class="feature">
        <section class="image telegram-container">
          <img src={Telegram} alt="Telegram App Icon" class="telegram-icon"/>
        </section>
        <section class="description">
          <h3>Automated Management of Telegram Groups</h3>
          <p> Constantly adding new residents onto your messaging platform? Not removing non paying residents from your messaging platform? BUCA is integrated with Telegram automating the addition or removal of residents.</p>
        </section>
      </section>
    </section>
    <section class="pricing">
      <h1>Subscription</h1>
      <section class="resident-association">
        <h3>Resident Association</h3>
        <p class="price original-price">RM 5</p>
        <p class="price discounted-price">RM 2*</p>
        <p>per house per year</p>
      </section>
      <section class="rukun-tetangga">
        <h3>Rukun Tetangga</h3>
        <p class="price original-price">RM 1</p>
        <p class="price discounted-price">FREE*</p>
        <p class="price-statement">per house per year</p>
      </section>
      <section class="footer">
        <p>Pricing excludes Implementation Fees</p>
        <p>*Discount pricing applies to the first 3 RA & RT</p>
      </section>
    </section>
    <section class="contact-us">
      <h2>Ready to get started with BUCA?</h2>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScrJMD2s14lrdJ_uvSRMe-jB_U3oxkcvXTJzRd_6RLACTCxTQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Contact Us</a>
    </section> */}
    {/* </main> */}
  </Layout>
)

export default IndexPage
