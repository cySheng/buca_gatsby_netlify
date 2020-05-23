import React from "react"
import { Link } from "gatsby"

// import Normalize from "../components/normalize"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Dashboard from "../images/dashboard_page.png"
import Payment from "../images/payments_page.png"
import Security from "../images/security_page.png"
import Event from "../images/events_page.png"
import PaymentVoucher from "../images/payment_vouchers_page.png"
import Telegram from "../images/telegram.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="front-page">
      <section class="description">
        <h1 class="motto">The New Standard for Resident Associations</h1>
        <p class="tagline">BUCA is a simple and powerful solution for running an effective Resident Association. We assist you in reducing your workload by digitizing your association while automating menial tasks.</p>
        <section class="contact-us">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScrJMD2s14lrdJ_uvSRMe-jB_U3oxkcvXTJzRd_6RLACTCxTQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Try for free</a>
        </section>
      </section>
      <section class="image">
        <img src={Dashboard} alt="Dashboard of BUCA app"/>
      </section>
    </section>
    <section class="divider">
        <h2>Built by Resident Association.</h2>
        <h2>For Resident Associations.</h2>
      </section>
      <section class="features">
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
      </section>
    {/* </main> */}
  </Layout>
)

export default IndexPage
