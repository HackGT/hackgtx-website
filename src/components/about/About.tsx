import {
  Text,
  Image,
  Center,
  Stack,
  Box,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import styles from "./About.module.scss";
import NextImage from "next/image";
import Head from "next/head";

const StickyNote = () => {
  return (
    <Box className={styles.aboutNotepad}>
      <Center>
        <Image
          className={styles.aboutBanner}
          height="40%"
          top="-10%"
          right="-10%"
          position="absolute"
          src="/img/about/banner_mask.png"
        />
        <Text
          fontSize={{ sm: "15px", lg: "20px" }}
          px="3%"
          py="2%"
          top="0"
          zIndex={1}>
          Innovate, reimagine, and shape the future this year at HackGT X:
          Journal of Memories from October 13th - 15th! The tenth iteration of
          our flagship hackathon is bringing a hack to remember to all our
          HackGT creators.
          <br />
          <br />
          This year&apos;s event will be back to an in-person experience, so get
          ready for a weekend packed with action! Buff your hacking stats, make
          incredible team-ups, and build your community among the 1,500+
          passionate hackers we invite each year.
        </Text>
      </Center>
    </Box>
  );
};

const RegisterNow = () => {
  return (
    <Box
      className={styles.registerNow}
      paddingTop={"120px"}
      display="grid"
      justifyContent="center"
      alignContent="center"
    >
      <Image
        className={styles.registrationGrid}
        src={"/img/about/registration_grid.png"}
        gridArea="1 / 1"
        textAlign="center"
      />
      <Heading
        as={"h4"}
        gridArea="1 / 1"
        textAlign="center"
        alignSelf="center"
        borderRadius="10px">
        Registration is <br /> now open!
      </Heading>
    </Box>
  );
};

const About = () => {
  return (
    <Box
      className={styles.about}
      my={24}
      display="flex"
      justifyContent={"center"}
      alignItems="center">
      <VStack className={styles.aboutStack} spacing={8}>
        <HStack>
          <Heading fontSize={"60px"}>About</Heading>
          <Image
            className={styles.aboutEllipse}
            src={"/img/about/about-ellipse.png"}
            width={"30%"}
            position="absolute"
            left={"-8%"}
            minWidth={"20%"}
          />
        </HStack>
        <StickyNote />
        <RegisterNow />
      </VStack>
    </Box>
  );
};

export default About;
