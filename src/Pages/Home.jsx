import Header from './../components/Header';
import HeroSection from './../components/HeroSection';
import Feature from './../components/Feature';
import StayProductive from './../components/StayProductive';
import Testimonials from './../components/Testimonials';
import Contact from './../components/Contact';
import Footer from './../components/Footer';

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