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
  },
  {
    id: 3,
    value: 'blue',
    label: 'Blue',
  },
];

<SelectField
  id="color_ex1"
  label="Color Options"
  options={options}
  value="green"
/>;
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
  },
  {
    id: 3,
    value: 'blue',
    label: 'Blue',
  },
];

<SelectField
  label="Color Options"
  id="color_ex3"
  options={options}
  error="There is an error"
/>;
```
