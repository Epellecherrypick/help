import Categories from "@/components/Categories";
import FeaturedChefs from "@/components/FeaturedChefs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Ratings from "@/components/Ratings";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <FeaturedChefs/>
      <Ratings/>
    </div>
  )
}