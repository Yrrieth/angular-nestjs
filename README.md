# Angular-nestjs

M1 Informatique

***
* Front : Angular
* Back : NestJS
* BDD : SQLite
***
C'est censé être un mini forum mais j'arrive pas.

Il n'y a qu'une page d'inscription et de connexion mais je n'arrive pas à les lier au back.

***
### Bcrypt
J'utilise [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/) pour hasher le mot de passe et ce n'est qu'aujourd'hui (06/01/2020) que j'ai compris que le salt était déjà compris dans le hash du mot de passe. Donc, ne pas prendre en compte que dans la table de la base de donnée ```database.sqlite```, il y a la valeur du saltRounds dans la colonne salt.
