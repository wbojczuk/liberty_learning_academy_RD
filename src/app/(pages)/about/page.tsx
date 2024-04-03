import AboutUs from "@/app/(mainsite)/components/aboutpage/AboutUs/AboutUs"
import Empowering from "@/app/(mainsite)/components/homepage/Empowering/Empowering"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: "About",
	  description: "About"
}

export default function AboutPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="About" />
			<AboutUs />
			<Empowering />
	 	 </>
	 )
}