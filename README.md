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

#### 4. Accéder à l'application

L'application est accessible à l'adresse suivante : [http://localhost:3000](http://localhost:3000)

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

## Auteurs

-   **[Clément FAVAREL](https://github.com/clementfavarel)**

## License

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
