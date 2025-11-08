import Contact from "../components/contact";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StayProductive from "../components/StayProductive";
import Testimonials from "../components/Testimonials";

function Home (){
    return ( 
        <>
            <Header/>
            <HeroSection/>
            <Feature/>
            <StayProductive/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;