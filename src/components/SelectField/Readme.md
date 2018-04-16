```js
const options = [
  {
    id: 1,
    value: 'red',
    label: 'Red',
  },
  {
    id: 2,
    value: 'green',
    label: 'Green',
    selected: true,
  },
  {
    id: 3,
    value: 'blue',
    label: 'Blue',
  },
];

<SelectField label="Color Options" options={options} />;
```

```js
const options = [
  {
    id: 1,
    value: 'red',
    label: 'Red',
  },
  {
    id: 2,
    value: 'green',
    label: 'Green',
    selected: true,
  },
  {
    id: 3,
    value: 'blue',
    label: 'Blue',
  },
];

<SelectField
  label="Color Options"
  options={options}
  error="There is an error"
/>;
```
