import React from "react";
import styles from "./Articles.module.css";
import currency from "../../images/image-currency.jpg";
import confetti from "../../images/image-confetti.jpg";
import plane from "../../images/image-plane.jpg";
import restaurant from "../../images/image-restaurant.jpg";
import Text from "../UI/Text/Text";
import Heading from "../UI/Heading/Heading";
import Grid from "../UI/Grid/Grid";

function Articles() {
  return (
    <section className={styles.articles}>
      <div>
        <Heading size="two">Latest Articles</Heading>
        <Grid>
          <div className={styles["article-card"]}>
            <img src={currency} alt="Currency" />
            <aside>
              <span>By Claire Robinson</span>
              <Heading size="three">
                Receive money in any currency with no fees
              </Heading>
              <Text>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </Text>
            </aside>
          </div>
          <div className={styles["article-card"]}>
            <img src={restaurant} alt="Restaurant" />
            <aside>
              <span>By Wilson Hutton</span>
              <Heading size="three">
                Treat yourself without worrying about money
              </Heading>
              <Text>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </Text>
            </aside>
          </div>
          <div className={styles["article-card"]}>
            <img src={plane} alt="Plane" />
            <aside>
              <span>By Wilson Hutton</span>
              <Heading size="three">
                Take your Easybank card wherever you go
              </Heading>
              <Text>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </Text>
            </aside>
          </div>
          <div className={styles["article-card"]}>
            <img src={confetti} alt="Confetti" />
            <aside>
              <span>By Claire Robinson</span>
              <Heading size="three">
                Our invite-only Beta accounts are now live!
              </Heading>
              <Text>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </Text>
            </aside>
          </div>
        </Grid>
      </div>
    </section>
  );
}

export default Articles;
