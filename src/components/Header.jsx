import { useEffect, useRef, useState } from "react";


function Header (){
    const [navItems] = useState (["Features", "Team", "Sign In"]);
    const headerRef=useRef();
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                headerRef.current.style.padding="20px 0"
                headerRef.current.style.backgroundColor="var(--secondary-color)"
            }else{
                headerRef.current.style.padding="50px 0"
                headerRef.current.style.backgroundColor="transparent"
            }
        })
    },[])
    return ( 
       <header ref={headerRef} className="fixed top-0 w-full pt-[50px] z-50 transition-all duration-300">
            <div className="container flex flex-col sm:flex-row justify-between items-center pt-3 sm:pt-0 px-2.5 sm:px-[50px] gap-5 md:gap-0 ">
                <img src="/images/logo.svg" alt="logo-img" />
                <nav>
                    <ul className="flex gap-5 sm:gap-10 items-center">
                        {navItems.map((item)=>(
                            <li key={item}><a href={`/${item.toLowerCase()}`} className="text-[20px] hover:underline transition-all duration-200">{item}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
       </header>
    );
}

export default Header;