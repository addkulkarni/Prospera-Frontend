import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about-container" id="about">
  <h1>About Us</h1>
  <div className="parent-container">
    <div className="card">
      <h4>Your Trusted Partner for Home Loans</h4>
      <p>At Prospera Finance, we understand that buying a home is one of the most significant investments you will ever make. Our mission is to provide you with the best home loan solutions tailored to your unique needs. Whether you’re a first-time homebuyer or looking to refinance, our dedicated team of financial experts is here to help you every step of the way.</p>
    </div>

    <div className="card">
      <h4>Why Choose Us?</h4>
      <ul>
        <li>Competitive Interest Rates: We offer some of the most competitive interest rates in the market, ensuring that you get the best deal for your home loan.</li>
        <li>Flexible Loan Options: From fixed-rate to adjustable-rate mortgages, we provide a range of loan options to suit your financial situation.</li>
        <li>Quick Approval Process: Our streamlined application process ensures that you get approved quickly and efficiently, so you can focus on finding your dream home.</li>
        <li>Personalized Service: Our team takes the time to understand your financial goals and offers personalized solutions to help you achieve them.</li>
      </ul>
    </div>

    <div className="card">
      <h4>Our Home Loan Products</h4>
      <ul>
        <li><b>Fixed-Rate Home Loans:</b> Enjoy peace of mind with predictable monthly payments and stability over the life of your loan. Perfect for long-term homeowners who want to lock in their interest rate.</li>
        <li><b>Adjustable-Rate Mortgages (ARMs):</b> Benefit from lower initial rates and payments, with adjustments made after a set period. Ideal for buyers who plan to move or refinance before the adjustment period begins.</li>
        <li><b>First-Time Homebuyer Programs:</b> Designed specifically for new buyers, these programs offer lower down payment requirements and educational resources to help you navigate the home-buying process.</li>
        <li><b>Refinancing Options:</b> Lower your monthly payments or access your home’s equity with our refinancing solutions. We’ll help you find the best rate and terms for your needs.</li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default About
