var Area = require("./modelos/area");

//Obtiene todas las áreas
exports.getAreas = function(req, res){
    Area.find({}, function(err,areas){
        if(err)
            res.send(err);
        res.json(areas);
    });
};

//Adiciona un nuevo objeto a la base de datos
exports.setArea = function(req, res){
    Area.create( {Nombre     : req.body.Nombre,
                  Abreviatura: req.body.Abreviatura,
                  Estado     : req.body.Estado }, function(err, area) {
        if (err)
            res.send(err);

        Area.find( function(err,area){
            if(err)
                res.send(err);
            res.json(area);
        });
    });
};

//Modifica un objeto area de la base de datos
exports.updateArea = function(req, res){
    Area.updateOne( {_id: req.params.area_id},
        {$set: {Nombre     : req.body.Nombre,
                Abreviatura: req.body.Abreviatura,
                Estado     : req.body.Estado } }, function(err, area) {
        if (err)
            res.send(err);

        Area.find( function(err,area){
            if(err)
                res.send(err);
            res.json(area);
        });
    });
};

//Elimina un objeto Area de la base de datos
exports.removeArea = function(req, res){
    Area.deleteOne( {_id: req.params.area_id}, function(err, area) {
        if (err)
            res.send(err);

        Area.find( function(err,areas){
            if(err)
                res.send(err);
            res.json(areas);
        });
    });
};