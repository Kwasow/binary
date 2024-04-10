import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </p>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <div className={clsx(styles.landingContainer)}>
      <Heading as="h1">
        Cześć!
      </Heading>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie malesuada nulla. Morbi nec luctus orci. Aenean congue vel nunc id vestibulum. In mattis semper metus in dictum. Sed tristique enim eget ipsum porta varius. Sed lectus eros, lacinia eget dignissim vitae, congue quis lectus. Maecenas sit amet bibendum arcu, vel vehicula lorem. Praesent ac erat sollicitudin, sollicitudin nulla gravida, rutrum lectus. Duis hendrerit aliquam lacinia. Cras sodales turpis a lacus accumsan, eu volutpat nunc consectetur.
      </p>
    </div>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <HomepageContent />
    </Layout>
  );
}
