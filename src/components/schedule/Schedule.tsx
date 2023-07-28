import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";
import { Box, Center, VStack, Image, Heading } from "@chakra-ui/react";

import { EventRow } from "./EventRow";

import styles from "./Schedule.module.scss";

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
          borderRadius="10px">
          Schedule <br /> coming soon!
        </Heading>
      </Box>
    </Center>
  );
};

export default Schedule;
