import { Intro } from "@/components/Intro"
import { Navbar } from "../components/Navbar"
import { CardItems } from "./CardItems"


export const HomePage = () => {
  return (
    <div>
     
        <Navbar/>
        <Intro/>
        <div>
        <h1 className="text-3xl font-extrabold text-zinc-600 pt-10 opacity-95">CASE STUDIES</h1>
        <div className="h-0.5 mt-3 min-w-max mb-6 bg-purple-900"/>
        </div>
        <CardItems/>
        
    </div>
  )
}
