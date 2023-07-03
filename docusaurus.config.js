// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Andrei1058 Wiki',
  tagline: 'Find anykind of information about BedWars1058 plugin',
  url: 'https://wiki.andrei1058.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'uploads/bedwars1058.png',
  organizationName: 'andrei1058.dev', // Usually your GitHub org/username.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/andrei1058/docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/andrei1058/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Andrei1058 Wiki',
        logo: {
          alt: 'andrei1058',
          src: 'uploads/bedwars1058.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'BedWars1058/home',
            position: 'left',
            label: 'BedWars1058',
          },
          {
            type: 'doc',
            docId: 'BedWarsProxy/getting-started',
            position: 'left',
            label: 'BedWarsProxy',
          },
          {
            href: 'https://github.com/andrei1058',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'BedWars1058',
                to: '/docs/BedWars1058',
              },
              {
                label: 'BedWarsProxy',
                to: '/docs/BedWarsProxy',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/XdJfN2X',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/andrei1058',
              },
              {
                label: 'Maven',
                href: 'https://wiki.andrei1058.dev/docs/BedWars1058/developers/maven',
              },
              {
                label: 'Javadocs',
                href: 'https://javadocs.andrei1058.dev/BedWars1058/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Andrei1058.dev | All rights reserved.`,
      },
      "colorMode": {
        "defaultMode": "dark",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'yaml']

      },
    }),
};

module.exports = config;
