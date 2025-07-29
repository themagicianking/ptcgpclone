import express from 'express'
import cors from 'cors'
import pkg from 'pg'
import 'dotenv/config'

const PORT = process.env.PORT
const APP = express()

APP.use(cors())

const { Pool } = pkg

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD
})

APP.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})