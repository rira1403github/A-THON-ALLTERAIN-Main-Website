import Footer from "@/components/Footer/Footer";
import Blogs from "@/sections/Blogs";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Testimonial from "@/sections/Testimonials";
import Events from "@/sections/Events";
import Highlights from "@/sections/Highlights";
import Collaborator from "@/components/Collaborators/Collaborators";
import Products from "@/sections/ProductSection";
import Awards from "@/sections/Award";
import CTA from "@/sections/ActionsSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero /> 
            <Highlights />
            <Products />
            <Testimonial />
            <Events />
            <Blogs />
            <Awards />
            <Collaborator />
            <CTA />
            <Footer /> 
        </>
    );
}