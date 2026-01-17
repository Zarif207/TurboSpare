import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Exclusive from "@/components/Exclusive";
import ClientSay from "@/components/ClientSay";
import Video from "@/components/Video";
import Extra from "@/components/Extra";
import Ending from "@/components/Ending";

export default function Home() {
  return (
    <>
    
      <Hero />
      <Features />
      <Categories />
      <Exclusive/>
      <ClientSay/>
      <Video/>
      <Extra/>
      <Ending/>
    </>
  );
}