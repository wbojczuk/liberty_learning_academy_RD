import AboutUs from "@/app/(mainsite)/components/aboutpage/AboutUs/AboutUs";
import Empowering from "@/app/(mainsite)/components/homepage/Empowering/Empowering";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import LikeHome from "@/app/(mainsite)/components/homepage/LikeHome/LikeHome";
import OurMission from "@/app/(mainsite)/components/homepage/OurMission/OurMission";
import OurVision from "@/app/(mainsite)/components/homepage/OurVision/OurVision";
import Reasons from "@/app/(mainsite)/components/homepage/Reasons/Reasons";


export default function Home() {
  return (
    <>
      <Header />
      <LikeHome />
      <Empowering />
      {/* <OurVision /> */}
      <AboutUs />
      <Reasons />
      {/* <OurMission /> */}
    </>
  )
}
