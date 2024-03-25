import { Link } from "react-router-dom";

import weab from "../../../../public/wave.svg"
import "./Hero.css"


const Hero = () => {
    return (
        <div className="">
      <div className=" p-10 my-10">
      <h1 className="font-extrabold  text-4xl lg:text-7xl text-center my-10">Welcome to <span className="text-primary lg:text-7xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
      <p className="text-center w-3/5 m-auto  ">ByteBlaze is a dynamic online platform that serves as a hub for technology enthusiasts, developers, and digital creators alike. Founded with the vision of fostering a vibrant community centered around innovation and collaboration, ByteBlaze offers a range of features and resources tailored to empower individuals in their digital journey.</p>
      </div>
      <div className="flex justify-center items-center gap-5 ">
        
        <Link to="/blog" className="relative inline-block px-4 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
<span className="relative text-black group-hover:text-white hover:border-white">Read Blog</span>
</Link>

<Link to="/blog" className="relative inline-block px-4 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
<span className="relative text-black group-hover:text-white hover:border-white">Read Blog</span>
</Link>

       
     
      </div>
      <div >
        <img src={weab} alt="" className=" bottom-0 w-full"/>
      </div>
      

    </div>
    );
};

export default Hero;