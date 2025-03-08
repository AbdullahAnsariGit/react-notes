import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </>

  )
}

export default Contact