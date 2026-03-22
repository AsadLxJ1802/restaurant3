import Booking from "@/modules/booking/page";
import Gallery from "@/modules/gallery/page";
import Hero from "@/modules/Hero/page";
import Info from "@/modules/info/page";
import Popular from "@/modules/popular/page";

export default function Home() {
  return (
   <div>
      <Hero/>
      <Popular/>
      <Booking/>
      <Info/>
      <Gallery/>
   </div>
  );
}
