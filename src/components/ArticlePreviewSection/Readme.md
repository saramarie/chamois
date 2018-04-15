```js
const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const articlePreviews = [
  {
    id: 1,
    datePublished: '10.10.2017',
    url: '#article',
    title: 'First Article',
    text: loremIpsum,
  },
  {
    id: 2,
    datePublished: '10.11.2017',
    url: '#article',
    title: 'Second Article',
    text: loremIpsum,
  },
  {
    id: 3,
    datePublished: '10.12.2017',
    url: '#article',
    title: 'Third Article',
    text: loremIpsum,
  },
];

<ArticlePreviewSection articlePreviews={articlePreviews} />;
```
