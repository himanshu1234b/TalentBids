import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className=" bg-black text-bg-primary">
        <div className="container main-footer">
          <div class="full-footer text-start">
            {/* above footer Subscribe section */}

            {/* <div>
              <p>Subscribe our newsletter to get update.</p>
              <button type="button" class="btn btn-info"> Subscribe us </button>
            </div> */}
            <div className="subscribe-email-sec">
              <div class="container mt-5 pt-5">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                    <h5>Join Our Newsletter</h5>
                    <p>Be the first to know about our latest updates, exclusive offers, and more.</p>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                    <input type="email" name="email" id="subscribe-email"></input>
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row g-2 row-cols-lg-4">
              <div class="col-6">
                <div class="p-3">
                  <div>
                    <h6>Company</h6>
                    <li>About Us</li>
                    <li>Our Story</li>
                    <li>Meet The Team</li>
                    <li>Partner with us</li>
                    <li>Be White Label Partner</li>
                    <li>Want  to work with us</li>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3">
                  <h5>Hire Remote Talent</h5>
                  <li>Hire Web Developer</li>
                  <li>Hire WordPress Developer</li>
                  <li>Hire Shopify Developer</li>
                  <li>Hire Magento Developer</li>
                  <li>Hire Drupal Developer</li>
                  <li>Hire React.js Developer</li>
                  <li>Hire Aggular.js Developer</li>
                  <li>Hire Vue.JS Developer</li>
                  <li>Hire Node.js Developer</li>
                  <li>Hire PHP Developer</li>
                  <li>Hire Laravel Developer</li>
                  <li>Hire Python Developer</li>
                  <li>Hire C# Developer</li>
                  <li>Hire SQL Developer</li>
                  <li>Hire  Ruby on Rails Developer</li>
                  <li>Hire Oracle Database Developer</li>
                  <li></li>
                  

                  
                  
                </div>
              </div>
              <div class="col-6">
                <div class="p-3">
                  <h5>Hire Remote Talent</h5>
                  <li>Hire Android Developer</li>
                  <li>Hire IOS Developer </li>
                  <li>Hire Flutter Developer</li>
                  <li>Hire Kotlin Developer</li>
                  <li>Hire Xamarin Developer</li>
                  <li>Full Stack Developer</li>
                  <li>Hire Mean Stak Developer</li>
                  <li>Hire Mern Stack Developers</li>
                  <li>Hire Dot Net Developer</li>
                  <li>Hire Java Developer</li>
                  <li>Hire Java Full Stack Developer</li>
                  <li>Hire ServiceNow Developer</li>
                  <li>Hire Snowflake Developer</li>
                  <li>Hire Power App Developer</li>
                  <li>Hire Dynamics  365 Developer</li>
                  <li>Hire Salesforce Developer</li>

                </div>
              </div>
              <div class="col-6">
                <div class="p-3">
                  <h5>Hire Remote Talent</h5>
                  <li>Hire Graphic Designer</li>
                  <li>Hire Product Designer</li>
                  <li>Hire SEO Specialists</li>
                  <li>Content  Writer Expert</li>
                  <li>Hire PPC Expert</li>
                  <li>Hire Digital Marketing Expert</li>
                  <li>Hire Quality Assurance Tester</li>
                  <li>Hire  Devops Engineer</li>
                  <li>Hire Big Data Engineer</li>
                  <li>Hire Power BI Developer</li>
                  <li>Hire Tablue Analyst</li>
                  <li>Hire Data Engineer</li>
                  <li>Hire Data  Scientist</li>
                  <li>Hire Business Analyst</li>
                  <li>Hire  AI/ML Developer</li>
                  <li>Hire Cybersecurity Experts</li>
                </div>
              </div>
            </div>
            {/*  <!-- /.row --> */}
              <hr />

              <div className="row">
                {/* Footer logo */}
                <div class="col-4 text-start">  
                <span>TalentBids</span>
                </div>
                {/* all right  */}
                <div className="col-8 text-end">
                  &copy; 2024 - TalentBids, Inc. All rights reserved. &emsp;<a href="/privacy" target="_blank">Privacy Policy</a> &emsp; <a href="/Terms & Condition" target="_blank">Code  of Conduct</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
