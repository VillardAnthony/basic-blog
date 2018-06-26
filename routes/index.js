var posts = require("./posts");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index");

	app.db.collection("articles").find({}, {"sort" : ['datefield', 'asc']} ).toArray(function (error, results) {
        if (error) throw error;
        
        res.render("index", {"articles" : results});
    });
  });

  // Register posts endpoint
  posts(app);
}
