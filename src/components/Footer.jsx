function Footer (){
    return ( 
       <footer className="bg-(--footer-color)">
            <div className="container pt-[150px] px-2.5 sm:px-[50px] ">
                <img src="/src/assets/images/logo.svg" alt="img" />
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-5 pb-[50px]">
                    <div className="flex gap-4">
                        <img src="/src/assets/images/icon-location.svg" alt="img" className="h-4"/>
                        <p className="w-[400px] max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <img src="/src/assets/images/icon-phone.svg" alt="img" className="h-4"/>
                            <p>+123456789</p>
                        </div>                       
                         <div className="flex gap-4">
                            <img src="/src/assets/images/icon-email.svg" alt="img" className="h-4"/>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-4">
                        {["about us","jobs","press","blog"].map((item)=>(
                            <li key={item}><a href={`/`} className="capitalize hover:underline transition-all duration-200">{item}</a></li>
                        ))}
                       
                    </ul>
                    <ul className="flex flex-col gap-4">
                        {["contact us","terms","privacy"].map((item)=>(
                            <li key={item}><a href={`/`} className="capitalize hover:underline transition-all duration-200">{item}</a></li>
                        ))}
                    </ul>
                    <div className="flex justify-center md:justify-start gap-4 text-sm ">
                       <span className="w-[30px] h-[30px] border rounded-full element-center hover:bg-[#339ecc] hover:text-white transition-all duration-200 cursor-pointer">
                         <i className="fa-brands fa-facebook-f"></i>
                       </span>
                       <span className="w-[30px] h-[30px] border rounded-full element-center hover:bg-[#339ecc] hover:text-white transition-all duration-200 cursor-pointer">
                         <i className="fa-brands fa-twitter"></i>
                       </span>
                       <span className="w-[30px] h-[30px] border rounded-full element-center hover:bg-[#339ecc] hover:text-white transition-all duration-200 cursor-pointer">
                         <i className="fa-solid fa-envelope"></i>
                       </span>
                    </div>
                   
                </div>
            </div>
       </footer>
    );
}

export default Footer;