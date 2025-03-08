import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <h1>About</h1>
      <Link to="/">home</Link>
      <Link to="/contact">contact</Link>
    </>
  )
}

export default About