const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['en', 'zh-cn'],
  },
  title: 'Zodea小屋',
  tagline: '',
  url: 'https://github.com/zodea.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zodea', // Usually your GitHub org/user name.
  projectName: 'zodea.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Zodea小屋',
      logo: {
        alt: 'Zodea小屋',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Blog', position: 'left' },
        { to: '/tags', label: '标签', position: 'left' },
        {
          href: 'https://github.com/zodea',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Blog',
              to: '/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zodea',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // algolia: {
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    //   // Optional: see doc section below
    //   contextualSearch: true,
    //   // Optional: see doc section below
    //   appId: 'YOUR_APP_ID',
    //   // Optional: Algolia search parameters
    //   searchParameters: {},
    //   //... other Algolia params
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          blogTitle: 'Zodea小屋',
          blogDescription: '发掘新兴技术',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
