import $ from 'jquery';
import { BsGeoAltFill, BsPersonFill, BsFillAwardFill } from 'react-icons/bs';

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
      <div className="container">
        <div className="row profile-row">
          <div className="col-md-3 pad-0">
            <img className="img-fluid" src="./images/me5.jpeg" alt="Failed loading..." />
          </div>
          <div className="col-md-7 pad-2">
            <h1>Guðmundur Axel Guðrúnarson</h1>
            <div className='profile-extra-info'>
              <span><BsGeoAltFill /> Reykjavík, Iceland</span>
              <span><BsPersonFill /> 25 Years old</span>
              <span><BsFillAwardFill /> Award for Best Success in Computer Classes</span>
            </div>
            <p className="profile-text">
              Hi!
              I have a lot of interest in designing websites and software
              architecture, i am fast at adapting to new frameworks and
              am very open minded towards new things. I have knowledge
              from everything from the back-end to the front-end such as
              secure user authentication, api's, database setup, front-end
              design.<br></br>
              I graduated from Computer Path <span className='tiny-text' >(Tölvubraut)</span>, Tækniskólinn in 2016 with <BsFillAwardFill />  Award for Best Success in Computer Classes.<br></br>
            </p>
            {/* <div className="box-lighter-1 skill-box-1 box-to-slide-in-1 slide-in-1">
              <h3>Tölvubraut, Tækniskólinn <span className='tiny-text'>2016</span></h3>
              <h5><BsFillAwardFill /> Award for Best Success in Computer Classes</h5>
            </div> */}
            <div className="box-lighter-1 skill-box-1 box-to-slide-in-1 slide-in-1">
              <h2>Skills</h2>
              <p>
                C#, HTML, CSS, Javascript, Bootstrap, React.js, Laravel, PHP, MongoDB,
                MYSQL, SQLite, Python, LESS/SASS, Typescript, Java, JSON, ASP.NET, JQuery,
              </p>
            </div>
            {/* <div className="box-lighter-1 skill-box-1 box-to-slide-in-1 slide-in-1">
              <h2>Programs</h2>
              <p>
                Visual Studio Code, CMD, CLion, Visual Studio, Gimp, Blender, Atlassian Jira,
                Android Studio, Unity, GIT, Affinity Designer, Affinity Photo
              </p>
            </div> */}
          </div>
        </div>
        <div className='row courses-row slide-in-1'>
          <h5>Courses</h5>
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
        <div className="row projects-row justify-content-end">
          <h1 className="text-center box-to-slide-in-1 slide-in-1">Web Projects</h1>
          <div className="row justify-content-end">
            <div className="col-md-10 box-lighter-1 project-box-1 box-to-slide-in-1">
              <div className="row">
                <div className="col-md-6 project-box-info-1">
                  <h2>Web Designer Homepage</h2>
                  <p className="project-box-info-text-1">Designed example homepage of a made up web developer company.</p>

                  <p className="project-box-info-text-bottom-1">
                    Made with React.js and Bootstrap<br></br>
                    Designed with Affinity Designer <span className="tiny-text">(Adobe Illustrator alternative)</span>
                  </p>
                </div>
                <div className="col-md-6 pad-0">
                  <img className="img-fluid" src="./images/web-designer-site-2.png" alt="Failed loading..." />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="col-md-10 box-lighter-1 project-box-1 box-to-slide-in-1-left">
              <div className="row">
                <div className="col-md-6 pad-0">
                  {/* <div className='img-fluid'>
                    <video width="100%" autoplay="autoplay" muted="muted" loop="loop">
                      <source src='./videos/short.mp4' type='video/mp4'/>
                    </video>
                  </div> */}
                  <img className="img-fluid" src="./images/web-designer-site-3.png" alt="Failed loading..." />
                </div>
                <div className="col-md-6 project-box-info-1">
                  <h2>Video Game Homepage</h2>
                  <p className="project-box-info-text-1">Designed a home page for a small video game i made.</p>

                  <p className="project-box-info-text-bottom-1">
                    Made with React.js and Bootstrap<br></br>
                    Designed with Affinity Designer <span className="tiny-text">(Adobe Illustrator alternative)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-md-10 box-lighter-1 project-box-1 box-to-slide-in-1">
              <div className="row">
                <div className="col-md-6 project-box-info-1">
                  <h2>Portfolio site</h2>
                  <p className="project-box-info-text-1">Designed my portfolio</p>

                  <p className="project-box-info-text-bottom-1">
                    Made with React.js and Bootstrap<br></br>
                    Designed with Affinity Designer <span className="tiny-text">(Adobe Illustrator alternative)</span>
                  </p>
                </div>
                <div className="col-md-6 pad-0">
                  <img className="img-fluid" src="./images/web-designer-site-4.png" alt="Failed loading..." />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="col-sm-12 col-md-10 box-lighter-1 project-box-1 box-to-slide-in-1-left">
              <div className="row">
                <div className="col-md-6 pad-0">
                  {/* <div className='img-fluid'>
                    <video width="100%" autoplay="autoplay" muted="muted" loop="loop">
                      <source src='./videos/short.mp4' type='video/mp4'/>
                    </video>
                  </div> */}
                  <img className="img-fluid" src="./images/web-designer-site-6.gif" alt="Failed loading..." />
                </div>
                <div className="col-md-6 project-box-info-1">
                  <h2>Web Designer Landing Page</h2>
                  <p className="project-box-info-text-1">Designed a landing page for a made up graphic design company</p>


                  <p className="project-box-info-text-bottom-1">
                    Made with React.js, Bootstrap.<br></br>
                    Designed with Affinity Designer <span className="tiny-text">(Adobe Illustrator alternative)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row projects-row'>
          <h1 className="text-center box-to-slide-in-1">3D Game Projects</h1>
        </div>
        <div className='row footer'>
          Guðmundur Axel Guðrúnarson
        </div>
      </div>

      {/* <div className="wrap">
        <div className="container profile-container">
          <div className="row">
            <div className="col-sm-12">
              <div className="profile-box">
                <img src="./images/svg-1.svg" className="lines-animation" alt="Failed loading..." />
                <img className="img-fluid profile-image" src="./images/me-2.png" alt="Failed loading..." />
                <h2 className="py-4">Guðmundur Axel Guðrúnarson</h2>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="divider-1">
      </div>
      <div className="wrap-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>Web Projects</h3>
              <p className="text-grey">Summary of my knowledge with the web</p>
            </div>
            <div className="col-sm-6 text-center showcase-container">
              <h3>Web Designer</h3>
              <img className="img-fluid showcase-image" src="./images/web-designer-site-2.png" alt="Failed loading..." />
              <p className="text-grey">
                Made with React, Bootstrap.<br></br>
                Designed with Affinity Designer <span className="text-tiny">(Adobe Illustrator alternative)</span>.
              </p>
            </div>
            <div className="col-sm-6 text-center showcase-container">
              <h3>Video Game</h3>
              <img className="img-fluid showcase-image" src="./images/web-designer-site-3.png" alt="Failed loading..." />
              <p className="text-grey">
                Made with React, Bootstrap.<br></br>
                Designed with Affinity Designer <span className="text-tiny">(Adobe Illustrator alternative)</span>.
              </p>
            </div>
            <div className="col-sm-6 text-center showcase-container">
              <h3>Task App</h3>
              <img className="img-fluid showcase-image" src="./images/task-app.png" alt="Failed loading..." />
              <p className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-sm-6 text-center showcase-container">
              <h3>Todo App</h3>
              <img className="img-fluid showcase-image" src="./images/countdown-app.png" alt="Failed loading..." />
              <p className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-sm-6 text-center showcase-container">
              <h3>Task App</h3>
              <img className="img-fluid showcase-image" src="./images/task-app.png" alt="Failed loading..." />
              <p className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Tasks hello
              </p>
            </div>
            <div className="col-sm-6 text-center showcase-container">
              <h3>Todo App</h3>
              <img className="img-fluid showcase-image" src="./images/countdown-app.png" alt="Failed loading..." />
              <p className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>Video Game Projects</h3>
              <p className="text-grey">Summary of my knowledge with Unity</p>
            </div>
            <div className="col-sm-6 text-center showcase-container">
              <h3>Task App</h3>
              <img className="img-fluid showcase-image" src="./images/task-app.png" alt="Failed loading..." />
              <p className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-sm-6 text-center showcase-container">
              <h3>Todo App</h3>
              <img className="img-fluid showcase-image" src="./images/countdown-app.png" alt="Failed loading..." />
              <p className="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
