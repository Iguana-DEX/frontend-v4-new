import React from "react";
import useMatchBreakpoints from "../../../contexts/MatchBreakpoints/useMatchBreakpoints";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Link from "../../Link/Link";
import { socials } from "../config";
import styles from "./styles.module.css";

const SocialLinks: React.FC<React.PropsWithChildren<FlexProps>> = ({ ...props }) => {
  const { isMobile } = useMatchBreakpoints();

  return (
    <Flex {...props} data-theme="dark">
      {socials.map((social, index) => {
        const iconProps = {
          width: "20px",
          color: "textSubtle",
          style: { cursor: "pointer" },
        };
        const Icon = social.icon;
        const mr = index < socials.length - 1 ? (isMobile ? "16px" : "24px") : 0;

        return (
          <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
            <Icon {...iconProps} className={styles.socialLinks} />
          </Link>
        );
      })}
    </Flex>
  );
};

export default React.memo(SocialLinks, () => true);
