import $ from 'jquery';
import { BsGeoAltFill, BsPersonFill, BsFillAwardFill, BsLinkedin, BsGithub, BsFillEnvelopeFill, BsAwardFill } from 'react-icons/bs';
import SvgPhoto1 from './components/SvgPhoto1'
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { data } from './data/projectsData'

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

// Slide in fade effect
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
  let projects = data["projects"];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-1 navbar-fixed-top navbar-main-1">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Guðmundur Axel Guðrúnarson
            {/* <img className='box-to-slide-in-1 slide-in-1' height="24" src="./images/web-design-5-fancy-text.png" alt="Failed loading..." /> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/gudmundur-axel-gudrunarson" rel="noreferrer" target="_blank">
                  <BsLinkedin className='icon-large'></BsLinkedin>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/RegAse" rel="noreferrer" target="_blank">
                  <BsGithub className='icon-large'></BsGithub>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:gudmundur210@gmail.com" rel="noreferrer" target="_blank">
                  <BsFillEnvelopeFill className='icon-large'></BsFillEnvelopeFill>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Bootstrap scroll spy */}
      {/* <div className='wrapper-1'>
        <div className='container'>

        </div>
      </div> */}
      <div className="container" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" tabIndex="0">
        <div className='overview-dynamic box-to-slide-in-1 slide-in-1-delay d-none d-sm-block'>
          {/* <ul className='follow-view-y'>
            <li>Um mig</li>
            <li>Starfsreynsla</li>
            <li>Nám</li>
            <li>Færni</li>
          </ul> */}
          <div id="list-example" className="list-group list-group-1 follow-view-y ">
            <a className="list-group-item list-group-item-action" href="#aboutme">About Me</a>
            {/* <a className="list-group-item list-group-item-action" href="#education">Education</a> */}
            <a className="list-group-item list-group-item-action" href="#projects">Projects</a>
            <a className="list-group-item list-group-item-action" href="#skills">Skills</a>
          </div>
        </div>
        <div id="aboutme" className="row profile-row">
          {/* <div className='col-md-1'>
          </div> */}
          <div className="col-sm-12 col-md-5 col-lg-5 order-md-2">
            {/* <img className="img-fluid" src="./images/bobo-5-03.jpeg" alt="Failed loading..." /> */}
            <img className="img-fluid profile-image" src="./images/me31-1.png" alt="Failed loading..." />
            {/* <SvgPhoto1></SvgPhoto1> */}

            {/* <img className="img-fluid" src="./images/bobo-5-1.png" alt="Failed loading..." /> */}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 offset-sm-1 offset-md-1 offset-lg-1 profile-info">
            <h1 className='profile-heading-name box-to-slide-in-1 slide-in-1'>Guðmundur Axel Guðrúnarson</h1>
            <h4 className='text-grey box-to-slide-in-1 slide-in-1'>Web Developer, Programmer</h4>
            <div className="profile-about box-to-slide-in-1 slide-in-1-delay">
              Hi! I have a lot of interest in creating websites, programming and making games.
              I am fast at adapting to new frameworks and am very open minded towards new things.
              I have knowledge from everything from the back-end to the front-end such as,
              api's, database setup, front-end design.
              <br></br>
              <br></br>
              <div className='profile-achievements'>
                <div><BsAwardFill className='award'></BsAwardFill> Tækniskólinn - Award for Best Success in Computer Classes - 2016</div>
                <div className='mt-2'><BsAwardFill className='award'></BsAwardFill> Forritunarkeppni - 2nd place in Morpheus division - 2014</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='row work-row' id="education">
          <h1 className='text-center box-to-slide-in-1'>Education</h1>
          <div className='work-items-container'>
            <div className='row work-item-row'>
              <div className='col-md-5 d-flex justify-content-center align-items-center'>
                <div className='text-date box-to-slide-in-1'>
                  <h3>2013 - 2016</h3>
                </div>
              </div>
              <div className='col-12 col-md-7 work-item box-to-slide-in-1'>
                <h3>Tölvubraut, Tækniskólinn <span className='text-grey'>(Computer Science Dept)</span></h3>
                <p>
                  Grade: Most computer related courses: 10/10<br></br><br></br>
                  Award for best performance in Computer courses<br></br><br></br>
                  3 Web Design Courses, 4 Advanced Web Development Courses, 5 Database Courses, 9 Programming Courses (C#, Java, Unity, Python)</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className='work-row' id="projects">
          <h1 className='text-center box-to-slide-in-1 slide-in-1'>Projects</h1>
          <div className='row work-items-container'>
            {
              projects.map(project => (
                <div className='col-sm-12 col-md-12 col-lg-6 work-item box-to-slide-in-1 slide-in-1'>
                  <div className='work-item-content'>
                    <div className='project-item-info'>
                      <div className='project-item-info-header'>
                        <h4>{project.name}</h4>
                        <p className='text-tiny-grey'>{project.description}</p>
                      </div>
                    </div>
                    <div className='project-item' style={{ backgroundImage: project.media }}>

                    </div>
                    <p className='mt-4'>
                      {
                        project.labels.map(label => (
                          <span className='skill-item ms-2'>{label.name}</span>
                        ))
                      }
                    </p>
                    <a className='fancy-link ms-2' href={project.liveLink} rel="noreferrer" target="_blank">
                      <button className='btn btn-primary-1'>Live Site</button>
                    </a>
                    <a className='fancy-link ms-2' href={project.githubLink} rel="noreferrer" target="_blank">
                      <button className='btn btn-primary-1'>Source</button>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='row skills-row' id="skills">
          <h1 className='text-center box-to-slide-in-1'>Skills</h1>
          <div className='col-md-5 offset-md-4 skill-list'>
            <h4>Knowledge</h4>
            <div className='row box-to-slide-in-1'>
              <div className='col-md-3'>
                <div className='skill-item'>
                  C#
                  {/* <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
                    <div>C#</div>
                  </OverlayTrigger> */}
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  Javascript
                  {/* <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
                    <div>Javscript</div>
                  </OverlayTrigger> */}
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  C++
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  Java
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  Python 2/3
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  PHP
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  Laravel
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  ASP.NET
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  MYSQL
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  SQLite
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  React
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  Shaders
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  MongoDB
                </div>
              </div>
              <div className='col-md-3'>
                <div className='skill-item'>
                  GraphQL
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5 offset-md-4 skill-list'>
            <h4>Programs</h4>
            <div className='row box-to-slide-in-1'>
              <div className='col-md-4'>
                <div className='skill-item'>
                  Visual Studio Code
                </div>
              </div>
              <div className='col-md-4'>
                <div className='skill-item'>
                  Visual Studio
                </div>
              </div>
              <div className='col-md-4'>
                <div className='skill-item'>
                  IntelliJ IDEA
                </div>
              </div>
              <div className='col-md-4'>
                <div className='skill-item'>
                  Eclipse
                </div>
              </div>
              <div className='col-md-4'>
                <div className='skill-item'>
                  CMD
                </div>
              </div>
              <div className='col-md-4'>
                <div className='skill-item'>
                  Affinity Designer
                </div>
              </div>
              <div className='col-md-4'>
                <div className='skill-item'>
                  Affinity Photo
                </div>
              </div>
              <div className='col-md-4'>
                <div className='skill-item'>
                  Unity
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
