import React from 'react'
import { Link } from 'react-router-dom'
function Deshboard() {
  return (
    <>   
    <Link>
        <a href="">Home</a>
        </Link>
        
         <br />
        <Link to={"About"} >
         <a href="">About</a>
         <br />
        </Link>
        <Link>
        <a href="Desbo">Deshboard</a>
        </Link>
        <p>Deshboard</p>
    </>
  )
}
export default Deshboard