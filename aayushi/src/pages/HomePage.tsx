import { Intro } from "@/components/Intro";
import { Navbar } from "../components/Navbar";
import { CardItems } from "../components/CardItems";
import { Video } from "../components/Video";
import { Video1 } from "../components/Video1";
import { CardImg } from "../components/CardImg";


export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <div className="mx-40 pt-40">
        <h1 className="text-3xl font-extrabold text-zinc-600 pt-10 opacity-95">CASE STUDIES</h1>
        <div className="h-0.5 mt-3 min-w-max mb-6 bg-zinc-600" />
      </div>
      <CardItems
      type={Video}
        title="Allura Case Studies"
        subtitle="Allura coffee app"
        description='"Coffee Made for the Soul"'
      />
      <CardItems
      type={Video1}
      title="Zura Case Studies"
      subtitle="Zura music app"
      description='"Live Life Loud"'/>

      <CardItems
      type={CardImg}

      title="ES Jewelry"
      subtitle="Es jewelry was a project Aimed to create a brand that incorporates unique cultural heritage"
      description=""/>
    </div>
  );
};
