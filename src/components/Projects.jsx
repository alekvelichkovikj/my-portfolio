import React from 'react'
import snakeImage from '../images/snake-raw.png'
import blogifyImage from '../images/blogify.png'
import myConcertsImage from '../images/my-concerts.png'

export const Projects = () => {
  return (
    <div id='projects'>
      <div className='container'>
        <h3 className='btn-yellow'>Few of my projects</h3>

        <div>
          <div className='card'>
            <p>Snake Raw Game (desktop)</p>
            <a
              href='https://alekvelichkovikj.github.io/snake-game/'
              target='blank'
            >
              <img src={snakeImage} alt='Snake Game Screenshot' />
            </a>
            <p>Snake is built with JavaScript, purely dom manipulation</p>
            <a
              className='text-yellow'
              href='https://github.com/alekvelichkovikj/snake-game'
              target='blank'
            >
              Source code
            </a>
          </div>

          <div className='card'>
            <p>Bloggify | Blogging Platform (desktop)</p>
            <a href='https://bllogify.herokuapp.com/' target='blank'>
              <img src={blogifyImage} alt='Blogify Screenshot' />
            </a>
            <p>
              Blogify is built with Javascript, Node.js, Express, MongoDB &
              Handlebars
            </p>
            <a
              className='text-yellow'
              href='https://github.com/alekvelichkovikj/Blogify'
              target='blank'
            >
              Source code
            </a>
          </div>

          <div className='card'>
            <p>My Concerts | Find your next concert (responsive)</p>
            <a href='http://my-li.herokuapp.com/' target='blank'>
              <img src={myConcertsImage} alt='My Concerts Screenshot' />
            </a>
            <p>My Concerts is built with Node.js, Express, MongoDB & React</p>
            <a
              className='text-yellow'
              href='https://github.com/alekvelichkovikj/MyConcerts'
              target='blank'
            >
              Source code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
