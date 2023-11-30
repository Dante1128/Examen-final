import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <> 
        <div>
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
        
         <br />
         <p>Home</p>
       
     </div>
    </>
  )
}
export default Home