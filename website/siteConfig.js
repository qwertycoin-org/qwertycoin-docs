/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Qwertycoin Docs', // Title for your website.
  tagline: 'Documentation for all things Qwertycoin',
  url: 'https://docs.qwertycoin.org', // Your website URL
  baseUrl: '/', // Base URL for your project
  // For github.io type URLs, you would set the url and baseUrl like:
  // url: 'https://qwertycoin-org.github.io',
  // baseUrl: '/qwertycoin-docs/',

  // Used for publishing and more
  projectName: 'qwertycoin-docs',
  organizationName: 'qwertycoin-org',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'Getting-Started', label: 'Getting Started'},
//    {doc: 'about/About-Qwertycoin', label: 'About'},
//    {doc: 'Frequently-Asked-Questions', label: 'FAQ'},
    {doc: 'guides/config/Config', label: 'Guides'},
    {doc: 'developer/Compiling-From-Source', label: 'For Developers'},
    { search: true }
  ],
// Search
  algolia: {
    apiKey: 'b2b606a17a4f4a6ad7649bc23ca412d6',
    indexName: 'qwertycoin',
    //algoliaOptions: {} // Optional, if provided by Algolia
  },

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/fav.png',
  favicon: 'img/fav.ico',

  /* Colors for website */
  // See Brand Manual for more info on these
  colors: {
    primaryColor: '#4229a7', // Qwertycoin blue
    secondaryColor: '#212721', // black
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Roboto",
      "Monsterrat"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // Links are rendered directly in Footer.js
  copyright1: `Copyright © ${new Date().getFullYear()} Qwertycoin`,
  copyright2: `Docs released under the`,
  copyright3: `Qwertycoin released under the`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  // Basically the ToC
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Collapse categories
  docsSideNavCollapsible: true,
  // custom url
  cname: 'https://docs.qwertycoin.org',
  // `.org/docs/guides` -> `.org/guides/`
  docsUrl: '',

  // Shows "jump to top" button
  scrollToTop: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // Sets default syntax highlighing to plaintext
  highlight: {
    defaultLang: 'plaintext',
    theme: 'atom-one-dark',
  },

  // For 'Edit' button in top right of each doc
  editUrl: "https://github.com/qwertycoin-org/qwertycoin-docs/edit/master/docs/",

  // For the "copy code" button in each long code block
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ]

};

module.exports = siteConfig;
