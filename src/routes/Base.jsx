import { Outlet, Link } from "react-router-dom";
import '../css/base.css'

export default function Base () {
  return (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <Outlet />
    </>
  )
};