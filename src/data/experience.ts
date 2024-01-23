type ExperienceInfo = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  bulletPoints: string[];
};

const Experience: ExperienceInfo[] = [
  {
    name: "Eddie van der Meer Ltd",
    startDate: "December 2022",
    endDate: "December 2023",
    description: "idk",
    bulletPoints: [],
  },
  {
    name: "Jimu Labs",
    startDate: "September 2022",
    endDate: "December 2022",
    description: "idk",
    bulletPoints: [],
  },
  {
    name: "Masimo",
    startDate: "June 2022",
    endDate: "September 2022",
    description: "idk",
    bulletPoints: ["Example 1", "Example 2", "Lorem ipsum dolor"],
  },
];

export default Experience;
