import Image from "next/image";
import styles from "./TracksChallenges.module.scss";
import { Alert, AlertIcon, Box, VStack, Text, Heading } from "@chakra-ui/react";
import { tracks } from "./tracks.json";
import airplane from "../../../public/img/tracks/airplane.svg";

interface trackCardProps {
  trackName: string;
  trackDescription: string;
}

const TrackCard = (props: trackCardProps) => {
  return (
    <Box px={4} py={20}>
      <VStack className={styles.trackCard}>
        <Box
          width={"100%"}
          textAlign="center"
          background="#F8F4B3"
          border="1px black solid"
          boxShadow="4px 4px 4px rgba(0, 0, 0, 0.5)">
          <Text fontFamily={"Scrapbook"} fontSize="20px">
            {props.trackName}
          </Text>
        </Box>
        <Text textAlign="center" fontSize="20px">
          {props.trackDescription}
        </Text>
      </VStack>
    </Box>
  );
};

const TracksChallenges = () => {
  return (
    <>
      <Heading fontSize={"60px"} textAlign="center">
        Tracks and Challenges
      </Heading>
      <Box className={styles.tracksChallenges} display="flex">
        <Box flexDirection="column">
          <TrackCard
            trackName={tracks[0].trackName}
            trackDescription={tracks[0].trackDescription}
          />
          <TrackCard
            trackName={tracks[1].trackName}
            trackDescription={tracks[1].trackDescription}
          />
        </Box>
        <Box flexDirection="column">
          <Image src={airplane} />
          <TrackCard
            trackName={tracks[2].trackName}
            trackDescription={tracks[2].trackDescription}
          />
        </Box>
        <Box flexDirection="column">
          <TrackCard
            trackName={tracks[3].trackName}
            trackDescription={tracks[3].trackDescription}
          />
          <TrackCard
            trackName={tracks[4].trackName}
            trackDescription={tracks[4].trackDescription}
          />
        </Box>
      </Box>
    </>
  );
};

export default TracksChallenges;
