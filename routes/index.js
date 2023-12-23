const express = require('express');
const router = express.Router()

// Mengimport router produk dan produsen
const produkRouter = require('./produk.route')
const produsenRouter = require('./produsen.route')

// Menggunakan router produk dan tambahkan awalan "/produk"
router.use("/produk", produkRouter)

// Menggunakan router produsen dan tambahkan awalan "/produsen"
router.use("/produsen", produsenRouter)

// Mengexport router untuk digunakan di file lain
module.exports = router
