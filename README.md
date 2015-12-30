# repo-collections


A Simple static site for collecting my interesting git repos 
It is simple to update, only add follow template to [repo.js](asset/js/repo.js):

```
{
  author: 'typicode',
  category: 'mockserver',
  language: 'Javascript',
  location: 'https://github.com/typicode/json-server.git',
  description: 'Mock Server for quick backend prototyping and mocking '
}
```

## where to add

add code here:

```
 data: {
       searchQuery: '',
       columns: ['location','author','category','language','description'],
       repos: [<append template here>]
       }

```