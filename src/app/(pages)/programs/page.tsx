import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import ProgramsContent from "@/app/(mainsite)/components/programspage/ProgramsContent/ProgramsContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: "Programs",
	  description: "Programs"
}

export default function ProgramsPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Programs" />
			<ProgramsContent />
	 	 </>
	 )
}