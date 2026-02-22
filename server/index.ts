import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'
import { fileURLToPath } from 'url'
import elementsRouter from './routes/elements.js'
import skatersRouter from './routes/skaters.js'
import competitionsRouter, { seasonsRouter } from './routes/competitions.js'
import scoringRouter from './routes/scoring.js'
import searchRouter from './routes/search.js'
import newsRouter from './routes/news.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT ?? 3001

if (process.env.NODE_ENV === 'production') {
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
          fontSrc: ["'self'", "https://fonts.gstatic.com"],
          imgSrc: ["'self'", "data:", "https:"],
          frameSrc: ["'self'", "https://www.youtube.com", "https://youtube.com"],
          connectSrc: ["'self'"],
        },
      },
    })
  )
} else {
  app.use(cors())
}
app.use(express.json())

// API routes
app.use('/api/elements', elementsRouter)
app.use('/api/skaters', skatersRouter)
app.use('/api/competitions', competitionsRouter)
app.use('/api/seasons', seasonsRouter)
app.use('/api/scoring', scoringRouter)
app.use('/api/search', searchRouter)
app.use('/api/news', newsRouter)

// Production: serve built frontend
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'dist')
  app.use(express.static(distPath))
  app.use((_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`BladeTracker API running on http://localhost:${PORT}`)
})
