// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import Dashboard from "../images/dashboard_page.png"
import SEO from "../components/seo"
import SecurityIcon from "../images/shield-check.svg"
import Management from "../images/pencil.svg"
import Experience from "../images/plus-circle.svg"
import Security from "../images/security_1.png"
import Payment from "../images/payments_1.png"
import Voucher from "../images/voucher_1.png"


const FeaturesPage = () => (
  <Layout>
    <SEO title="BUCA: Everything You Need to Digitize Your Association" description="Use tailored tools that help your association managet effectively and effieciently."/>
    <section class="product-feature-front">
      <section class="left">
        <h4>Management Software</h4>
        <h1>Digitize your Resident Association with BUCA</h1>
        <p>Web management software designed to help you build an effective association with efficient processes.</p>
        <section class="contact-us">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScrJMD2s14lrdJ_uvSRMe-jB_U3oxkcvXTJzRd_6RLACTCxTQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Try Now</a>
          <Link  to="/pricing" className="secondary-button">Browse our plans</Link>
        </section>
      </section>
      <section class="right">
        <img src={Dashboard} alt="Dashboard of BUCA app" class="hidden-portrait"/>
      </section>
    </section>
    <section class="product-feature-primer">
      <section class="title">
        <h2>BUCA helps you elevate your Resident Association to the next level</h2>
      </section>
      <section class="primers">
        <section class="primer">
          <img src={SecurityIcon} alt="Security icon"/>
          <h3>Monitor security on a platform you control</h3>
        </section>
        <section class="primer">
          <img src={Experience} alt="Positive experience icon"/>
          <h3>Create positive, quality experiences</h3>
        </section>
        <section class="primer">
          <img src={Management} alt="Management icon"/>
          <h3>Manage effectively and efficiently</h3>
        </section>
      </section>
    </section>
    <section class="product-features">
      <section class="product-feature">
        <section class="title">
          <img src={SecurityIcon} alt="Security icon"/>
          <h3>Monitor security on a platform you control</h3>
        </section>
        <section class="content">
          <img src={Security} alt="Screenshot of security page"/>
          <section class="feature-list">
              <article class="feature-description">
                <p class="header">Real-time monitoring</p>
                <p>Ensure your visitors are always subjected to security checks.</p>
              </article>
              <article class="feature-description">
                <p class="header">Log analysis</p>
                <p>Search and inspect your logs for detailed activities of visitors.</p>
              </article>
              <article class="feature-description">
                <p class="header">Automation</p>
                <p>Help your residents take action with a dedicated chat bot from requesting security contact info to reporting a suspicious activity.</p>
              </article>
          </section>
          {/* <section class="image">

          </section> */}
        </section>
      </section>
      <hr></hr>
      <section class="product-feature">
        <section class="title">
          <img src={Experience} alt="Positive experience icon"/>
          <h3>Create positive, quality experiences</h3>
        </section>
        <section class="content">
          <img src={Payment} alt="Screenshot of payment page"/>
          <section class="feature-list">
            <article class="feature-description">
              <p class="header">Payments made easy</p>
              <p>Allow residents to pay via a standardized process with auto-generated receipts after payment verification.</p>
            </article>
            <article class="feature-description">
              <p class="header">Traceability</p>
              <p>Locate important payment information such as cheque numbers, attachments, car plates and more.</p>
            </article>
            <article class="feature-description">
              <p class="header">Audit</p>
              <p>Inspection of your system's activity externally or internally made easy with audit trail and exportable spreadsheet.</p>
            </article>
          </section>
        </section>
      </section>
      <hr></hr>
      <section class="product-feature">
        <section class="title">
          <img src={Management} alt="Management icon"/>
          <h3>Manage effectively and efficiently</h3>
        </section>
        <section class="content">
          <img src={Voucher} alt="Screenshot of payment voucher page"/>
          <section class="feature-list">
            <article class="feature-description">
              <p class="header">Finance</p>
              <p>Track your finances with the storage of invoices and creation of printable payment vouchers.</p>
            </article>
            <article class="feature-description">
              <p class="header">Single source of truth</p>
              <p>Consolidate data for users and households giving your association better and faster decision making capabilities.</p>
            </article>
            <article class="feature-description">
              <p class="header">Event</p>
              <p>Register attendance for important events such as Annual General Meeting (AGM) with a printable attendance sheet after events. <span class="note">(ROS requirement)</span></p>
            </article>
          </section>
        </section>
      </section>
      <hr></hr>
    </section>
    <section class="closing">
      <section class="title">
        <h2>BUCA's core concepts</h2>
      </section>
      <section class="closing-points">
        <section class="closing-point">
          <p class="header">Easy Access</p>
          <p>BUCA allows residents and committee members easy access to the system through mobile devices or a desktop computer no matter where they are.</p>
        </section>
        <section class="closing-point">
          <p class="header">Accountability</p>
          <p>Ensure compliance and avoid mismanagement with extensive audit trail for important features such as payments, invitations and more.</p>
        </section>
        <section class="closing-point">
          <p class="header">Free</p>
          <p>BUCA is focused on elevating the standards of resident associations in Malaysia through a accessible and free solution.</p>
        </section>
      </section>

      {/* Easy access
      Compliant & Accountability
      import old data */}
    </section>
    <section class="product-feature-last-section">
      <h2>Revamp your association today!</h2>
      <section class="contact-us">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScrJMD2s14lrdJ_uvSRMe-jB_U3oxkcvXTJzRd_6RLACTCxTQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Get started!</a>
      </section>
    </section>
  </Layout>
)

export default FeaturesPage
