import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './_app'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {useState, useEffect} from 'react'


export default function Index () {
  const HomePage = dynamic(() => import('./components/homePage'), {
    suspense: true,
  });
  
  return (
  <div className='pt-16'>
    <HomePage />
  </div>
  ) 
}