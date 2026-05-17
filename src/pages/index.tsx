import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {
  communities,
  donation,
  hero,
  missionValues,
  siteDescription,
  tools,
} from '@site/src/data/siteData';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteDescription}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <p className={styles.lead}>{hero.lead}</p>
            <p className={styles.englishLead}>{hero.englishLead}</p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/about">
                关于我们
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/community">
                我们的社区
              </Link>
            </div>
          </div>
          <div className={styles.heroLogo}>
            <img src="/img/o3ofd_logo.png" alt="O3O" />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Mission &amp; Values</p>
          </div>
          <div className={styles.valueGrid}>
            {missionValues.map((item) => (
              <article key={item.title} className={styles.valueCard}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>我们的社区</h2>
          </div>
          <div className={styles.cardGrid}>
            {communities.map((item) => (
              <article key={item.title} className={styles.infoCard}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.href}>访问入口</Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>工具</h2>
          </div>
          <div className={styles.cardGrid}>
            {tools.map((item) => (
              <article key={item.title} className={styles.infoCard}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.href}>访问入口</Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.donatePanel}>
            <h2>捐助</h2>
            <p>{donation.intro}</p>
            <Link className="button button--primary button--lg" to="/docs/donate">
              {donation.donationPortalLabel}
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
