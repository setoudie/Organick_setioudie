# Sections 📚

✔️ Résumé et À propos de moi  
✔️ Compétences  
✔️ Projets Open Source connectés avec Github  
✔️ Expérience  
✔️ Certifications 🏆  
✔️ Éducation  
✔️ Contactez-moi  

# Cloner et Utiliser 📋

- Ce site web est entièrement construit avec la bibliothèque `react-js` de `javascript`, d'où la nécessité d'installer `nodejs` et `npm`.  
- Une fois `nodejs` et `npm` installés avec succès, clonez le dépôt sur votre système local en exécutant la commande suivante :  
  ```bash
   git clone https://github.com/setoudie/etoudie.github.io.git
  ```
  Cela clonera l'intégralité du dépôt sur votre système.  
- Pour télécharger les dépendances nécessaires sur votre système, naviguez vers le répertoire où le dépôt cloné réside et exécutez la commande suivante :  
  ```node
  npm install
  ```
- Maintenant, le projet est prêt à être utilisé.  
- Vous pouvez le vérifier en exécutant `npm start`, cela ouvrira le site web localement sur votre navigateur.  

# Personnaliser pour créer votre propre portfolio ✏️

Dans ce projet, il y a essentiellement 4 éléments à modifier pour personnaliser le portfolio : **package.json**, **Informations personnelles**, **Informations Github** et **Logo d'accueil**.

### package.json

Ouvrez ce fichier, qui se trouve dans le répertoire principal cloné. Choisissez un "name" et remplacez le champ "homepage" par `https://<votre-nom-d’utilisateur-github>.github.io`. N'oubliez pas d'inclure `https://`, sinon les polices ne chargeront pas.

### Informations personnelles

Vous trouverez le fichier `src/portfolio.js`, qui contient toutes les informations complètes sur l'utilisateur. Ce fichier ressemble à ceci :

```javascript
// Page d'Accueil
const greeting = {
    ...
}

// Médias sociaux
const socialMediaLinks = {
    ...
}

...
```

Vous pouvez modifier les informations personnelles, l'expérience, l'éducation, les réseaux sociaux, les certifications, les blogs, les informations de contact, etc., dans `src/portfolio.js` afin qu'elles se reflètent directement sur votre site.

### Comment modifier les icônes sur la page d'accueil dans la section "Ce que je fais" ?

1. Cette section extrait ses données de `skills` dans le fichier `portfolio.js`.  
2. Visitez ce site : https://icon-sets.iconify.design/  
3. Recherchez l'icône du domaine de compétence que vous souhaitez ajouter.  
4. Sélectionnez l'icône de votre choix.  
5. Copiez le texte à côté de **Selected Icon** et remplacez-le par `fontAwesomeClassName` de la compétence choisie.  

#### Comment utiliser des images personnalisées à la place des icônes Iconify ?

1. Ajoutez un fichier image valide dans le dossier `public/skills`.  
2. Insérez le nom de l'image dans l'attribut `imageSrc` de la compétence concernée.  
3. Supprimez la propriété `fontAwesomeClassName` ou laissez-la vide, car elle a priorité sur `imageSrc`.  
4. Ajoutez des styles personnalisés à l'image `img` en utilisant la propriété `style`.  

### Informations Github

Vous trouverez le fichier `git_data_fetcher.mjs` dans le répertoire principal du dépôt. Ce fichier est utilisé pour extraire les données (Pull requests, Issues, Organisations, Projets épinglés, etc.) de votre compte Github.

Dans le projet, vous verrez un fichier `env.example`. Créez un nouveau fichier nommé `.env` et copiez-y le contenu de `env.example`. Dans ce fichier, vous verrez les variables d'environnement suivantes :

```javascript
GITHUB_TOKEN = votre_token;
GITHUB_USERNAME = votre_nom_utilisateur;
```

Vous pouvez obtenir un token Github comme décrit [ici](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). Donnez toutes les permissions lors de la génération du token. Ajoutez votre nom d'utilisateur Github et le token généré dans les variables `GITHUB_USERNAME` et `GITHUB_TOKEN` du fichier `.env`.

Ensuite, exécutez la commande suivante (assurez-vous d'avoir exécuté `npm install` avant) :

**Attention :** Traitez vos tokens comme des mots de passe et gardez-les secrets. Utilisez-les comme variables d'environnement plutôt que de les coder en dur dans vos programmes.

```node
node git_data_fetcher.mjs
```

Cela extraira toutes les données de votre Github et remplacera automatiquement les miennes par les vôtres.  
Chaque fois que vous souhaitez mettre à jour les informations liées à Github sur le site, vous devez exécuter cette commande.  

## Autres

- Vous devrez modifier le titre du site web et d'autres descriptions dans `public/index.html`.  
- Vous pouvez définir votre propre favicon dans le répertoire `public/icons`. Si vous n'avez pas de favicon, vous pouvez en générer un à partir de [Favicon Generator](https://www.favicon-generator.org/) et [Favicon IO](https://favicon.io/).  
- Vous pouvez également éditer l'aperçu de votre site (appelé l'image de description). Lancez votre site localement, prenez une capture d'écran. Assurez-vous que votre capture d'écran mesure 1280x640 pour un meilleur aperçu.  

## Petite appercue du projet 

![img_1.png](img_1.png)

# Choisir un thème 🌈

- Jetez un coup d'œil au fichier `src/theme.js`, où sont énumérés tous les thèmes disponibles avec leurs codes couleur respectifs.  
- En bas de ce fichier, vous verrez le code suivant :  
  - `export const chosenTheme = blueTheme;`  
  - Modifiez le nom de `blueTheme` à celui du thème que vous souhaitez appliquer.  
  - Vous pouvez définir un nouveau thème de la même manière que les autres thèmes et attribuer le nom de ce nouveau thème à `chosenTheme`.  
- Et voilà, vous n'avez qu'à changer le nom du thème et le code prendra automatiquement le reste en charge.  
- Exécutez `npm start` pour vérifier si tout est correct.  

# Déploiement 📦

- Une fois votre configuration terminée et toutes les étapes décrites ci-dessus complétées avec succès, vous devez mettre votre site en ligne !  
- Je recommande fortement d'utiliser [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) pour ce faire, car c'est la méthode la plus SIMPLE.  
- Pour déployer votre site, vous avez deux options. Vous devez d'abord créer un dépôt Github avec le nom `<votre-nom-utilisateur-github>.github.io`. Ne donnez-lui aucun autre nom.  
- Générez ensuite une version de production et déployez le site.

**Option 1 :**

- Exécutez `npm run build` pour générer le dossier de production.  
- Entrez dans le dossier build, exécutez `git init` et poussez le code généré vers la branche `master` de votre nouveau dépôt Github. C'est terminé.  
- Vous devrez peut-être exécuter `git init` et forcer un push à chaque nouvelle version générée.  

**Option 2 (ne fonctionnera pas avec [user pages](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)) :**

- Exécutez `npm run deploy` pour construire et créer une branche appelée `gh-pages`. Cela poussera les fichiers build à cette branche.  
- La dernière étape du déploiement consiste à activer `Github Pages` dans les paramètres du dépôt et à sélectionner la branche `gh-pages`.  

Votre site est désormais déployé avec succès et vous pouvez y accéder à `<votre-nom-utilisateur-github>.github.io`.  

# Technologies utilisées 🛠️

- [React](https://reactjs.org/)  
- [graphql](https://graphql.org/)  
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)  
- [baseui](https://github.com/uber/baseweb)  
- [react-reveal](https://www.react-reveal.com/)  
- [styled-components](https://styled-components.com/)  