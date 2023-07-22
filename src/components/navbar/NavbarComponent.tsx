import { Link, Center, Text } from "@chakra-ui/react";

import styles from "./Navbar.module.scss";

interface NavbarComponentProps {
  name: string;
  key: null;
  anchorLink: string;
  bgColor: string;
}

const NavbarComponent = (ncp: NavbarComponentProps) => {
  return (
    <div>
      <Link
        draggable="false"
        style={{ textDecoration: "none" }}
        href={ncp.anchorLink}
        className={styles.component}
      >
          <Center bg={ncp.bgColor} className={styles.ellipse}>
            <div className={styles.ellipseText}>{ncp.name}</div>
          </Center>
      </Link>
    </div>
  );
};

export default NavbarComponent;
