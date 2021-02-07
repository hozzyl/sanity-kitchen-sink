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
                  buildHookId: '60203a855f91d49a4f7bccc4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-z61vaae9',
                  apiId: 'd09228f2-6788-46da-96c6-a389f8783ef9'
                },
                {
                  buildHookId: '60203a85bcf6cd302a01bc82',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-h42aupfz',
                  apiId: '5d0d79e5-6106-441f-8329-33602ac8e834'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hozzyl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-h42aupfz.netlify.app', category: 'apps'}
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
