const express = require('express') // import express
const app = express() // inisialisasi express app
const port = 3000 // tentukan port yang akan digunakan
const Route = require('./routes'); // import router

app.use(express.json()) // agar dapat membaca request body dalam format JSON 

app.use(Route) // gunakan router yang sudah didefinisikan

app.listen (port, () => {
  console.log(`Example app listening on port ${port}`) // jalankan server pada port tertentu
})