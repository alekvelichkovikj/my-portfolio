import React from 'react'

export const Bio = () => {
  return (
    <div id='bio'>
      <div className='container container-responsive'>
        <div className='center'>
          <h3 className='btn-yellow'>About me...</h3>
          <p>
            Hi everyone! In the summer of 2020, through a friends (senior dev)
            suggestion I started my first class on Udemy for Modern HTML & CSS.
            You could say after a very short time that I was pretty much hooked.
            So I planned & plotted my future while continuing learning for the
            next 18 months. I decided to attend a Bootcamp & it was one of the
            best decisions I've ever made. My final project was voted one of two
            best in my cohort. I'm very excited about what comes next.
          </p>
        </div>

        <div className='center'>
          <h3 className='btn-yellow'>Technical skills</h3>
          <div className='flex'>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDb</li>
              <li>Axios</li>
            </ul>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive Design</li>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
