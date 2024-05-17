import SVGevdm from "../ScreenExperience/SVGevdm";
import SVGjimu from "../ScreenExperience/SVGjimu";
import SVGmasimo from "../ScreenExperience/SVGmasimo";
import SVGnatasha from "../ScreenExperience/SVGnatasha";

export type ExperienceInfo = {
  enabled: boolean;
  id: string;
  name: string;
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
    name: "Natasha Guitars",
    logo: <SVGnatasha size={80} />,
    startDate: "March 2024",
    endDate: "April 2024",
    description: "idk",
    bulletPoints: [],
  },
  {
    enabled: true,
    id: "evdm",
    name: "Eddie vd Meer Ltd",
    logo: <SVGevdm size={70} />,
    startDate: "January 2024",
    endDate: "February 2024",
    description: "idk",
    bulletPoints: [],
  },
  {
    enabled: true,
    id: "jimu",
    name: "Jimu Labs",
    logo: <SVGjimu size={80} />,
    startDate: "September 2022",
    endDate: "December 2022",
    description: "idk",
    bulletPoints: [],
  },
  {
    enabled: true,
    id: "masimo",
    name: "Masimo",
    logo: <SVGmasimo size={80} />,
    startDate: "June 2022",
    endDate: "September 2022",
    description: "idk",
    bulletPoints: ["Example 1", "Example 2", "Lorem ipsum dolor"],
  },
];

export default experience;
