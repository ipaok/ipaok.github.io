// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    'church-center',
    'email-guide',
    'flc-livestream',
    {
      type: 'category',
      label: 'FLC ProPresenter Guide',
      items: [
        'flc-propresenter',
        'adding-songs-propresenter',
        'pp7-bibleverses',
      ],
    },
    'flc-sound',
    'graphic-design',
    'networking',
    'photography',
    'printing',
    'worship-checklist',
  ],
};

module.exports = sidebars;
