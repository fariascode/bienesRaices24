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