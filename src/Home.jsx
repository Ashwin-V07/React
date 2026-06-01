import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useApi from './useApi'

export default function Home() {
  let [n] = useApi()
  console.log(n);
  let d = import.meta.SDATA
  return (
    <>
      {d}
      <Link to={'/about'}>About</Link>
    </>
  )
}
