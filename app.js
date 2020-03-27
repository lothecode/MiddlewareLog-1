const express = require('express')
const app = express()
const port = 3000

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

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})