import { Center } from "@chakra-ui/react";
import React from "react";

const Project = ({ params }: { params: { id: string } }) => {
  return (
    <Center className="h-screen text-3xl">
      <div>Project ID: {params.id}</div>
    </Center>
  );
};

export default Project;
