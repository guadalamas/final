var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: '/admin/layout',
        persona: req.session.nombre,
        novedades
    });
});


router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;


    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
    
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
})

router.post('/agregar', async (req, res, next) => {
    try {

        console.log(req.body);

        if (req.body.titulo !="" && req.body.subtitulo !="" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar',{
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo la novedad'
        })
    }
})


router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    console.log(id)
    
    var novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    });
});

module.exports = router;
