import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import elementsRouter from './routes/elements.js'
import skatersRouter from './routes/skaters.js'
import competitionsRouter, { seasonsRouter } from './routes/competitions.js'
import scoringRouter from './routes/scoring.js'
import searchRouter from './routes/search.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT ?? 3001

app.use(cors())
app.use(express.json())

// API routes
app.use('/api/elements', elementsRouter)
app.use('/api/skaters', skatersRouter)
app.use('/api/competitions', competitionsRouter)
app.use('/api/seasons', seasonsRouter)
app.use('/api/scoring', scoringRouter)
app.use('/api/search', searchRouter)

// Production: serve built frontend
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'dist')
  app.use(express.static(distPath))
  app.use((_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`IceTracker API running on http://localhost:${PORT}`)
})
