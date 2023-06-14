import { Center, VStack, Text, Link, HStack, Image, Box } from "@chakra-ui/react";
import ImageWrapper from "../image/ImageWrapper";
import styles from "./Main.module.scss";

interface MainProps {
  toJump: string;
}

const Main = (mp: MainProps) => {
  return (
    <div className={styles.title_box}>
        <Center>
          <VStack className={styles.title_stack}>
            <Text className={styles.title}>HackGT X</Text>
            <Box>
              <Center className={styles.description}>
                <Text className={styles.motto}>A JOURNAL OF MEMORIES</Text>
              </Center>
            </Box>
            <Text className={styles.description}>October 13th to 15th</Text>
            <Center>
              <Link href="https://registration.hexlabs.org" target="_blank">
                {/* <Box className={styles.register_button}>
              <div className={styles.register_button_outer} />
              <div className={styles.register_button_inner} />
              <div className={styles.loading_bar_position}>
                <div className={styles.loading_bar_mask}>
                  <div className={styles.loading_bar} />
                </div>
              </div>
              <Center>
                <Text className={styles.register_button_text}>Register Now!</Text>
              </Center>
            </Box> */}
                <Center id={styles.register_button}>
                  {/* <ImageWrapper id={styles.register_button_outer} src="/img/main/blackBoxShadow.png" alt="register box shadow"></ImageWrapper>
            <ImageWrapper id={styles.register_button_inner} src="/img/main/blackBox.png" alt="register box"></ImageWrapper>
            <VStack  id={styles.register_stack}>
            <Text id={styles.register_button_text}>Register Now</Text>
            <ImageWrapper id={styles.loading_bar} src="/img/main/registerBar.png" alt="register bar"></ImageWrapper>
            </VStack> */}

                </Center>
              </Link>
            </Center>
          </VStack>
        </Center>
    </div>
  );
};

export default Main;
