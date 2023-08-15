import React from "react";
import { Box, Center, Image, Heading } from "@chakra-ui/react";

const Schedule = () => {
  return (
    <Center>
      <Box
        display="grid"
        justifyContent="center"
        alignContent="center"
        width="60%">
        <Image
          src="/img/global/green_sticky.png"
          alt="schedule"
          gridArea="1 / 1"
          textAlign="center"
        />
        <Heading
          gridArea="1 / 1"
          textAlign="center"
          alignSelf="center"
          borderRadius="10px"
          fontSize={{ sm: "20px", lg: "35px" }}>
          Schedule <br /> coming soon!
        </Heading>
      </Box>
    </Center>
  );
};

export default Schedule;
