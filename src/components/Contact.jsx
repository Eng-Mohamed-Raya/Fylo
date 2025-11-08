
function Contact (){
       
    return ( 
          <section className="element-center px-5 sm:px-0 mt-[200px] z-2 -mb-20">
                   <div className="flex flex-col w-[800px] max-w-full h-[450px] sm:h-fit gap-10 md:gap-5 bg-[#1f2937] py-7 px-4 rounded-lg">
                      <h4 className="text-3xl font-bold text-center">Get early access today</h4>
                        <p className="text-center w-[600px] max-w-full mx-auto">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                        <form className="element-center flex-col sm:flex-row gap-10 md:gap-8">
                            <input type="text" className="w-[400px] max-w-full h-[45px] bg-white rounded-full "/>
                            <button className="btn w-[220px] max-w-full h-[45px] ">Get Start for free</button>
                        </form>
                    </div>
          
       </section>
    );
}

export default Contact;