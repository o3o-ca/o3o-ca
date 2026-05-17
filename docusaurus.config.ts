import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {
  absoluteSiteUrl,
  policies,
  siteBaseUrl,
  siteDescription,
} from './src/data/siteData';

const config: Config = {
  title: 'O3O',
  tagline: '自由的中文互联网社区',
  titleDelimiter: ' | ',
  noIndex: false,
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: siteBaseUrl,
  baseUrl: '/',
  organizationName: 'o3o-ca',
  projectName: 'o3o-home',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon.ico',
        sizes: 'any',
      },
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    metadata: [
      {name: 'description', content: siteDescription},
      {
        name: 'keywords',
        content:
          'O3O, 中文互联网社区, 非盈利, 隐私, 去中心化, Fediverse, Mastodon, Matrix, WriteFreely, Searx, PrivateBin',
      },
      {property: 'og:title', content: 'O3O | 自由的中文互联网社区'},
      {property: 'og:description', content: siteDescription},
      {property: 'og:type', content: 'website'},
      {property: 'og:locale', content: 'zh_CN'},
      {property: 'og:url', content: absoluteSiteUrl('/')},
      {property: 'og:image', content: absoluteSiteUrl('/img/o3ofd_logo.png')},
      {property: 'og:image:alt', content: 'O3O logo'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'O3O | 自由的中文互联网社区'},
      {name: 'twitter:description', content: siteDescription},
      {
        name: 'twitter:image',
        content: absoluteSiteUrl('/img/o3ofd_logo.png'),
      },
    ],
    image: 'img/o3ofd_logo.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'O3O Logo',
        src: 'img/o3ofd_logo.png',
      },
      items: [
        {to: '/', label: '首页', position: 'left'},
        {to: '/docs/about', label: '关于我们', position: 'left'},
        {to: '/docs/community', label: '我们的社区', position: 'left'},
        {to: '/docs/tools', label: '工具', position: 'left'},
        {to: '/docs/donate', label: '捐助', position: 'left'},
        {
          href: policies.href,
          label: '社区规则与隐私政策',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'O3O',
          items: [
            {label: '关于我们', to: '/docs/about'},
            {label: '我们的社区', to: '/docs/community'},
            {label: '工具', to: '/docs/tools'},
            {label: '捐助', to: '/docs/donate'},
          ],
        },
        {
          title: '链接',
          items: [
            {
              label: '社区规则与隐私政策',
              href: policies.href,
            },
            {label: '联系', to: '/docs/contact'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} O3O`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
