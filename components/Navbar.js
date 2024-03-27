import Link from "next/link"
import Script from "next/script";


export default function navbar() {
  return (
    <>
      <div className="mo-nav">

        <li className="navbar-1"><Link href="/">Home</Link></li>
        <li className="navbar-1"><Link href="/About">About</Link></li>
        <li className="navbar-1"><Link href="/Projects">Project</Link></li>
        <li className="navbar-1"><Link href="/Acadamic">Acadamic</Link></li>
        <li className="navbar-1"><Link href="/Skills">Skill</Link></li>
        <li className="navbar-1"><Link href="#">Resume</Link></li>
        <li className="navbar-1"><Link href="/Contact">Contact</Link></li>
      </div>
      <div className="nav">
        <a className="logo" href="#">Digital<span>P</span></a>
        <li className="navbar"><Link href="/">Home</Link></li>
        <li className="navbar"><Link href="/About">About</Link></li>
        <li className="navbar"><Link href="/Projects">Projects</Link></li>
        <li className="navbar"><Link href="/Acadamic">Acadamic</Link></li>
        <li className="navbar"><Link href="/Skills">Skill</Link></li>
        <li className="navbar"><Link href="#">Resume</Link></li>
        <li className="navbar"><Link href="/Contact">Contact</Link></li>
          
        <div className="cbtn">
        <Link href="/Contact">Reach me out</Link>
        </div>
        
        <div className="menu">
          <button id="menu-btn"><img className="hamburger" src="/menu.png" alt="menu" /><img className="close" src="/close.png" alt="close" /></button>
        </div>
      </div>
      <Script>
        {`
  let menuBtn = document.querySelector("#menu-btn");
  let menuItems = document.querySelector(".mo-nav");
  let hamburger  = document.querySelector(".hamburger");
  let closee = document.querySelector(".close");
  let links = document.querySelectorAll(".navbar-1");

  links.forEach((e)=>{
    e.addEventListener("click", ()=>{
      menuItems.style.display = "none";
      hamburger.style.display = "block";
      closee.style.display = "none";
  })
  })

  menuBtn.addEventListener("click", ()=>{
  if(menuItems.style.display == "block"){
   menuItems.style.display = "none";
   hamburger.style.display = "block";
   closee.style.display = "none";

   }
  else{
   menuItems.style.display = "block";
  hamburger.style.display = "none";
  closee.style.display = "block";
  }
  })
  `}
      </Script>
    </>
  )


}