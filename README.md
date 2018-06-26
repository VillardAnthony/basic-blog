Dump de la base de données dans le fichier 
			dump/base.

Création de la BDD :

	Commande a effectuer dans le shell :
		-service mongod start
		-mongo
		-use base
		-load("script.js")   --si on est positioné dans le répertoire du projet
	
Pour finir il faut lancer le serveur en se positionant dans le repértoire du projet et écrire :
		- node server.js

