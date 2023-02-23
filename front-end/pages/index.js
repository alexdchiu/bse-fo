import React from 'react'
import dynamic from 'next/dynamic'


export default function Index () {
  const HomePage = dynamic(() => import('../components/homePage'), {
    suspense: true,
  });
  
  return (
  <div className='pt-16'>
    <HomePage />
  </div>
  ) 
}