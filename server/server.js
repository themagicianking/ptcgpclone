import express from 'express'
import cors from 'cors'
import pkg from 'pg'
import 'dotenv/config'
import TCGdex from '@tcgdex/sdk'

const PORT = process.env.PORT
const APP = express()
// const TCGdex = require('@tcgdex/sdk').default
const tcgdex = new TCGdex('en')

APP.use(cors())

const { Pool } = pkg

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD
})

const TEST_PACK = [
  { number: 'one' },
  { number: 'two' },
  { number: 'three' },
  { number: 'four' },
  { number: 'five' }
]

APP.get('/set', async (req, res) => {
  const set = await tcgdex.fetch('sets', 'A1a')
  const cards = set.cards
  res.send(cards)
})

APP.get('/pack', async (req, res) => {
  res.send(TEST_PACK)
})

APP.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
