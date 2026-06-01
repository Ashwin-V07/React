import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useApi from './useApi'
let d = import.meta.env.VITE_SDATA || 'nodata'
export default function Home() {
  console.log( import.meta.url.length)
  let [n] = useApi()
  return (
    <>
      {d}
      <Link to={'/about'}>About</Link>
    </>
  )
}
