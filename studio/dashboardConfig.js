export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d2809faca12fe012f8b5a71',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gf26qg8t',
                  apiId: '21198870-a57f-4ddd-96d1-7b33df6a6c4f'
                },
                {
                  buildHookId: '5d2809fa812f85fcfa51b740',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yzxu54jb',
                  apiId: '8c77aa08-bc09-469a-b4bf-b1bbf39b4555'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gurdasnijor/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yzxu54jb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
