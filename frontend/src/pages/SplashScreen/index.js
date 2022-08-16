import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function SplashScreen() {
  return (
    <div className="splashscreen-container">
      <div className="content-container my-auto mx-auto">
      <h1 className="title mx-auto">SUAS NOTAS</h1>
      <div className="button-container mt-10">
      <Link to="/Login"><button className="rounded-xl button log-in mx-5 px-7 py-2 ">LOGIN</button></Link>
        <Link to="/Register"><button className="rounded-xl button register mx-5 px-7 py-2">REGISTER</button></Link>
      </div>
      

      </div>
    </div>
  )
}
