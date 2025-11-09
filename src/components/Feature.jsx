import { useState } from "react";
import FeatureBox from "./FeatureBox";


function Feature (){
    const [items]=useState([{img:"/images/icon-access-anywhere.svg", title:"Access your files, anywhere", desc:"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."},
    {img:"/images/icon-security.svg", title:"Security you can trust", desc:"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."},
    {img:"/images/icon-collaboration.svg", title:"Real-time collaboration", desc:"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."},
    {img:"/images/icon-any-file.svg", title:"Store any type of file", desc:"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."}   ])

    return ( 
          <section className="element-center">
            <div className="container grid md:grid-cols-2 justify-center gap-10 ">
                {items.map(({img, title, desc})=>(
                    <FeatureBox key={title} img={img} title={title} desc={desc}/>
                 ))
                }
            </div>
       </section>
    );
}

export default Feature;