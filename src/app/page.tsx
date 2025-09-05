import Footer from "@/components/Footer/  Footer";
import Blogs from "@/sections/Blogs";
// import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Testimonial from "@/sections/Testimonials";
import Events from "@/sections/Events";
import Highlights from "@/sections/Highlights";
import Collaborator from "@/components/Collaborators/Collaborators";

export default function Home() {
    return (
        <>
            <Navbar />
            <Highlights />
            <Testimonial />
            <Events />
            <Blogs />
            {/* <Hero />*/} 
            <Collaborator />
            <Footer /> 
        </>
    );
}