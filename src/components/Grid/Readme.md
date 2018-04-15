```js
const itemStyle = {
  background: '#eee',
  width: '100%',
  height: '2rem',
  border: '1px solid #999',
};

<Grid gutters>
  <Grid item largeCols="3" smallCols="6">
    <div style={itemStyle} />
  </Grid>
  <Grid item largeCols="9" smallCols="6">
    <div style={itemStyle} />
  </Grid>
  <Grid item largeCols="6" smallCols="6">
    <div style={itemStyle} />
  </Grid>
  <Grid item largeCols="6" smallCols="6">
    <div style={itemStyle} />
  </Grid>
</Grid>;
```
