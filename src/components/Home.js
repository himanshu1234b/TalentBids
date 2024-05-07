import React from "react";
import "./Home.css";
import "./Assests/Adobe Inc. A.svg";
// import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      {/* Hero Section Start */}
      <section className="mian-hero-section hero-bg-background">
        <div className="container ">
          <div className="row main-hero-section">
            {/* d-flex flex-wrap */}
            <div className="col-lg-6 col-md-12 col-sm-12 hero-left-section">
              <div className="hero-sec-text-area">
                <h1>Hire India's Top 10% Remote Software Developers</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur soluta, sit nesciunt ipsam vero esse atque iure,
                  quaerat est fugiat sed temporibus facilis blanditiis illo
                  aliquam accusamus id assumenda nisi..
                </p>
                {/* Hero button Started*/}
                <div className="hero-sec-btn-grp">
                  <button type="button" class="hero-btn-primary">
                    <a href="/">Hire Developer</a>
                  </button>
                  <button type="button" class="hero-btn-light">
                    {" "}
                    <a href="/">Hire Desiger</a>
                  </button>
                </div>
                {/* Hero Button End */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 hero-right-section d-flex justify-content-end">
              <div className="form-container">
                <formform className="form">
                  <h4>Get Free Quote</h4>
                  <div className="form-group">
                    <label for="name">Full Name</label>
                    <input required="" name="text" id="name" type="text" />
                  </div>
                  <div className="form-group">
                    <label className="mobile-number">Mobile Number</label>
                    <input type="tel" id="mobile-number" />
                  </div>
                  <div className="form-group">
                    <label for="email">Company Email</label>
                    <input required="" name="email" id="email" type="text" />
                  </div>
                  <div className="form-group">
                    <label for="hire-developer-form">
                      Which Developer You're Looking To Hire?
                    </label>
                    <select id="cars" required="">
                      <option label="Select">Defult Value</option>
                      <option label="React.JS Developer">
                        React.js Developer
                      </option>
                      <option label="Angular.JS Developer">
                        Angular.JS Developer
                      </option>
                      <option label="Node.JS Developer">
                        Node.JS Developer
                      </option>
                      <option label="Vue.JS Developer">Vue.JS Developer</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="textarea">How Can We Help You?</label>
                    <textarea
                      required=""
                      cols="50"
                      rows="10"
                      id="textarea"
                      name="textarea"
                    ></textarea>
                  </div>
                  <button type="submit" className="form-submit-btn">
                    Submit
                  </button>
                </formform>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Top Client Logo Section Started */}

      <div className="container">
        <div className="client-logo-sec">
          <h4>Top-Tier Companies Trust us</h4>
          <p>
            1000+ companies have trusted TalentBids for their custom engineering
            and on-demand talent.
          </p>
          <div className="logos-sec row">
            <div className="col-lg-2 col-md-4 col-4 ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                alt="Google"
              />
            </div>
            <div className="col-lg-2  col-md-4 col-4">
              <img
                src="https://img.icons8.com/?size=96&id=qkqX9kwk5D0_&format=png"
                alt="Amazon"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <img
                src="https://img.icons8.com/?size=96&id=56886&format=png"
                alt="Walmart"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <img
                src="https://img.icons8.com/?size=128&id=2u9oG2V1ZieN&format=png"
                alt="Apple"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <img
                src="https://img.icons8.com/?size=96&id=22989&format=png"
                alt="Microsoft"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <img
                src="https://img.icons8.com/?size=96&id=13664&format=png"
                alt="WordPress"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Top Client Logo Section End */}

      {/*  4 step remote developer section started */}

      <section className="container">
        <div className="fourstep-devhire-section row">
          <div className="Left-fourstep-hire-sec col-lg-6">
            <div className="fourstep-headtext">
              <h2>Hire remote software developers in 4 steps</h2>
            </div>
          </div>
          <div className="Right-fourstep-hire-sec col-lg-6">
            <div className="mainbox-fourstep-hire-sec">
              <div className="box1-fourstep-hire-sec box">
                <h4>1. Communicate your need</h4>
                <p>
                  We actively engage in discussions to grasp your project's
                  needs, including the scope, specific job roles, desired team
                  dynamics, and preferred work processes. With these details in
                  mind, we determine the list of remote software developers that
                  match your requirements.
                </p>
              </div>
              <div className="box2-fourstep-hire-sec box">
                <h4>2. Assess potential candidates</h4>
                <p>
                  Our HR specialists review each candidate's background,
                  technical expertise, language proficiency, and interpersonal
                  skills. After shortlisting the most suitable software
                  engineers, we arrange the final interviews with them so that
                  you can select the one who is perfect fit for your team and
                  aligns seamlessly with your project’s needs.
                </p>
              </div>
              <div className="box3-fourstep-hire-sec box">
                <h4>3. Finalize your choice</h4>
                <p>
                  Once you've chosen your perfect remote software developers, we
                  will help you finalize the hiring process and seamlessly
                  integrate them into your project team. You can select your
                  desired management style and tools to ensure smooth
                  collaboration. Also, we encourage in-person meetings with our
                  remote specialists to build a strong working relationship and
                  enhance team cohesion.
                </p>
              </div>
              <div className="box4-fourstep-hire-sec box">
                <h5>4. Start development whith them</h5>
                <p>
                  Your selected team of remote software developers on board will
                  work diligently as an extension of your in-house team, fully
                  committed to your project's success. While the team operates
                  remotely, we manage all administrative aspects, allowing you
                  to focus solely on realizing your project's goals and
                  fostering innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  4 step remote developer section End */}

      {/* Service Feture Card Section Started */}
      <div className="container">
        <div className="main-service-card row">
          <div className="service-card-headtext ">
            <h3>Services in our developers have expertise at</h3>
          </div>
          <div className="card-col-1 col-lg-3 col-md-6 col-sm-12">
            <ul className="card-service-list-1">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Game Development</li>
              <li>Software Development</li>
              <li>Desktop App Development</li>
              <li>Quality Assurance</li>
            </ul>
          </div>
          <div className="card-col-2 col-lg-3 col-md-6 col-sm-12">
            <ul className="card-service-list-1">
              <li>UI/UX and Product Design</li>
              <li>Blockchain Development</li>
              <li>NFT Development</li>
              <li>DevOps Development</li>
              <li>AR/VR Development</li>
              <li>AI/ML Development</li>
            </ul>
          </div>
          <div className="card-col-3 col-lg-3 col-md-6 col-sm-12 ">
            <ul className="card-service-list-1">
              <li>Business Analyst</li>
              <li>Data Analyst</li>
              <li>Data Scientist</li>
              <li>Data Engineer</li>
              <li>Database Development</li>
              <li>Saas Development</li>
            </ul>
          </div>
          <div className="card-col-4 col-lg-3 col-md-6 col-sm-12">
            <ul className="card-service-list-1">
              <li>WordPress Developer</li>
              <li>Shopify Developer</li>
              <li>Magento Developer</li>
              <li>Drupal Developer</li>
              <li>Salesforce Developer</li>
              <li>Dynamics 365 Developer</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Service Feture Card Section End */}

      {/* Feture Card Section Staretd  */}
      <section className="tech-feture-body">
        <div className="container">
          <div className="tech-feture-section">
            <div className="head-tech-sec row">
              <div className="main-text col-lg-6 col-md-12 col-sm-12 col-12">
                <h2>Some Of The Tech Stack We Offer For Your Project</h2>
              </div>
              <div className="p-text col-lg-6 col-md-12 col-sm-12 col-12">
                <p>
                  At TalentBids, we offer remote software developers for a wide
                  range of tech stacks. We can surely find the right fit for
                  you!
                </p>
              </div>
            </div>
            <div className="techstack-logos">
              <div className="tech-logos row">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 ">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png?f=webp&w=512"
                    alt="React.js"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 ">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-angular-3-226070.png?f=webp&w=512"
                    alt="Angular.js"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 ">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-nodejs-1-226034.png?f=webp&w=512"
                    alt="Node.js"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 ">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-vuejs-1175052.png?f=webp&w=512"
                    alt="Vue.js"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 ">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-typescript-3521774-2945272.png?f=webp&w=512"
                    alt="TypeScrippt"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 ">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=512"
                    alt="JavaScript"
                  />
                </div>
                {/* <div className="col-lg-2">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-php-99-1175127.png?f=webp&w=512"
                    alt="PHP"
                  />
                </div> */}
                {/* <div className="col-lg-2">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png?f=webp&w=512"
                    alt="Python"
                  />
                </div>
                <div className="col-lg-2">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-java-59-1174952.png?f=webp&w=512"
                    alt="Java"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feture Card Section End  */}

      {/* Why hire developers from us section started */}

      <div className="container">
        <div className="why-hire-from-us-main">
          <div className="why-hire-from-us">
            <div className="why-hire-main-text">
              <h3>Why hire remote developers form us</h3>
            </div>
            <div className="why-hire-row row">
              <div className="hire-card-1 hire-card col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                <span>
                  <p>01</p>
                </span>
                <h5>Global Top Talent Pool Access</h5>
                <p>
                  TalentBids has access to a global talent pool, allowing you to
                  tap into a diverse range of skills and experiences. Whether
                  you need developers from different time zones or with specific
                  cultural backgrounds, TalentBids can match you with developers
                  who fit your project needs.
                </p>
              </div>
              <div className="hire-card-1 hire-card col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                <span>
                  <p>02</p>
                </span>
                <h5>Specialized Expertise</h5>
                <p>
                  TalentBids developers often have specialized expertise in
                  specific technologies, frameworks, or industries. Whether you
                  need frontend developers proficient in React.js, backend
                  developers skilled in Node.js, or mobile app developers
                  experienced in Flutter, TalentBids can match you with
                  developers who meet your exact requirements.
                </p>
              </div>
              <div className="hire-card-1 hire-card col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                <span>
                  <p>03</p>
                </span>
                <h5>Flexible Engagement Models</h5>
                <p>
                  We offers flexible engagement models to suit your project
                  needs and budget. Whether you need developers on a full-time,
                  part-time, or hourly basis, TalentBids can accommodate your
                  requirements and scale the team as needed.
                </p>
              </div>
              <div className="hire-card-1 hire-card col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                <span>
                  <p>04</p>
                </span>
                <h5>Cost-Effective Solutions</h5>
                <p>
                  Hiring dedicated remote developers from TalentBids can be
                  cost-effective compared to hiring full-time employees or
                  freelancers. You can avoid overhead costs such as salaries,
                  benefits, office space, and equipment, making it a
                  cost-efficient option for project-based work.
                </p>
              </div>
              <div className="hire-card-1 hire-card col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                <span>
                  <p>05</p>
                </span>
                <h5>Streamlined Onboarding Process</h5>
                <p>
                  We have a streamlined onboarding process, allowing developers
                  to start working on your project quickly and seamlessly. They
                  handle administrative tasks, such as contract negotiations,
                  paperwork, and setting up tools and access, saving you time
                  and effort.
                </p>
              </div>
              <div className="hire-card-1 hire-card col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                <span>
                  <p>06</p>
                </span>
                <h5>Project Management Support</h5>
                <p>
                  We provides project management support to ensure that your
                  projects are delivered on time and within budget. They can
                  help coordinate tasks, allocate resources, and communicate
                  effectively with remote teams, ensuring smooth project
                  execution.
                </p>
              </div>
              <div className="hire-card-1 hire-card col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                <span>
                  <p>07</p>
                </span>
                <h5>Quality Assurance</h5>
                <p>
                  We rigorously vets its developers to ensure they have the
                  necessary skills and experience to meet clients' expectations.
                  They provide oversight and accountability throughout the
                  project, ensuring that developers deliver high-quality work
                  consistently.
                </p>
              </div>
              <div className="hire-card-1 hire-card col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                <span>
                  <p>08</p>
                </span>
                <h5>Scalability and Flexibility</h5>
                <p>
                  We offers scalability and flexibility, allowing you to scale
                  your team up or down based on project requirements. Whether
                  you need to ramp up development during peak periods or scale
                  back during quieter times, TalentBids can adjust the team size
                  accordingly, offering flexibility in resource allocation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why hire developers from us section End */}

      {/* Are you plaining to hire Dedicated Remote Developer section Started */}

      <div className="container">
        <div className="planing-to-hire-dev">
          <div className="planing-hire-card">
            <div className="planing-row">
              <h4>
                Are You Thinking of Bringing Remote Developers on Board for
                Projects?
              </h4>
              <p>
                Have unique project needs? Let's tailor a solution together. Our
                remote developers bring expertise and flexibility to tackle any
                challenge
              </p>
              <button>Get 7 Days Free Trial</button>
            </div>
          </div>
        </div>
      </div>

      {/* FQA Section */}

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-5 col-sm-12 why-us-img">
            <h3>Frequently asked questions</h3>
            <p>
              Find answers to common questions about hiring vetted remote
              engineering talent and teams.
            </p>
          </div>
          <div className="col-md-7 col-sm-12 faq-content">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    What are the advantages of hiring remote developers and
                    teams?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                >
                  <div class="accordion-body">
                    <p>
                      Hiring remote developers and teams offers numerous
                      benefits, including access to a global talent network,
                      cost savings on office space and resources, increased
                      productivity through flexible work hours, and the ability
                      to quickly scale your development team as needed.
                      Additionally, remote hiring allows you to close skill gaps
                      efficiently, ensuring your projects progress without
                      delays.
                    </p>{" "}
                    .
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    What kind of talent does TalentBids provide?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      TalentBids provides a wide range of technical
                      professionals from the largest AI-vetted talent network,
                      including developers, engineers, project managers, team
                      leads, and specialists in over 100 skills. This includes
                      expertise in React, Node, Python, Angular, Swift, React
                      Native, Android, Java, Rails, Golang, DevOps, machine
                      learning, and data engineering, among others.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    What other services does TalentBids offer?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      TalentBids uses proprietary AI to help companies in
                      several capacities beyond hiring on-demand technical
                      professionals. For LLM companies and research
                      organizations, we offer services to train and enhance LLM
                      reasoning and coding capabilities through expert model
                      training and the generation of high-quality, proprietary
                      human data for SFT, RLHF, and DPO. For enterprise
                      companies, Turing assists in building and strategically
                      implementing GenAI technologies within business operations
                      to bolster customer success, internal productivity, and
                      market share.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Why should I choose TalentBids for hiring remote software
                    talent?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      Choosing TalentBids means embracing a highly efficient,
                      AI-powered approach to hiring quality remote developers
                      and teams. unique process tests for a wide range of
                      skills, leverages over 20,000 machine learning data
                      signals to create deep talent profiles, and ensures a
                      2-week free trial for a risk-free experience. This
                      streamlined process, combined with price optimization and
                      support for a diverse skill set, makes TalentBids an ideal
                      choice for scaling your software development team on
                      demand.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    How much time does it take to hire a remote developer?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      The process of hiring a remote developer with TalentBids
                      is swift and straightforward, typically allowing clients
                      to access TalentBids talent network, match with
                      professionals, and start onboarding within 4 days or less,
                      on average. With TalentBids, you can significantly
                      expedite the hiring process and have developers start
                      working on your projects promptly, with a free 2-week
                      trial to ensure fit and satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Are you plaining to hire Dedicated Remote Developer section End */}
    </>
  );
}
