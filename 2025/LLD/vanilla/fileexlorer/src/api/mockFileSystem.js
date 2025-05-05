export function fetchFileSystem() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: '/',
          type: 'directory',
          children: [
            {
              name: 'src',
              type: 'directory',
              children: [
                { name: 'index.js', type: 'file' },
                { name: 'App.js', type: 'file' }
              ]
            },
            { name: 'package.json', type: 'file' },
            { name: 'README.md', type: 'file' }
          ]
        });
      }, 50);
    });
  }