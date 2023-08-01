import {
  Text,
  Image,
  Center,
  Stack,
  Box,
  Heading,
  VStack,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  Link,
  AlertDescription,
} from "@chakra-ui/react";
import styles from "./About.module.scss";
import NextImage from "next/image";
import Head from "next/head";

const StickyNote = () => {
  return (
    <Box className={styles.aboutNotepad} width="90%">
      <Center>
        <Text
          className={styles.aboutNotepadText}
          fontSize={{ sm: "15px", lg: "20px" }}
          px="3%"
          py="2%"
          top="0"
          zIndex={1}>
          Innovate, reimagine, and shape the future this year at HackGT X:
          Journal of Memories from October 13th - 15th! The tenth iteration of
          our flagship hackathon is bringing a hack to remember to all
          brainstormers, creators, and makers.
          <br /> <br />
          Each year, HackGT welcomes over 1500+ hackers from around the world to
          solve novel challenges, win exciting prizes, and meet loads of new
          friends! This event is open to everyone and is an opportunity for
          students of all backgrounds, skill levels, and experiences to innovate
          and showcase their ideas. HackGT brings you an action-packed,
          memorable weekend filled with networking opportunities,
          community-building activities, and aesthetic swag!
          <br /> <br />
          <Text fontWeight={800}>Travel Reimbursements</Text>
          We send buses to schools and provide travel reimbursements! Check out
          our{" "}
          <Link
            fontWeight="bold"
            href="https://hexlabs.notion.site/HackGT-X-Travel-Assistance-fcabb1567680459c893ecb245fe6e8a7?pvs=4">
            travel reimbursement page
          </Link>{" "}
          for more information and make sure to apply before August 19th!
        </Text>
      </Center>
    </Box>
  );
};

const RegisterNow = () => {
  return (
    <Box
      className={styles.registerNow}
      display="grid"
      justifyContent="center"
      alignContent="center">
      <Image
        className={styles.registrationGrid}
        src={"/img/about/registration_grid.png"}
        gridArea="1 / 1"
        textAlign="center"
        alt="Grid box"
      />
      <Heading
        className={styles.registerNowText}
        fontSize={{ sm: "18px", lg: "30px" }}
        gridArea="1 / 1"
        textAlign="center"
        alignSelf="center">
        Registration is now open until September 9th <br />
        (August 19th for travel reimbursement)!
      </Heading>
    </Box>
  );
};

const About = () => {
  return (
    <Box
      className={styles.about}
      display="flex"
      justifyContent={"center"}
      alignItems="center">
      <VStack className={styles.aboutStack} spacing={8}>
        <HStack py="8%">
          <Heading fontSize={{ base: "35px", lg: "60px" }}>About</Heading>
          <Image
            className={styles.aboutEllipse}
            src={"/img/about/about-ellipse.png"}
            width={"30%"}
            position="absolute"
            left={"-8%"}
            alt="Ellipse"
          />
        </HStack>
        <StickyNote />
        <RegisterNow />
        <Alert className={styles.alert} width="80%">
          <AlertIcon />
          <AlertDescription fontSize={{ base: "10px", lg: "20px" }}>
            Participants will only be able to submit their project to ONE of the
            five tracks. In addition, each track will have the option to be
            submitted as either emerging or advanced. You don&apos;t need to
            have any experience to join in! <br />
            <br />
            New, beginning hackers can submit to emerging levels for a more
            approachable, beginner-friendly experience enriched with workshops
            and project support, while more seasoned hackers can throw their hat
            in the ring for a higher stakes pool of competition! We&apos;re here
            to meet you on your hacking journey at any level!
          </AlertDescription>
        </Alert>
        <br />
      </VStack>
    </Box>
  );
};

export default About;
