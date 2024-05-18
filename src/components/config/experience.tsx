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
  companyUrl?: string;
  logo: React.ReactNode;
  logoSm: React.ReactNode;
  date1: string;
  date2: string;
  description: string;
  bulletPoints: string[];
  colorTag: string;
};

const experience: ExperienceInfo[] = [
  {
    enabled: true,
    id: "natasha",
    name: "Natasha Guitars",
    role: "Frontend Developer, Freelance",
    companyUrl: "https://natashaguitar.com",
    logo: <SVGnatasha size={80} />,
    logoSm: <SVGnatasha size={40} className="inline" />,
    date1: "Mar - Apr",
    date2: "2024",
    description:
      "Built and designed critical thematic elements and functional sales logic to optimize customer experience. Worked closely with cross-functional team including sales and marketing managers to translate business needs into technical solutions.",
    bulletPoints: [],
    colorTag: "bg-orange-200",
  },
  {
    enabled: true,
    id: "evdm",
    name: "Eddie van der Meer",
    role: "Frontend Developer, Freelance",
    companyUrl: "https://eddievandermeer.com",
    logo: <SVGevdm size={70} />,
    logoSm: <SVGevdm size={40} className="inline" />,
    date1: "Jan - Feb",
    date2: "2024",
    description:
      "Developed a high quality, responsive website to facilitate user search for sales of sheet music. Provided cost-saving solutions to host the website and to create an in-house link aggregator to replace a paid third-party service.",
    bulletPoints: [],
    colorTag: "bg-slate-200",
  },
  {
    enabled: true,
    id: "jimu",
    name: "Jimu Labs",
    role: "Full-stack Developer Co-op",
    logo: <SVGjimu size={80} />,
    logoSm: <SVGjimu size={40} className="inline" />,
    date1: "Sep - Dec",
    date2: "2022",
    description:
      "Developed essential features for a web service that automates user interactions and onboarding flow on chat platforms like Discord and Slack. Worked on a social media app with interactive features, prioritizing user data security.",
    bulletPoints: [],
    colorTag: "bg-green-200",
  },
  {
    enabled: true,
    id: "masimo",
    name: "Masimo",
    role: "Software Engineer Intern",
    companyUrl: "https://masimo.com",
    logo: <SVGmasimo size={80} />,
    logoSm: <SVGmasimo size={40} className="inline" />,
    date1: "June - Sep",
    date2: "2022",
    description:
      "Built a full-stack application that expedites over-the-air updates for medical devices, benefiting millions of patients. Designed and implemented a user-friendly interface for scientific devices for real-time patient data retrieval.",
    bulletPoints: ["Example 1", "Example 2", "Lorem ipsum dolor"],
    colorTag: "bg-rose-200",
  },
];

export default experience;
