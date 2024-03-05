# ESS

## Description

Application web de creation et consultation de compte client construite dans le but de permettre aux bénéficiaires de l'épicerie sociale et solidaire de la FEDET de pouvoir créer et/ou consulter leur compte client en ligne afin d'obtenir un QR Code qui leur permettra de retirer leur panier alimentaire ainsi que d'avoir un apercu de leur consommation.

## Installation

### Prérequis

-   [Docker](https://www.docker.com/)
-   [Docker-compose](https://docs.docker.com/compose/)

### Installation

#### 1. Cloner le repository

```sh
git clone https://github.com/clementfavarel/ess.git
```

#### 2. Se rendre dans le dossier du projet

```sh
cd ess/src
```

#### 3. Lancer les containers

Premier lancement :

```sh
docker-compose up -d --build
```

Lancement classique :

```sh
docker-compose up -d
```

**N'oubliez-pas, le flag `--build` n'est nécessaire que lors de la première installation ou après une modification du fichier `Dockerfile`.**

#### 4. Initialiser la base de données

**Ajouter la base de données à pgAdmin**

Après vous être connecté avec vos identifiants du fichier .env, vous pouvez ajouter votre base de données à pgAdmin.

Sur la page welcome, cliquez sur "Add New Server" et dirigez-vous vers l'onglet "Connection".

Nommez votre connexion

Passez à l'onglet "Connexion" et ajoutez les détails de connexion suivants :

Nom d'hôte : "database" (ce serait normalement votre adresse IP de la base de données postgres - cependant, Docker peut résoudre cette adresse IP du conteneur par son nom)

Port : "5432"

Base de données de maintenance : $POSTGRES_DB (voir [.env](.env))

Nom d'utilisateur : entrez la valeur de $POSTGRES_USER (voir [.env](.env))

Mot de passe : entrez la valeur de $POSTGRES_PW (voir [.env](.env))

#### 5. Accéder à l'application

L'application est accessible à l'adresse suivante : [http://localhost:4200](http://localhost:4200)

## Utilisation

### Création d'un compte client

1. Accéder à l'application

2. Cliquer sur le bouton "Créer un compte"

3. Remplir le formulaire

4. Cliquer sur le bouton "Créer"

5. Un QR Code est généré, il est possible de le télécharger ou de le visualiser directement sur la page, au côté des informations du compte client.

### Consultation d'un compte client

1. Accéder à l'application

2. Cliquer sur le bouton "Connexion"

3. Remplir le formulaire

4. Cliquer sur le bouton "Connexion"

5. Le QR Code est affiché, il est possible de le télécharger ou de le visualiser directement sur la page, au côté des informations du compte client.

## Technologies

**PEAN Stack** :

-   [PotsgreSQL](https://www.postgresql.org/)
-   [Express](https://expressjs.com/)
-   [Angular](https://angular.io/)
-   [Node.js](https://nodejs.org/en/)

-   [Docker](https://www.docker.com/)
-   [Docker-compose](https://docs.docker.com/compose/)
-   [TypeScript](https://www.typescriptlang.org/)

## Structure du projet

```plaintext
src/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   └── ...
│   │   ├── assets/
│   │   ├── environments/
│   │   └── ...
│   ├── Dockerfile
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── ...
│   ├── Dockerfile
│   └── ...
│
├── database/
│   ├── init/
│   │   └── init.sql
│   ├── Dockerfile
│   └── ...
│
├── docker-compose.yml
├── .env
└── ...
```

Explication de la structure :

```yaml
frontend/: Contient la base de code frontend.
    src/: Contient le code source de l'application Angular.
        app/: Contient les composants Angular, les services, les modèles, etc.
        assets/: Contient des ressources statiques telles que des images, des polices, etc.
        environments/: Contient des fichiers de configuration spécifiques à l'environnement.
    Dockerfile: Définit l'image Docker pour le frontend.
backend/: Contient la base de code backend.
    src/: Contient le code source de l'application Node.js.
        controllers/: Contient les gestionnaires de routes.
        models/: Contient les modèles de base de données.
        routes/: Contient les routes de l'API.
    Dockerfile: Définit l'image Docker pour le backend.
database/: Contient la configuration de la base de données.
    init/: Contient des scripts d'initialisation pour la base de données.
        init.sql: Contient des commandes SQL pour initialiser le schéma de la base de données.
    Dockerfile: Définit l'image Docker pour la base de données.
compose.yml: Définit les services, les réseaux et les volumes pour les conteneurs Docker.
env files: Contiennent les variables d'environnement pour la configuration des services.
```

Cette structure sépare les composants frontend, backend et base de données, ce qui facilite la gestion et l'évolutivité de votre projet. Chaque composant a son propre Dockerfile pour définir son environnement, et le fichier docker-compose.yml orchestre ces services. De plus, le fichier .env stocke les variables de configuration spécifiques à l'environnement.

## Auteurs

-   **[Clément FAVAREL](https://github.com/clementfavarel)**

## License

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
