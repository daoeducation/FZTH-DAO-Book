/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'FZTH - Diseño de Ecosistemas',
    tagline: 'Diseño de Ecosystemas y DAOs',
    url: 'https://daoeducation.github.io',
    baseUrl: '/FZTH-DAO-Book/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'daoeducation', // Usually your GitHub org/user name.
    projectName: 'FZTH-DAO-Book', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'FZTH',
            logo: {
                alt: 'DAOE Logo',
                src: 'img/logo.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'DAOs',
                },
                {
                    href: 'https://github.com/daoeducation/FZTH-DAO-Book',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Tutorial',
                        to: '/docs/intro',
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Discord',
                            href: 'https://discord.gg/K4veWYkTkY',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/EducationDAO',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/daoeducation',
                    }, ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} DAO Education. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/daoeducation/FZTH-DAO-Book',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};