import express from 'express'
import type { Request, Response } from 'express'

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }))

interface Post {
  id: string
  title: string
  content: string
  createdAt: Date
}

const createPost = (title: string, content: string): Post => ({
  id: crypto.randomUUID(),
  title,
  content,
  createdAt: new Date(),
})

const posts: Post[] = []

app.get('/', (req: Request, res: Response) => {
  res.render('index', { posts })
})

app.post('/create', (req: Request, res: Response) => {
  const data = req.body
  const title = data.title
  const content = data.content

  posts.push(createPost(title, content))

  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Aplikasi berjalan di: http://localhost:${port}`)
})
