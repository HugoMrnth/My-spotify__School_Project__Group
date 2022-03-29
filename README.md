Use of my spotify : 

Create a new database "spotify" (the sql file doesnt creat one) and add the my_spotify_db.sql file to mySql (or other)
Put your sql ID's in the API/config.php file 

Run the following docker command  in the API directory : 

```
docker build -t spotify_api . && docker run --rm -p 80:80 -v $PWD:/var/www/html spotify_api
```
In the my_spotify folder (where the json packages are), run : ``` npm install ``` and then ``` npm run start ``` 
React shoud lunch automatically the index into your browser . 



FRENCH ------


Utilisation de my spotify :

Créer une nouvelle database "spotify" (le fichier sql n'en créé pas) Entrez le fichier my_spotify_db.sql dans votre gestionnaire de db

rentrez vos identifiant de connexion à la db dans le fichier API/config.php

Dans le terminal à l'interieur du dossier API lancer la commande suivante : docker build -t spotify_api . && docker run --rm -p 80:80 -v $PWD:/var/www/html spotify_api

Danns le dossier my_spotify (où se trouve les packages json ), lancer la commande : npm install Puis la commande : npm run start

React devrait lancer l'index automatiquement dans le navigateur et vous pouvez à présent naviguer dans le site.
