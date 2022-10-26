import $ from 'jquery';
import { BsGeoAltFill, BsPersonFill, BsFillAwardFill, BsLinkedin } from 'react-icons/bs';

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('scroll', function () {
  $('.box-to-slide-in-1').each(function (i, e) {
    let el = $(e);
    if (el.isInViewport()) {
      el.addClass('slide-in-1');
    }
  });

  $('.box-to-slide-in-1-left').each(function (i, e) {
    let el = $(e);
    if (el.isInViewport()) {
      el.addClass('slide-in-1-left');
    }
  });
});

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-1 navbar-fixed-top navbar-main-1">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Guðmundur Axel Guðrúnarson
            {/* <img className='box-to-slide-in-1 slide-in-1' height="24" src="./images/web-design-5-fancy-text.png" alt="Failed loading..." /> */}
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            </ul>
          </div>
        </div>
      </nav>
      {/* Bootstrap scroll spy */}
      <div className="container" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" tabindex="0">
        <div className='overview-dynamic box-to-slide-in-1 slide-in-1-delay d-none d-sm-block'>
          {/* <ul className='follow-view-y'>
            <li>Um mig</li>
            <li>Starfsreynsla</li>
            <li>Nám</li>
            <li>Færni</li>
          </ul> */}
          <div id="list-example" class="list-group list-group-1 follow-view-y ">
            <a class="list-group-item list-group-item-action" href="#aboutme">About Me</a>
            <a class="list-group-item list-group-item-action" href="#education">Education</a>
            <a class="list-group-item list-group-item-action" href="#projects">Projects</a>
            <a class="list-group-item list-group-item-action" href="#skills">Skills</a>
          </div>
        </div>
        <div id="aboutme" className="row profile-row">
          {/* <div className='col-md-1'>
          </div> */}
          <div className="col-sm-7 col-md-6 col-lg-6 offset-sm-1 offset-md-1 offset-lg-1 profile-info">
            <h1 className='profile-heading-name box-to-slide-in-1 slide-in-1'>Guðmundur Axel Guðrúnarson</h1>
            <h4 className='text-grey box-to-slide-in-1 slide-in-1'>Forritari</h4>
            <div className="profile-about box-to-slide-in-1 slide-in-1-delay">
              Hi! I have a lot of interest in designing websites and software architecture,
              I am fast at adapting to new frameworks and am very open minded towards new things.
              I have knowledge from everything from the back-end to the front-end such as secure
              user authentication, api's, database setup, front-end design. I graduated from
              Computer Path (Tölvubraut), Tækniskólinn in 2016 with Award for Best Success in
              Computer Classes.
            </div>
          </div>
          <div className="col-sm-3 col-md-4 col-lg-4">

            {/* <img className="img-fluid" src="./images/bobo-5-03.jpeg" alt="Failed loading..." /> */}
            <img className="img-fluid" src="./images/me3.jpeg" alt="Failed loading..." />

            {/* <img className="img-fluid" src="./images/bobo-5-1.png" alt="Failed loading..." /> */}
          </div>
        </div>
        <div className='row work-row' id="education">
          <h1 className='text-center box-to-slide-in-1'>Education</h1>
          <div className='row work-items-container'>
            <div className='row work-item-row'>
              <div className='col-md-5 d-flex justify-content-center align-items-center'>
                <div className='text-date box-to-slide-in-1'>
                  <h3>2013 - 2016</h3>
                </div>
              </div>
              <div className='col-md-7 work-item box-to-slide-in-1'>
                <h3>Tölvubraut, Tækniskólinn <span className='text-grey'>(Computer Science Dept)</span></h3>
                <p>
                  Grade: Most computer related courses: 10/10<br></br><br></br>
                  Award for best performance in Computer courses<br></br><br></br>
                  3 Web Design Courses, 4 Advanced Web Development Courses, 5 Database Courses, 9 Programming Courses (C#, Java, Unity, Python)</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row courses-row box-to-slide-in-1'>
          <h5>Online Courses</h5>
          <div className='col-md-4 course-box'>
            <ul className='courses-list'>
              <li><span className='course-provider'> LinkedIn</span> React: Software Architecture </li>
              <li><span className='course-provider'> LinkedIn</span> Learning Path: Become a React Developer </li>
              <li><span className='course-provider'> LinkedIn</span> React Hooks </li>
              <li><span className='course-provider'> LinkedIn</span> Node.js for C# Developers </li>
            </ul>
          </div>
          <div className='col-md-4 course-box'>
            <ul className='courses-list'>
              <li><span className='course-provider'> LinkedIn</span> Building Modern Projects with React </li>
              <li><span className='course-provider'> LinkedIn</span> React.js: Building an Interface </li>
              <li><span className='course-provider'> LinkedIn</span> React: Authentication </li>
              <li><span className='course-provider'> LinkedIn</span> React: Design Patterns </li>
            </ul>
          </div>
          <div className='col-md-4 course-box'>
            <ul className='courses-list'>
              <li><span className='course-provider'> LinkedIn</span> AWS and React: Creating Full-Stack Apps </li>
              <li><span className='course-provider'> Coursera</span> Agile with Atlassian Jira </li>
              <li><span className='course-provider'> Coursera</span> Python Data Structures </li>
              <li><span className='course-provider'> Pluralsight</span> Game Design Fundamentals </li>
            </ul>
          </div>
        </div>

        <div className='row work-row' id="projects">
          <h1 className='text-center box-to-slide-in-1'>Projects</h1>
          <div className='row work-items-container'>
            <div className='row work-item-row'>
              <div className='col-md-11 offset-md-1 project-item box-to-slide-in-1'>
                <div className='row'>
                  <div className='col-md-5 d-flex justify-content-center align-items-center pad-0'>
                    <div className='text-date'>
                      <img className="img-fluid" src="./images/web-designer-site-2.png" alt="Failed loading..." />
                    </div>
                  </div>
                  <div className='col-md-6 project-item-info'>
                    <h3>Web Designer Landing Page</h3>
                    <p>Designed example homepage of a made up web developer company.</p>

                    <p className="project-item-info-bottom">
                      Made with React.js, Bootstrap<br></br>
                      Designed with Affinity Designer <span className="tiny-text">(Adobe Illustrator alternative)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row work-item-row'>
              <div className='col-md-11 offset-md-1 project-item box-to-slide-in-1'>
                <div className='row'>
                  <div className='col-md-5 d-flex justify-content-center align-items-center pad-0'>
                    <div className='text-date'>
                      <img className="img-fluid" src="./images/web-designer-site-6.gif" alt="Failed loading..." />
                    </div>
                  </div>
                  <div className='col-md-6 project-item-info'>
                    <h3>Graphic Designer Landing Page</h3>
                    <p>Designed a landing page for a made up graphic design company</p>
                    <a className='fancy-link' href='https://regase.github.io/designer-landing-page/' rel="noreferrer" target="_blank">
                      <button className='btn btn-primary-1'>Check it out here</button>
                    </a>

                    <p className="project-item-info-bottom">
                      Made with React.js, Bootstrap<br></br>
                      Designed with Affinity Designer <span className="tiny-text">(Adobe Illustrator alternative)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row work-item-row'>
              <div className='col-md-11 offset-md-1 project-item box-to-slide-in-1'>
                <div className='row'>
                  <div className='col-md-5 d-flex justify-content-center align-items-center pad-0'>
                    <div className='text-date'>
                      <img className="img-fluid" src="./images/web-designer-site-9.gif" alt="Failed loading..." />
                    </div>
                  </div>
                  <div className='col-md-6 project-item-info'>
                    <h3>SVG Design App</h3>
                    <p>A small project where you can modify svg graphic by choosing colors and background colors.</p>
                    <a className='fancy-link' href='https://regase.github.io/svg-design-app/' rel="noreferrer" target="_blank">
                      <button className='btn btn-primary-1'>Check it out here</button>
                    </a>

                    <p className="project-item-info-bottom">
                      Made with React.js, Bootstrap<br></br>
                      Designed with Affinity Designer <span className="tiny-text">(Adobe Illustrator alternative)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row work-item-row'>
              <div className='col-md-11 offset-md-1 project-item box-to-slide-in-1'>
                <div className='row'>
                  <div className='col-md-5 d-flex justify-content-center align-items-center pad-0'>
                    <div className='text-date'>
                      <img className="img-fluid" src="./images/web-designer-site-3.png" alt="Failed loading..." />
                    </div>
                  </div>
                  <div className='col-md-6 project-item-info'>
                    <h3>Video Game Landing Page</h3>
                    <p>Designed a home page for a small video game I made.</p>
                    {/* <a className='fancy-link' href='https://regase.github.io/svg-design-app/' rel="noreferrer" target="_blank">
                      <button className='btn btn-primary-1'>Check it out here</button>
                    </a> */}

                    <p className="project-item-info-bottom">
                      Made with React.js, Bootstrap<br></br>
                      Designed with Affinity Designer <span className="tiny-text">(Adobe Illustrator alternative)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row work-item-row'>
              <div className='col-md-11 offset-md-1 project-item box-to-slide-in-1'>
                <div className='row'>
                  <div className='col-md-5 d-flex justify-content-center align-items-center pad-0'>
                    <div className='text-date'>
                      <img className="img-fluid" src="./images/web-designer-site-8.png" alt="Failed loading..." />
                    </div>
                  </div>
                  <div className='col-md-6 project-item-info'>
                    <h3>A Gallery Page</h3>
                    <p>Designed a little website to showcase some photos</p>
                    {/* <a className='fancy-link' href='https://regase.github.io/svg-design-app/' rel="noreferrer" target="_blank">
                      <button className='btn btn-primary-1'>Check it out here</button>
                    </a> */}

                    <p className="project-item-info-bottom">
                      Made with React.js, Bootstrap<br></br>
                      Designed with Affinity Designer <span className="tiny-text">(Adobe Illustrator alternative)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* toooo */}
          </div>
        </div>
        <div className='row skills-row' id="skills">
          <h1 className='text-center box-to-slide-in-1'>Skills</h1>
          <div className='col-md-5 offset-md-4 skill-list'>
            <h4>Programs</h4>
            <div className='row box-to-slide-in-1'>
              <div className='col-md-6'>
                <div className='skill-item'>
                  Visual Studio Code
                </div>
              </div>
              <div className='col-md-6'>
                <div className='skill-item'>
                  Visual Studio
                </div>
              </div>
              <div className='col-md-6'>
                <div className='skill-item'>
                  IntelliJ IDEA
                </div>
              </div>
              <div className='col-md-6'>
                <div className='skill-item'>
                  Eclipse
                </div>
              </div>
              <div className='col-md-6'>
                <div className='skill-item'>
                  CMD
                </div>
              </div>
              <div className='col-md-6'>
                <div className='skill-item'>
                  Affinity Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row footer'>
        <div className='col-md-4'>
          <h2 className='footer-title box-to-slide-in-1'>Guðmundur Axel Guðrúnarson</h2>
          <div className='footer-title-underline'></div>
          <ul className='social-links-list  box-to-slide-in-1'>
            <li><a href='mailto:gudmundur210@gmail.com'>gudmundur210@gmail.com</a></li>
            <li><a href='https://www.linkedin.com/in/gudmundur-axel-gudrunarson/'>linkedin.com/in/gudmundur-axel-gudrunarson</a></li>
          </ul>
        </div>
        <div className='col-md-8 d-flex justify-content-center align-items-end'>
          <p className='footer-copyright'>
            <span className='text-grey'>Vefsíðu Hönnun: </span>
            <a href='https://www.linkedin.com/in/gudmundur-axel-gudrunarson/'>Guðmundur Axel Guðrúnarson</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
