function HeroSection (){
    return ( 
       <section className="pt-[250px] sm:pt-[150px] bg-(--primary-color) ">
            <div className="container element-center flex-col px-5">
                <div className="w-[750px] max-w-full">
                    <img src="/src/assets/images/illustration-intro.png" alt="" className="w-full h-fit"/>
                </div>
                
                <h4 className="sm:w-[650px] max-w-full text-[40px] text-center my-2.5">All Your files in one secure location, accessible anywhere.</h4>
                <p className="sm:w-[620px] max-w-full text-center mb-3">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                <a href="/" className="btn w-[250px] h-[50px] ">get started</a>
            </div>
           <div className="w-full h-[200px] overflow-hidden">
             <img src="/src/assets/images/bg-curvy-desktop.svg" alt="img" className="w-full h-full"/>
           </div>
       </section>
    );
}

export default HeroSection;