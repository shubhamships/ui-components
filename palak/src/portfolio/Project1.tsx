// import zura1 from "../assets/zura1.png";
import Footer from "../components/Footer";
import overview1 from "../assets/overview1.png";
import overview3 from "../assets/overview3.png";
import gif5 from "../assets/gif5.gif";
import gif6 from "../assets/gif6.gif";
import BrandOverview from "./BrandOverview";
import ProjectOverview from "./ProjectOverview";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.png";
import CaseStudy from "./CaseStudy";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.png";
import BrandMockups from "./BrandMockups";
import apple from "../assets/apple.png";
import spotify from "../assets/spotify.png";
import OtherProjects from "./OtherProjects";
import DemoVideo from "./DemoVideo";

const Project1 = () => {
  const array = [
    { text: "1. Brand Overview", link: "#brandoverview" },
    { text: "2. Project Overview", link: "#" },
    { text: "3. Brand Mockup", link: "#" },
    { text: "4. UX Research", link: "" },
    { text: "5. UI Designs", link: "#" },
    { text: "6. Zura Demo Video", link: "#" },
  ];
  const overviewArray = [
    {
      text: "CURRENT CHALLENGE",
      description: "Zura need strong brand identity and individuality to stand apart amount its Competitors",
    },
    {
      text: "TASK",
      description:
        "Create an mobile application that is user-centered, accessible and  incorporates Zura’s values and promotes creativity.",
    },
  ];
  const taskArray = [
    {
      text: "CURRENT CHALLENGE",
      description: "Zura need strong brand identity and individuality to stand apart amount its Competitors",
    },
    {
      text: "TASK",
      description:
        "Create an mobile application that is user-centered, accessible and  incorporates Zura’s values and promotes creativity.",
    },
  ];
  const competitiveAnalysisData = [
    {
      title: "APPLE MUSIC",
      image: apple,
      strengths: [
        "Paid Subscribers can download music",
        "Large music selection",
        "Easy sync with iTunes",
        "Easy access between Apple products",
      ],
      weaknesses: [
        "Messy and inconsistent UI with Apple Brand",
        "Inconsistency between Android and Apple version",
        "No Free/Ad-Supported Tier",
      ],
    },
    {
      title: "SPOTIFY",
      image: spotify,
      strengths: [
        "Number #1 music streaming application",
        "Long-term free subscription",
        "Clear, easy and consistent UI design",
        "Accessible on multiple platforms on Both Apple and Android",
        "High Quality streaming",
      ],
      weaknesses: [
        "No lyrics Features",
        "Price can add up",
        "Prolonged ads for free account",
        "Feature limitations for free account",
      ],
    },
  ];
  const imgArray = [overview1, gif5, overview3];
  const mockupArray = [m1, m2, m3, m4, m5, overview1];
  const gifArray = [
    { image: gif6, link: "#" },
    { image: gallery3, link: "#" },
    { image: gallery2, link: "/illustrations" },
  ];
  const textArray = [
    {
      text: "PROJECT",
      description: "Zura is a music/audio streaming mobile application to create an immersive artistic experience.",
    },
  ];

  return (
    <div>
      <CaseStudy
        name="ZURA"
        name2="CASE STUDY"
        description="​Zura was a passion project that represents my love of music. The project was initially inspired by one of my foster kitten that I had. He was full of curiosity, energy and spirit, but still so comforting and loving. So, I wanted to convey, curiosity, energy but ease, and comfort with this design."
        array={array}
      />
      <div className="px-6 md:px-40">
        <BrandOverview array={imgArray} textArray={textArray} />

        <ProjectOverview
          overviewArray={overviewArray}
          taskArray={taskArray}
          competitiveAnalysisData={competitiveAnalysisData}
        />
        <BrandMockups array={mockupArray} />
        <DemoVideo />
        <OtherProjects array={gifArray} />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Project1;
