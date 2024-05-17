import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import SVGevdm from "./SVGevdm";
import SVGnatasha from "./SVGnatasha";
import SVGmasimo from "./SVGmasimo";
import SVGjimu from "./SVGjimu";
import Badge from "./Badge";
import experience from "../config/experience";

const ExperienceScreen = () => {
  return (
    <HStack spacing={0} className="bg-white h-full w-full">
      <div className="w-3/4 h-full flex justify-center items-center text-[2.5rem] text-center">
        <div>
          <p>This page is under development,</p>
          <p>
            See my Experience in my{" "}
            <Link
              target="_blank"
              href="/resume.pdf"
              className="inline-block underline text-blue-600 underline-offset-4"
            >
              Resume
            </Link>{" "}
            instead
          </p>
        </div>
      </div>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={0}
        className="w-1/4 h-full bg-slate-300 flex justify-center items-center px-2 py-2"
      >
        {[...Array(8)].map((_, index) => {
          return <Badge key={index}>{experience[index] && experience[index]?.logo}</Badge>;
        })}
      </Grid>
    </HStack>
  );
};

export default ExperienceScreen;
