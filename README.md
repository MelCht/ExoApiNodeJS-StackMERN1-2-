# ExoApiNodeJS-StackMERN1-2-

NodeJs / Express

Le but sera de créer une app NodeJs from scratch.

L'app aura:

Une route GET qui renvoie tous les users
Une route GET qui renvoie un user
Une route POST qui modifiera un user.
Une route DELETE qui va supprimer un user.
Nous n'utiliserons pas de base de donnée, un objet Users fera guise de BDD. L'objet Users est fourni dans le fichier users.js de ce dossier. Vous allez pouvoir y arriver step by step, une chose après l'autre. Google est votre ami, vos voisins aussi ! Lors d'installation de package, utilisez --save pour garder la trace de vos package installé. Vous pouvez tout coder dans app.js, mais si possible split votre code dans plusieurs fichiers si vous en avez l'envie. Le tableau users doit être importé dans app.js, pas copié-coller.

Steps
Créez un nouveau répertoire pour le projet qui se nomme "api-users".
Executer la commande npm pour initier le projet (init) dans le dossier "api-users".
Vous allez devoir lancer une commande npm pour installé les packages présents dans le fichier package.json.
Installer le package npm: "Express".
Créer un fichier app.js qui contiendra le code pour run votre serveur.
Le lancement du serveur devra aficher Express is running on port: numeroDuPort. (Encore une fois, Google et votre voisin sont vos amis, Bon chance !). Il y a beaucoup de tuto à disposition pour trouver le code qui lance un serveur express.
Créer un route GET /users qui renvoie tous les users du tableau users.
Créer une route GET /user/:id qui renvoie le user qui posséde l'id passé en paramètre.
Créer une route POST /users qui reçoit dans son body l'objet ci-dessous, qui l'ajoute au tableau users et renvoie le nouveau tableau. L'id du nouvel entrant devra être l'id du dernier user du tableau users + 1. N'ajouter pas l'id en dur, c'est moins drôle. L'objet à envoyer via le body: { name: 'Peach', age: 23, salary: 99000 }
Créer une route DELETE /users/:id qui supprime dans le tableau users, l'user avec l'id passé en paramètre de la requête, renvoyer ensuite le nouveau tableau.
Bonus:
Ajouter le tableau users via une base de donnée dans une table users
Ajouter un champs password à votre table users
Modifier vos routes pour utiliser votre BDD et non plus le tableau users
Faire une route POST sign-up qui servira de route d'inscription à un user. Le body devra contenir: name, age, salary, password Le password doit être crypté avant d'être enregistré dans la BDD (npm bcrypt) Le mot de passe doit faire minimum 8 caractères, 1 majuscule, 1 chiffre La route doit renvoyer une réponse 200 si tout c'est bien passé
Faire une route POST /login pour que l'user se connecte Le body devra contenir: name, password La route devra vérifier que le password ainsi que le name soit correctes Par correct on entend que name existe en BDD et que le mot de passe soit celui enregistré en BDD Si tout est ok, la route renvoie un token JWT (npm jsonwebtoken) valide 1h
