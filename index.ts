import express from 'express'
import type { Request, Response } from 'express'
import path from 'node:path'

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
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

const posts: Post[] = [
  {
    id: crypto.randomUUID(),
    title: 'Apa Itu Emotional Quotient?',
    content:
      'Emotional Quotient (EQ) atau Kecerdasan Emosional adalah kemampuan seseorang untuk mengenali, memahami, mengelola, dan mengekspresikan emosi diri sendiri serta orang lain secara tepat. Hal ini seringkali dianggap lebih penting untuk kesuksesan hidup dibandingkan IQ karena memengaruhi bagaimana kita membangun hubungan sosial dan mengambil keputusan.',
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Mengapa Menggunakan Bun?',
    content:
      'Bun adalah runtime JavaScript all-in-one yang sangat cepat. Didesain sebagai pengganti Node.js, Bun sudah menyertakan bundler, test runner, dan manajer paket yang kompatibel dengan npm. Keunggulan utamanya adalah kecepatan startup yang drastis dan performa runtime yang lebih efisien karena dibangun di atas JavaScriptCore.',
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Teknik Pomodoro untuk Produktivitas',
    content:
      'Teknik Pomodoro adalah metode manajemen waktu yang dikembangkan oleh Francesco Cirillo. Konsepnya sederhana: bagi waktu kerja menjadi interval fokus selama 25 menit, diikuti oleh istirahat singkat selama 5 menit. Metode ini efektif untuk mencegah kelelahan mental dan menjaga fokus tetap tajam dalam jangka waktu yang lama.',
    createdAt: new Date(),
  },
]

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

app.get('/post/:postId', (req: Request, res: Response) => {
  const postId = req.params.postId
  const post = posts.find((post) => post.id === postId)

  res.render('post', { post })
})

app.listen(port, () => {
  console.log(`Aplikasi berjalan di: http://localhost:${port}`)
})
