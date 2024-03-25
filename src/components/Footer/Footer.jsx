import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer lg:flex justify-between p-10 bg-neutral text-neutral-content items-center ">
  <nav>
    
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <li className="font-bold">
      <NavLink to="/" className={({isActive}) => isActive? "font-extrabold text-primary":"font-extrabold"}>Home</NavLink>
     </li>
     <li className="font-bold">
        <NavLink to="/blog" className={({isActive}) => isActive? "font-extrabold text-primary":"font-extrabold"}>Blog</NavLink>
     </li>
     <li className="font-bold">
        <NavLink to="/bookmarks" className={({isActive}) => isActive? "font-extrabold text-primary":"font-extrabold"}>BookMarks</NavLink>
     </li>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;