import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig, } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{marginRight: "1rem"}}
          >
            Getting Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/faq"
          >
            FAQs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="Welcome to DarchLabs">
      <HomepageHeader />
      <main className="container">
        <section className={styles.features}>
          <div className={styles.featureItem}>
            <h2>📚 Libraries</h2>
            <p>Unlock the potential of DarchLabs with our robust libraries. Crafted for developers, by developers.</p>
          </div>
          <div className={styles.featureItem}>
            <h2>🚀 Our Mission</h2>
            <p>Revolutionizing the way developers interact with blockchain. Simplifying complexities, one line of code at a time.</p>
          </div>
          <div className={styles.featureItem}>
            <h2>🤝 Partnerships</h2>
            <p>Collaborating with the best to bring you unparalleled services and tools. Together, we're shaping the future.</p>
          </div>
        </section>
        <section className={styles.partners}>
          {/* <h2>Our Esteemed Partners</h2>
          <img className={styles.partnerLogo} src="https://docsearch.algolia.com/img/logos/typescriptlang.svg" alt="Partner 1" />
          <img className={styles.partnerLogo} src="https://dummyimage.com/640x360/fff/aaa" alt="Partner 2" />
          <img className={styles.partnerLogo} src="https://dummyimage.com/640x360/fff/aaa" alt="Partner 3" /> */}
        </section>
      </main>
    </Layout>
  );
}
