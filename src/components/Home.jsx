import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Home = () => {
  return (
    <div id='home'>
      <div className='container-mobile'>
        <div>
          <h3 className='yellow'>Hi, Im Alek</h3>
          <p>I'm a Web Developer and this is my online portfolio!</p>
        </div>

        <div>
          <p>
            Please have a look around and feel free to contact me. You can find
            the source code for this project
            <span className='yellow mt-2'>
              <a href='/'>here</a>
            </span>
          </p>
          <div className='social-icons'>
            <a href='https://github.com/alekvelichkovikj' target='blank'>
              <FaGithub size={40} className='social-icon' />
            </a>

            <a
              href='https://www.linkedin.com/in/aleksandarvelichkovikj/'
              target='blank'
            >
              <FaLinkedin size={40} className='social-icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
