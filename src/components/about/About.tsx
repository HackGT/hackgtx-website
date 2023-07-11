import { Text, Image, Center, VStack } from "@chakra-ui/react";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.maskCircle}
        alt="mask_circle"
        src="svg/about/mask_group.svg"
      />
      <Text className={styles.title}> about</Text>
      {/* <Image
        className={styles.banner_mask}
        alt="banner_mask"
        src="svg/about/banner_mask.svg"
      /> */}
      <Image
        className={styles.maskContentBox}
        alt="mask_content_box"
        src="svg/about/mask_content_box.svg"
      />
      <Text className={styles.bodyText}>
        Innovate, reimagine, and shape the future this year at HackGT X: Journal
        of Memories from October 13th - 15th! The tenth iteration of our
        flagship hackathon is bringing a hack to remember to all our HackGT
        creators. This year's event will be back to an in-person experience, so
        get ready for a weekend packed with action! Buff your hacking stats,
        make incredible team-ups, and build your community among the 1,500+
        passionate hackers we invite each year.
      </Text>
      <Image
        className={styles.registration_panel}
        alt="registration_panel"
        src="svg/about/registration_panel.svg"
      />
      <Text className={styles.registrationText}>
        Registration will open on
        <br />
        July 17th, 2023
      </Text>
    </div>
  );
};

export default About;
