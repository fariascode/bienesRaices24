import express from 'express'
import { formularioLogin, formularioRegistro, formularioOlvidePassword, register } from '../controllers/usuarioControllers.js'

const router = express.Router()

router.get('/login', formularioLogin)
router.get('/registro', formularioRegistro)
router.post('/registro', register)
router.get('/olvide-password', formularioOlvidePassword)


export default router