import React from 'react'
import './skills.css';

function Skills() {
  return (
    <div id='skills'>
      <h1 className='section-head-tag'>My <span className='colored-span-tag'>Technical</span> Skills</h1>
      <div className='skills-desc-div'>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' rel='noreferrer noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/174/174854.png' alt='html'/>
            <p>HTML</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel='noreferrer noopener'>
            <img src='https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png' alt='css'/>
            <p>CSS</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noreferrer noopener'>
            <img src='https://mohitkss.github.io/static/media/js.3dfb665e058d08c99f28.png' alt='js'/>
            <p>JavaScript</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://reactjs.org/' target='_blank' rel='noreferrer noopener'>
            <img src='https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png' alt='react'/>
            <p>React</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://redux.js.org/' target='_blank' rel='noreferrer noopener'>
            <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' alt='redux'/>
            <p>Redux</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://mui.com/' target='_blank' rel='noreferrer noopener'>
            <img src='https://v4.mui.com/static/logo.png' alt='materialui'/>
            <p>Material UI</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://nodejs.org/en/' target='_blank' rel='noreferrer noopener'>
            <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' alt='nodejs'/>
            <p>Node JS</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://expressjs.com/' target='_blank' rel='noreferrer noopener'>
            <img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' alt='express'/>
            <p>Express</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://mongoosejs.com/' target='_blank' rel='noreferrer noopener'>
            <img src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png' alt='mongoose'/>
            <p>Mongoose</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://www.mongodb.com/' target='_blank' rel='noreferrer noopener'>
            <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' alt='mongodb'/>
            <p>MongoDB</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://github.com/' target='_blank' rel='noreferrer noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/733/733609.png' alt='github'/>
            <p>GitHub</p>
          </a>
        </div>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://www.postman.com/' target='_blank' rel='noreferrer noopener'>
            <img src='https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png' alt='postman'/>
            <p>React-native</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Skills;