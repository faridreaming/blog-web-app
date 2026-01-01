import express from 'express'
import type { Request, Response } from 'express'

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('./public'))

interface Post {
  id: string
  title: string
  content: string
}

const posts: Post[] = [
  {
    id: crypto.randomUUID.toString(),
    title: 'Apa Itu Emotional Quotient?',
    content:
      'Emotional Quotient (EQ) atau Kecerdasan Emosional adalah kemampuan seseorang untuk mengenali, memahami, mengelola, dan mengekspresikan emosi diri sendiri serta orang lain secara tepat, serta menggunakan emosi tersebut untuk membangun hubungan sosial yang baik, memotivasi diri, dan mengambil keputusan yang bijaksana, seringkali dianggap lebih penting untuk kesuksesan hidup dibandingkan IQ. ',
  },
]

app.get('/', (req: Request, res: Response) => {
  res.render('index', { posts })
})

app.listen(port, () => {
  console.log(`Aplikasi berjalan di: http://localhost:${port}`)
})
