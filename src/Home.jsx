import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useApi from './useApi'

export default function Home() {
  let [n] = useApi()
  console.log(n);
  
  return (
    <>
    <Link to={'/about'}>About</Link>
    </>
  )
}
