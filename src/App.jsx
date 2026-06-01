import { useCallback, useMemo, useReducer, useRef, useState } from "react"
import {BrowserRouter,Routes ,Route} from "react-router-dom"
import './App.css'
import C1 from "./C1"
import Home from "./Home"
function App() {
  // let [x, setX] = useState(0)
  // let handle = () => {
  //   useMemo(()=>{
  //     setX(x+10000)
  //   },[x])
  // }
  // let a = useRef()
  // let handle = ()=>{
  //   a.current.value=""
  //   a.current.focus()
  // }
  // let handle = () => {
  //   console.log(10);
  // } 
  // useCallback(handle, [])
  // function red(st, action) {
  //   switch (action.type) {
  //     case "inc":
  //       console.log("asdfs");
  //     case "dec":
  //       console.log("ert");
  //   }
  // }
  // let [state, dispatch] = useReducer(red, { count: 0 })
  return (
    <>
      {/* {state.count}
      <button onClick={() => dispatch({ type: "inc" })} > + </button>
      <button onClick={() => dispatch({ type: "dec" })} > - </button> */}
      {/* <div className="con" style={{ background: "black", width: "100wh", height: "100vh" }}>
        <button onClick={handle} >
          click here
        </button>
        <br /><br />
        {x}
      </div> */}
      {/* <input type="text" ref={a}/>
      <input type="button" onClick={()=>(handle())} value={'submit'} /> */}
      {/* <input type="button" onClick={() => handle()} value='submit' /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<C1/>} ></Route>
          <Route path="*" element={<h1 style={{color:'red'}}>404</h1>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
