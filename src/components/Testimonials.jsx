import { useState } from "react";

function Testimonials (){
        const [items]=useState([{img:"/src/assets/images/profile-1.jpg", name:"Satish Patel", position:"Founder & CEO, Huddle", desc:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."},
        {img:"/src/assets/images/profile-2.jpg", name:"Bruce McKenzie", position:"Founder & CEO, Huddle", desc:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."},
        {img:"/src/assets/images/profile-3.jpg", name:"Iva Boyd", position:"Founder & CEO, Huddle", desc:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."}   ])

    return ( 
          <section className="element-center px-5 sm:px-0">
            <div className="container flex flex-wrap justify-center gap-10 ">
               {items.map(({img, name, position, desc},idx)=>(
                   <div key={name} className="flex flex-col max-w-[400px] gap-5 bg-[#202a3c] py-7 px-4 rounded-lg relative">
                        {idx==0 && <img src="/src/assets/images/bg-quotes.png" alt="" className="absolute -top-10 -z-1 left-0"/>}
                        <p>{desc}</p>
                        <div className="flex items-center gap-3 ">
                            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                <img src={img} alt={name+' img'} />
                            </div>
                            <div>
                                <h4 className="font-bold">{name}</h4>
                                <p>{position}</p>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
          
       </section>
    );
}

export default Testimonials;