import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme'
import { FaLinkedin } from 'react-icons/fa'

export const Contact = () => {
  const [{ isDark }] = useContext(ThemeContext)

  return (
    <div id='contact'>
      <div className='container'>
        <h3 className='btn-yellow'>Get in touch!</h3>

        <div className='container-responsive'>
          <div>
            <p>How I can add to your team</p>

            <ul>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Time management</li>
              <li>Analytical skills</li>
              <li>Thinking critically & evaluating</li>
              <li>Completing tasks & attaining goals</li>
            </ul>
          </div>

          <div className='center'>
            <a href='mailto:al.velichkovikj@gmail.com'>
              <h1 className='btn-yellow'>Email me!</h1>
            </a>
            <h5>Or Contact me on LinkedIn</h5>

            <a
              className={isDark ? 'text-light' : 'text-dark'}
              href='https://www.linkedin.com/in/aleksandarvelichkovikj/'
              target='blank'
            >
              <FaLinkedin size={60} className='social-icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
