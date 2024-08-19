var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');
var novedadesModel = require('../../models/novedadesModel');

var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);


router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                widht: 50,
                height: 50,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    })

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

        var img_id = '';
        
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        console.log(req.body);

        if (req.body.titulo !="" && req.body.subtitulo !="" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad({
                ...req.body, 
                img_id
            });
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
