

const DATA = [
    {
        id: 1001,
        label: 'Knowlege BAse Art',
        link: 'https://www.knowledgebaseart.com/',
        children:[ {
            id: 10011,
            label: 'Article: CSS Tips',
            link: 'https://www.knowledgebaseart.com/css-tips',
            children: []
          },
          {
            id: 10012,
            label: 'Article: JS Patterns',
            link: 'https://www.knowledgebaseart.com/js-patterns',
            children: []
          }]
    },
    {
        id: 201,
        label: 'DEV TOOLS',
        link: 'https://www.knowledgebaseart.com/',
        children: [
            {
              id: 4011,
              label: 'React',
              link: 'https://www.knowledgebaseart.com/frontend-frameworks/react',
              children: [
                {
                  id: 40111,
                  label: 'Hooks Deep Dive',
                  link: 'https://www.knowledgebaseart.com/frontend-frameworks/react/hooks',
                  children: []
                }
              ]
            },
            {
              id: 4012,
              label: 'Vue',
              link: 'https://www.knowledgebaseart.com/frontend-frameworks/vue',
              children: []
            }
          ]
    }
]

export default DATA;