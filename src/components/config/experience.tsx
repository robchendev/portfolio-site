import SVGevdm from "../ScreenExperience/SVGevdm";
import SVGjimu from "../ScreenExperience/SVGjimu";
import SVGmasimo from "../ScreenExperience/SVGmasimo";
import SVGnatasha from "../ScreenExperience/SVGnatasha";

export type ExperienceInfo = {
  enabled: boolean;
  id: string;
  name: string;
  role: string;
  shortName?: string;
  logo: React.ReactNode;
  startDate: string;
  endDate: string;
  description: string;
  bulletPoints: string[];
};

const experience: ExperienceInfo[] = [
  {
    enabled: true,
    id: "natasha",
    name: "Natasha Guitars, Freelance",
    role: "Front-End Web Developer",
    logo: <SVGnatasha size={80} />,
    startDate: "Mar 2024",
    endDate: "Apr 2024",
    description:
      "Built and designed critical thematic elements and functional sales logic to optimize customer experience. Worked closely with cross-functional team including sales and marketing managers to translate business needs into technical solutions.",
    bulletPoints: [],
  },
  {
    enabled: true,
    id: "evdm",
    name: "Eddie vd Meer Ltd, Freelance",
    role: "Front-End Web Developer",
    logo: <SVGevdm size={70} />,
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    description:
      "Developed a high quality, responsive website to facilitate user search for sales of sheet music. Provided cost-saving solutions to create an in-house link aggregator that would otherwise require a paid third-party service.",
    bulletPoints: [],
  },
  {
    enabled: true,
    id: "jimu",
    name: "Jimu Labs",
    role: "Full-stack Web & Developer Co-op",
    logo: <SVGjimu size={80} />,
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    description:
      "Developed essential features for a web service that automates user interactions on chat platforms like Discord and Slack, enhancing the onboarding process. Worked on a social media app with interactive features, prioritizing user data security.",
    bulletPoints: [],
  },
  {
    enabled: true,
    id: "masimo",
    name: "Masimo",
    role: "Software Engineer Intern",
    logo: <SVGmasimo size={80} />,
    startDate: "Jun 2022",
    endDate: "Sep 2022",
    description:
      "Built an application that expedites over-the-air updates for medical devices, benefiting millions of patients. Designed and implemented a user-friendly interface for scientific devices for real-time patient data retrieval.",
    bulletPoints: ["Example 1", "Example 2", "Lorem ipsum dolor"],
  },
];

export default experience;
