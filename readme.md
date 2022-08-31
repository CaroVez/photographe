
# ÉVALUATION D’ENTRAÎNEMENT EN COURS DE FORMATION : Développer la partie front-end d’une application web

Dans le cadre de ma formation, des évaluations d’entraînements sont disponibles pour notre pratique, dont celle-ci. Concevoir un site web en « mobile first » pour un photographe amateur qui désire avoir un portfolio en ligne et ainsi attirer de la clientèle. Le photographe doit pouvoir modifier le contenu du site à l’aide d’un système de gestion de contenu (CMS). Le client nous a fourni son logo, ainsi que l’arborescence de son site.


## Déploiement en local

Cloner le projet

```bash
  git clone https://github.com/CaroVez/photographe.git
```

Se déplacer dans le répertoire du projet

```bash
  cd photographe
```

Installer les dépendances

```bash
  npm install -g @11ty/eleventy
```

Démarrer le serveur

```bash
  eleventy --serve
```


## Déploiement en ligne à l'aide de Netlify

Sur le site web de Netlify, importer le projet via GitHub.

Configurer le deploiement avec ces paramètres :

#### Basic build settings

- Build command: eleventy
- Publish directory: public
## Liens

- [Netlify](https://app.netlify.com/)
- [Forestry](https://app.forestry.io/)
- [11ty](https://www.11ty.dev/)
 

