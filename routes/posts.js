module.exports = function(app) {
  app.get("/post/create", function(req, res) {
    res.send("XXX");
  });

  // si l'objet request est vide alors on créer un article et on met à jour la base de donnée
   app.post("/post/create", function(req, res) {
    res.send("XXX");
//test du contenu de l'objet request
    if(Object.keys(req.body).length === 0) 
    {
      res.render("createart.html");
    }
//si le formulaire est rempli et que des données sont présentes dans la request
    else
    {
      getNextSequence("articleid", function(err, result){
          
          app.db.collection('articles').insert({
      "_id": result,
      "date": new Date().toISOString(),
      "titre": req.body.titre,
      "auteur": req.body.auteur,
      "résumé": req.body.résumé,
      "contenu": req.body.contenu,
    });
      	});
      res.redirect("/");
    }
  });

  // On supprime les articles en les identifiants par leur id via une url en post
  app.post("/post/supprimer", function(req, res) {

    var id = parseInt(req.body.id, 10);
    var name = "_id";
    var query = {};

    query[name] = id;

    app.db.collection("articles").remove(query,function (error, results) {
      if (error) throw error;
      res.redirect("/");
    });
   });

  //On affiche un article via un get, on a pas besoin de transférer des données juste d'identifier l'article à afficher
   app.get("/post/:id", function(req, res) {
    res.send("XXX");

    var id = parseInt(req.params.id, 10);
    var name = "_id";
    var query = {};

    query[name] = id;

    app.db.collection("articles").find(query).toArray(function (error, results) {
      if (error) throw error;
      res.render("afficher", {"articles" : results});
    });
   });

  //fonction permettant de paramétrer l'id unique des articles automatiquement
 function getNextSequence(name, callback) {
    app.db.collection("counters").findAndModify( { _id: name }, null, { $inc: { sequence_value: 1 } }, function(err, result){
      callback(err, result.value.sequence_value);
      }
    );
  }
 }
