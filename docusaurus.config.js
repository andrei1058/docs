// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'andrei1058 wiki',
  tagline: 'Dinosaurs are cool',
  url: 'https://wiki.andrei1058.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'uploads/andrei1058.jpg',
  organizationName: 'andrei1058', // Usually your GitHub org/user name.
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
        title: 'andrei1058 wiki',
        logo: {
          alt: 'andrei1058',
          src: 'uploads/andrei1058.jpg',
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      "colorMode": {
        "defaultMode": "dark",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        prism: {
          additionalLanguages: ['java', 'yaml']
        },

      },
    }),
};

module.exports = config;
