import express from 'express'
import type { Request, Response } from 'express'

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/', (req: Request, res: Response) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Aplikasi berjalan di: http://localhost:${port}`)
})
