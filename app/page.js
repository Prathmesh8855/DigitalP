import Link from "next/link"

export default function Home() {
 
  return (
    <>
       <div className="page1" id="home">
        <div className="lr-wrap">
         <div className="page1-left">
            
            <div className="containt">
                <li className="tag1">Hello, I'm Prathmesh</li>
                <li className="tag2"><span className="ete"></span><br/><span></span></li>
                <li className="tag3">Freelance Web Designer And Developer</li>
                <li className="tag4"><button><Link href="/Contact">HIRE ME</Link></button></li>
            </div>
        </div>

       <div className="page1-right">
            
            <div className="box">
            <img src="/photop.png" alt="prathmesh"/>
            </div>

            <h1>2024-25</h1>


        </div>
        </div>
</div>
    </>
    )
  }