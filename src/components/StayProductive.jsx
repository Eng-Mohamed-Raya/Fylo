function StayProductive (){
    return ( 
         <section className="my-[100px]">
            <div className="container element-center flex-col lg:flex-row gap-10 px-2.5 sm:px-0">
                <div className="h-[400px] max-h-full">
                    <img src="/images/illustration-stay-productive.png" alt="img" className="w-full h-full"/>
                </div>
                <div>
                    <h4 className="sm:w-[400px] max-w-full text-[40px] my-2.5">Stay productive, wherever you are</h4>
                    <p className="sm:w-[620px] max-w-full mb-3 text-sm">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p className="sm:w-[620px] max-w-full mb-3 text-sm">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <a href="/" className="flex gap-1 border-b w-40 text-[#65e2d9] text-sm ">See how Fylo works <img src="/images/icon-arrow.svg" alt="img" className="animate-[moveRight_1s_ease-in-out_infinite]"/></a>
                </div>
            </div>
         </section>
    );
}

export default StayProductive;