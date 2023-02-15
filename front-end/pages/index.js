import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './_app'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

export default function Index () {
  // axios.get('/api/players').then((data) => {
  //   console.log(data)
  // })
  const NavBar = dynamic(() => import ('./components/navBar.js'))
  
  return <div>
    {/* <h1 className="text-3xl font-bold underline">Home page</h1> */}
    <NavBar />
  </div>
}