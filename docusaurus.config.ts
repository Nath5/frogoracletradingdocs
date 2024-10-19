import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const resolveGlob = require('resolve-glob');

const config: Config = {
  title: 'FrogOracle Trading',
  tagline: 'Take your trading to the next level!',
  favicon: 'img/frog_head2.svg',

  // Set the production url of your site here
  url: 'https://docs.frogoracletrading.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/frogoracledocumentation_test/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Nath5', // Usually your GitHub org/user name.
  projectName: 'frogoracletradingdocs', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  plugins: [require.resolve("docusaurus-plugin-image-zoom"), 'docusaurus-plugin-sass'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: resolveGlob.sync(['./src/css/**/*.scss', './src/components/**/*.scss'])
        },
        blog: false, // Optional: disable the blog plugin
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    defaultMode: 'dark',
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FrogOracle Trading Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/simplefrog.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          html: '<i class="fa fa-book"></i>&nbsp;&nbsp;&nbsp;Tutorial',

        },
        {
          href: 'https://www.frogoracletrading.com',
          position: 'left',
          'aria-label': 'FO Home',
          html: '<i class="fa fa-home"></i>&nbsp;&nbsp;&nbsp;FO Home',
        },
        {
          label: 'Discord',
          href: 'https://discord.gg/JqFqFtVK',
          position: 'right',
        },
        {
          label: 'X',
          href: 'https://x.com/thetradingfrog',
          position: 'right',

        },
        {
          label: 'Stocktwits',
          href: 'https://stocktwits.com/frogoracletrading',
          position: 'right',
        },
        {
          label: 'Reddit',
          href: 'https://www.reddit.com/r/frogoracletrading/',
          position: 'right',
        }

      ],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
    footer: {
      style: 'light',

      copyright: `Copyright © ${new Date().getFullYear()} FrogOracle Trading.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
