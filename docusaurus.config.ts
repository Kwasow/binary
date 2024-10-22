import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import lightCodeTheme from './src/theme/CodeBlock/highlighting-light.js';
import darkCodeTheme from './src/theme/CodeBlock/highlighting-dark.js';
import { PrismTheme } from 'prism-react-renderer';

const siteName = 'Matura z Informatyki'

const config: Config = {
  title: siteName,
  tagline: 'Jak zdać i dostać się na studia',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kwasow.github.io',
  baseUrl: '/matura',

  // GitHub pages deployment config.
  organizationName: 'Kwasow',
  projectName: 'binary',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: false,
          editUrl: 'https://github.com/Kwasow/binary',
        },
        blog: false,
        theme: {
          customCss: './src/css/index.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: siteName,
      logo: {
        alt: `Logo serwisu ${siteName}`,
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Materiały',
        },
        {
          href: 'https://github.com/Kwasow/binary',
          position: 'right',
          className: 'header-github',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Karol Wąsowski, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme as PrismTheme,
      darkTheme: darkCodeTheme as PrismTheme,
      additionalLanguages: ["java", "bash"]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
