import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import HomepageButton from '../components/HomepageButton';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </p>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <HomepageButton title='Start' href='/matura/docs/category/wstep'/>
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
        Nazywam się Karol Wąsowski i jestem studentem informatyki na wydziale
        Matematyki, Informatyki i Mechaniki Uniwersytetu Warszawskiego, a od
        2024 roku zajmuję się również nauczaniem informatyki w Społecznym
        Liceum Ogólnokształcący "Startowa 4K" w Warszawie. Maturę (w tym z
        informatyki) zdawałem w 2021 roku w II Liceum Ogólnokształcącym im.
        Stefana Batorego w Warszawie.
      </p>

      <p>
        Zarówno przygotowując się do matury, jak i teraz przygotowując się do
        zajęć, zauważyłem, że brakuje materiałów, który w przystępny sposób
        tłumaczą cały materiał wymagany na maturze (wszyscy chyba dobrze wiemy,
        jak bardzo pomocny bywa słynny Matemaks). Na tej stronie znajdziesz
        informacje o moich doświadczeniach związanych z maturą, a także
        materiały pomocne w przygotowaniach do egzaminu, ale nie tylko. Znajdują
        się tu także tematy dodatkowe, które nie są wymagane na maturze, ale
        zainteresowały mnie albo moich uczniów.
      </p>

      <p>
        Zachęcam każdego, nie tylko osoby planujące zdawać Informatykę na
        maturze, kto chciałby nauczyć się programować, obsługiwać bazy danych,
        albo dowiedzieć się czegoś o działaniu komputerów i sieci komputerowych.
        Informatyka nie jest trudna, a sposób myślenia, który rozwija się
        podczas jej nauki, przydaje się w bardzo wielu dziedzinach życia.
      </p>

      <p>
        Powodzenia!
      </p>

      <img
        src="/matura/img/karol-wasowski.jpg"
        alt="Karol Wąsowski"
        className={clsx(styles.landingProfileImage)} />
      
      <p className={clsx(styles.landingProfileImageSubtext)}>
        <b>Karol Wąsowski</b><br/>
        (Kwasow)
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
