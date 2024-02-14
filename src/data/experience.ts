export type ExperienceInfo = {
  enabled: boolean;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  bulletPoints: string[];
};

const experience: ExperienceInfo[] = [
  {
    enabled: true,
    name: "Eddie van der Meer Ltd",
    startDate: "December 2022",
    endDate: "December 2023",
    description: "idk",
    bulletPoints: [],
  },
  {
    enabled: true,
    name: "Jimu Labs",
    startDate: "September 2022",
    endDate: "December 2022",
    description: "idk",
    bulletPoints: [],
  },
  {
    enabled: true,
    name: "Masimo",
    startDate: "June 2022",
    endDate: "September 2022",
    description: "idk",
    bulletPoints: ["Example 1", "Example 2", "Lorem ipsum dolor"],
  },
];

export default experience;
