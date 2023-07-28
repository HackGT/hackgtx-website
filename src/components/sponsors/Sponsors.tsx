import {
  Center,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import NextImage from "next/image";

import styles from "./Sponsors.module.scss";

const Sponsors = () => {
  const [tiers] = useState([1, 2, 3, 4]);

  return (
    <Center>
      <Box
        display="grid"
        justifyContent="center"
        alignContent="center"
        width="60%">
        <Image
          src="/img/global/sponsors.png"
          alt="schedule"
          gridArea="1 / 1"
          textAlign="center"
        />
        <Heading
          gridArea="1 / 1"
          textAlign="center"
          alignSelf="center"
          borderRadius="10px"
          >
          Sponsors <br /> coming soon!
        </Heading>
      </Box>
    </Center>
  );
};

export default Sponsors;
