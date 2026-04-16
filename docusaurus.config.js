// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IPAOK Docs',
  tagline: 'Documentation and guides for IPA volunteers and staff',
  favicon: 'img/favicon.ico',

  url: 'https://docs.ipaok.org',
  baseUrl: '/',

  organizationName: 'ipaok',
  projectName: 'ipaok.github.io',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IPAOK Docs',
        items: [],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} International Pentecostal Assembly OKC`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  webpack: {
    configure: (webpackConfig) => {
      // Fix Progress Plugin compatibility issue
      const progressPluginIndex = webpackConfig.plugins.findIndex(
        (plugin) => plugin.constructor.name === 'ProgressPlugin'
      );

      if (progressPluginIndex !== -1) {
        // Remove the problematic Progress Plugin and add a compatible one
        webpackConfig.plugins.splice(progressPluginIndex, 1);
        const { ProgressPlugin } = require('webpack');
        webpackConfig.plugins.push(new ProgressPlugin());
      }

      return webpackConfig;
    },
  },
};

module.exports = config;
