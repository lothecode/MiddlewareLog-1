# A Middleware to log time-stamps, HTTP method, and path
This is a middleware to log date, time, HTTP method and url in Node.js/Express environment

## Usage
### Just put this part in the app.js before routes
```javascript
// -- A Middleware to log date, time, HTTP method, and path
app.use((req, res, next) => {
  const today = new Date
  const dataValues = [
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
  ]
  const timeValues = [
    today.getHours(),
    today.getMinutes(),
    today.getSeconds(),
  ]
  const listdate = dataValues.map(d => {
    if (d < 10) {
      d = `0${d}`
    }
    return d
  })
  const listtime = timeValues.map(t => {
    if (t < 10) {
      t = `0${t}`
    }
    return t
  })
  console.log(listdate.join('-'), listtime.join(':'), '|', req.method, 'from', req.path)
  return next()
})
// -- middleware end
```

### You can see log from terminal:
> 2020-03-26 09:20:03 | GET from /new

## Environment
### Make sure to install Express.js 