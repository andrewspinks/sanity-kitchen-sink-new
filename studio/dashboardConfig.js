export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61316de6f374075a51fd2dfd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-new-studio-jjcfgk31',
                  apiId: 'd259d507-e88b-4ebf-9216-5db607fd69ec'
                },
                {
                  buildHookId: '61316de6dea4e266281978ae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-new-web-zpegouam',
                  apiId: '4a025fa1-0089-4ca8-b309-f9991e6d7b89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrewspinks/sanity-kitchen-sink-new',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-new-web-zpegouam.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
