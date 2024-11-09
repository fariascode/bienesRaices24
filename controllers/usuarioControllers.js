import {check, validationResult} from 'express-validator'
import User from "../models/Usuario.js"

const formularioLogin = (req,res) => {
    res.render('auth/login', {  
        pagina: 'Entra a tu cuenta'
    })
}

const formularioRegistro = (req,res) => {
    res.render('auth/registro', {  
        pagina: 'Crear Cuenta'
    })
}

const register = async (req,res) => {
    // Validacion
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req)
    await check('email').isEmail().withMessage('Eso no parece un email').run(req)
    await check('password').isLength({min: 6}).withMessage('El password debe ser de almenos 6 caracteres').run(req)
    await check('repite_password').equals('password').withMessage('Los passwords no son iguales').run(req)

    let resultado = validationResult(req)

   
    //Verificar que el resutado este vacio
    if(!resultado.isEmpty()){
        //errores
        return res.render('auth/registro', {  
        pagina: 'Crear Cuenta',
        errores: resultado.array(), 
        usuario: {
            nombre: req.body.nombre,
            email: req.body.email
        }
        })
    }

    res.json()

    const user = await Usuario.create(req.body)
    res.json(user)
}

const formularioOlvidePassword = (req,res) => {
    res.render('auth/olvide-password', {  
        pagina: 'Recupera tu acceso a Bienes Raices'
    })
}



export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword,
    register
}