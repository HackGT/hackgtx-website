import { Center, Image, Text, VStack, Heading, Box } from "@chakra-ui/react";
import QA from "./QA";
import styles from "./Faq.module.scss";
import NextImage from "next/image";

import qas from "./FAQ.json";
import HardwareQ from "./HardwareQ";
import AdmissionQ from "./AdmissionQ";

const Faq = () => {
  return (
    <Center>
      <Box
        display="grid"
        justifyContent="center"
        alignContent="center"
        width="60%">
        <Image
          src="/img/global/orange_sticky.png"
          alt="schedule"
          gridArea="1 / 1"
          textAlign="center"
        />
        <Heading
          gridArea="1 / 1"
          textAlign="center"
          alignSelf="center"
          borderRadius="10px"
          paddingRight="7%"
          fontSize={{ sm: "20px", lg: "35px" }}>
          FAQs <br /> coming soon!
        </Heading>
      </Box>
    </Center>
  );
};

export default Faq;
