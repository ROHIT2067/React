import {Outlet, Link } from 'react-router-dom';

export function LayOut(){
    return  <>  
      <nav><Link to="/">Home</Link> | <Link to="/about">About</Link></nav>
      <hr />
      <Outlet /> {/* child route renders here */}
            </>
}

export function Home() { return <h2>Home Page</h2>; }
export function About() { return <h2>About Page</h2>; }