import Gallery from "@/components/templates/Gallery";
import Hero from "@/components/templates/Hero";
import RecentWork from "@/components/templates/RecentWork";
import ShowCases from "@/components/templates/ShowCases";

const HomePage = () => {
  return ( 
    <>
      <Hero />
      <ShowCases />
      <RecentWork />
      <Gallery />
    </>
   );
}
 
export default HomePage;