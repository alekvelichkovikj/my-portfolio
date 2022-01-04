import React from 'react'

export const Education = () => {
  return (
    <div id='education'>
      <div className='container'>
        <h3 className='btn-yellow'>Where i learned...</h3>
        <p>The internet is a very big place with tons of information.</p>

        <div>
          <div className='card'>
            <h3 className='mb-0'>Ironhack Berlin</h3>
            <p className='text-yellow'>Oct-Dec | 2021</p>
            <ul>
              <li>Front-End projects using HTML/CSS</li>
              <li>
                Full-Stack project using ExpressJs, Node.js, MongoDB,
                Handlebars.js & Axios
              </li>
              <li>Web application using React.js</li>
            </ul>
          </div>

          <div className='card'>
            <h3 className='mb-0'>Udemy</h3>
            <p className='text-yellow'>2020 - 2021</p>
            <ul>
              <li>Modern HTML & CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>React.js</li>
            </ul>
          </div>

          <div className='card'>
            <h3>YouTube</h3>
            <ol>
              <li>
                YouTube has an abundance of free material, I stil use it today!
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
