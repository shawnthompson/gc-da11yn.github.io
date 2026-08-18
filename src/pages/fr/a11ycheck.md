---
title: Vérifications faciles pour l'accessibilité du Web
description: Vérifications rapides de l'accessibilité couvrant la structure de la page, la navigation au clavier, les images, le multimédia et les formulaires.
toggle: Easy Checks for Web Accessibility
subject:
  - howTos
tags:
  - testYourProducts
---

## Généralités

### La page comporte un titre qui décrit son contenu et son objectif.

Faites un clic droit sur la page et vérifiez le code HTML pour voir la valeur dans l'attribut `<title>` dans la balise `<head>`.

<figure>

<img src="/img/a11ycheck/tag-in-title.png" alt="Bon exemple montrant la structure du titre d'une page Web.">

<figcaption>

La fenêtre d'inspection des éléments met en évidence la balise de titre, qui fait référence au titre affiché en haut de la page Web. Une flèche relie la balise HTML au titre correspondant sur la page Web.

</figcaption>
</figure>

### Le HTML sémantique a été utilisé pour mettre des balises sur la structure de la page et représenter l'information plutôt que de s'appuyer sur des feuilles de style CSS personnalisées.

Vérifier le code pour s'assurer que les bons éléments HTML sont utilisés pour structurer le contenu en fonction de la signification de chaque élément plutôt que de son apparence. Exemple : Les titres devraient utiliser du HTML sémantique comme `<h1>` plutôt que d'utiliser du CSS pour styliser le texte de manière à ce qu'il ressemble à un titre H1. Les listes devraient utiliser des codes HTML sémantiques tels que `<ul>` et `<ol>` plutôt que d'utiliser des puces pour styliser le texte et lui donner l'apparence d'une liste.

### La page comporte des titres précis et pertinents, structurés à l'aide des balises de titre `<h1>` à `<h6>`, sans sauter de niveaux hiérarchiques.

Utilisez un vérificateur d'accessibilité automatisé tel que [Accessibility Insights for Web (anglais seulement)](https://accessibilityinsights.io/downloads/) ou utiliser [axe DevTools (anglais seulement)](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) pour identifier les problèmes de hiérarchie et de structure des titres et vous assurer que les titres sont précis et pertinents. Pour plus d'informations, veuillez consulter [Quick Assess in Accessibility Insights for Web (anglais seulement)](https://accessibilityinsights.io/docs/web/getstarted/quickassess/).

<figure>

<img src="/img/a11ycheck/heading-structure-fr.jpg" alt="Bon exemple d'une structure bien organisée de titres.">

<figcaption>

Une hiérarchie de titres bien structurée utilisant les balises `<h1>`, `<h2>` et `<h3>`, représentée sous forme d'arborescence.

</figcaption>
</figure>

### La page demeure fonctionnelle et lisible lorsque le texte est agrandi à 200 % de sa taille initiale.

Faire un zoom sur la page à 200 % sur une fenêtre de 1280 px par 1024 px. Veiller à ce qu'aucun contenu ou fonctionnalité ne soit perdu, ou qu'aucun texte ne soit coupé, tronqué ou masqué.

<figure>

<img src="/img/a11ycheck/responsive-design-en.jpg" alt="Un exemple de problème de redimensionnement de texte.">

<figcaption>

Le texte du libellé ne rentre pas dans le champ de saisie de recherche, provoquant une troncature du texte.

</figcaption>
</figure>

### La refonte du contenu de la page n'entraîne pas de perte de contenu ou de fonctionnalité et ne nécessite pas de défilement horizontal lorsque la largeur de la fenêtre de visualisation est fixée à 320px.

Utilisez un simulateur de dispositif mobile, comme la [barre d'outils de l'appareil dans Chrome Dev Tools](https://developer.chrome.com/docs/devtools/device-mode?hl=fr), pour vérifier. Ouvrir les outils de développement dans votre navigateur. Utiliser le mode de conception réactive et régler la largeur de la fenêtre de visualisation à 320 px en réduisant la fenêtre du navigateur ou en effectuant un zoom avant. Pour ce faire, à partir d'une fenêtre de 1280 px et d'un zoom de 100 %, effectuez un zoom avant de 400 %. Le contenu doit être présenté de manière à éviter toute perte d'information ou de fonctionnalité.

<figure>

<img src="/img/a11ycheck/reflow-design.png" alt="Un exemple de contenu avec des bordures agrandies et des barres de défilement.">

<figcaption>

Texte agrandi avec des barres de défilement mises en évidence. Des flèches pointent vers la barre de défilement horizontale et les bordures du contenu agrandi pour montrer la relation entre ces éléments.

</figcaption>
</figure>

### La langue principale de la page est définie à l'aide de l'attribut `lang` et d'un code de langue (par exemple `<html lang="en">` ou `<html lang="fr">`).

Repérer des passages ou des phrases rédigés dans une langue différente de la langue principale de la page. Ensuite, vérifiez le code pour confirmer que la valeur de l'attribut `lang` de l'élément est valide pour la langue dans laquelle le contenu est rédigé.

<figure>

<img src="/img/a11ycheck/lang-attribute-page.png" alt="Exemple d'un attribut de langue.">

<figcaption>

L'attribut de langue `lang` est mis en évidence dans la fenêtre d'inspection des éléments, montrant qu'il s'agit d'une page en anglais avec l'attribut de langue « en » appliqué.

</figcaption>
</figure>

### Tous les éléments textuels et non textuels présentent un contraste suffisant entre les couleurs d'avant-plan et d'arrière-plan.

Utiliser l'outil d'analyse du contraste des couleurs ou un [vérificateur de contraste en ligne (anglais seulement)](https://webaim.org/resources/contrastchecker/)

- Le texte et les images de texte doivent présenter un rapport de contraste d'au moins 4,5:1 par rapport à l'arrière-plan.
- Les éléments non textuels doivent présenter un rapport de contraste minimal de 3:1 avec les couleurs adjacentes.

<figure>

<img src="/img/a11ycheck/contrast-checker-fr.jpg" alt="Un exemple d'interface d'outil de vérification de contraste.">

<figcaption>

Une page où un bouton avec un fond rose et un texte blanc est mis en évidence. La combinaison de couleurs rose et blanc est testée à l'aide d'un outil d'analyse de contraste des couleurs, avec des alertes informant l'utilisateur que cette combinaison ne respecte pas le ratio de contraste requis.

</figcaption>
</figure>

### Les changements de langue sont balisés et ont des valeurs d'attribut `lang` et d'un code de langue standard (par exemple `lang="en"` ou `lang="fr"`).

Repérer des passages ou des phrases rédigés dans une langue différente de la langue principale de la page. Ensuite, vérifier le code pour vous assurer que tout changement de langue est marqué à l'aide de l'attribut `lang`.

<figure>

<img src="/img/a11ycheck/lang-attribute.png" alt="Un exemple de l'inspecteur d'éléments affichant l'attribut HTML lang.">

<figcaption>

Une vue de l'inspecteur d'éléments montrant un attribut `lang` appliqué à une balise spécifique, différenciant la langue principale de celle de la page Web. L'attribut `lang` est mis en évidence en rouge, avec une flèche pointant vers le texte correspondant associé à cette balise sur la page Web.

</figcaption>
</figure>

### L'objectif de chaque lien peut être compris à partir de leur seul texte.

Vérifier si les étiquettes des liens donnent une idée claire du contenu auquel mène le lien.

<figure>

<img src="/img/a11ycheck/link-purpose-fr.jpg" alt="Exemples de liens accessibles et inaccessibles.">

<figcaption>

Deux exemples de textes hyperliens, avec un exemple accessible (« En savoir plus sur le calcul d'impôt ») et un autre exemple inaccessible (« En savoir plus »). La balise de lien de chaque texte est mise en évidence dans la fenêtre d'inspection des éléments.

</figcaption>
</figure>

## Clavier

### L'ordre de navigation des éléments pouvant faire l'objet d'un focus (par exemple, liens, éléments de formulaire, boîtes de dialogue modales, etc.) est logique et intuitif, préservant la signification et l'exploitabilité du contenu.

Naviguer dans la page en utilisant la touche Tab ou Shift + Tab pour s'assurer que l'ordre des tabulations est cohérent par rapport au contenu de la page Web. La meilleure pratique consiste à faire suivre l'ordre des tabulations par l'ordre de lecture de la page Web.

<figure>

<img src="/img/a11ycheck/tab-order-fr.jpg" alt="Un exemple illustrant des ordres de tabulation accessibles et inaccessibles sur une page Web.">

<figcaption>

Instructions sur la structuration de l'ordre de tabulation d'une page Web. Deux exemples sont présentés : l'un montre une séquence de tabulation accessible et logique, tandis que l'autre présente une séquence inaccessible et désorganisée.

</figcaption>
</figure>

### Tous les éléments pouvant faire l'objet d'un focus affichent un indicateur visuel lorsqu'ils sont mis en évidence et ne disparaissent pas lors de la tabulation.

Naviguer dans la page en utilisant la touche Tab ou Shift + Tab pour vérifier que les éléments pouvant faire l'objet d'un focus ont un indicateur clair et visible qui identifie la mise en évidence visuelle.

<figure>

<img src="/img/a11ycheck/focus-indicator-fr.jpg" alt="Exemples de visibilité du focus sur des boutons.">

<figcaption>

Deux exemples de boutons démontrant un principe d'accessibilité. Le premier exemple montre un bouton dont le focus est visible lorsqu'il est ciblé, le rendant accessible. Le deuxième exemple montre un bouton dont le focus n'est pas visible, ce qui le rend inaccessible.

</figcaption>
</figure>

### La page dispose d'une méthode accessible au clavier pour contourner le contenu répétitif.

À l'aide du clavier, vérifier s'il existe une liste de liens permettant de sauter des blocs d'informations répétées.

Exemple : Le premier élément interactif de la page est un lien (intitulé « Aller au contenu principal ») qui dirige l'utilisateur vers le début du contenu principal de la page Web. L'activation du lien permet de mettre l'accent sur le contenu principal.

<figure>

<img src="/img/a11ycheck/skip-to-main-content-fr.jpg" alt="Exemple d'un lien « Passer au contenu principal ».">

<figcaption>

Une balise de lien est mise en évidence dans la fenêtre d'inspection des éléments, montrant le lien « Passer au contenu principal » qui permet aux utilisateurs de passer directement au contenu principal d'une page Web. Une flèche pointe vers le haut de la page Web, indiquant l'emplacement de ce lien.

</figcaption>
</figure>

### Un accès et un contrôle au clavier sont possibles pour tous les composants interactifs qui peuvent être accédés et contrôlés à l'aide de la souris.

Veiller à ce que tous les éléments (par exemple, les liens, les champs de formulaire, les boutons et les commandes des lecteurs multimédias) soient accessibles et utilisables uniquement à l'aide du clavier.

- Utilisez la touche `Tab` pour naviguer de manière linéaire à travers les éléments interactifs tels que les liens, les contrôles de formulaire et les boutons.
- Utilisez la touche `Entrée` (et parfois `Espace`) pour sélectionner un élément.
- Utilisez les flèches pour vous déplacer à l'intérieur de certains éléments, groupes d'éléments et widgets, tels que les champs de sélection de formulaire, les groupes de boutons radio et les ensembles d'onglets.

<figure>

<img src="/img/a11ycheck/tab-order-website-fr.jpg" alt="Example du navigation par tabulation sur une interface.">

<figcaption>

L'ordre de tabulation montre des champs qui peuvent être sélectionnés au moyen de nombres. Des flèches montrent l'ordre dans lequel un utilisateur passera d'un champ à un autre.

</figcaption>
</figure>

## Images et multimédia

### Les images informatives ont une alternative textuelle qui sert un objectif équivalent.

Vérifier dans le code si l'image possède un attribut `alt`. Veiller à ce que sa valeur contienne un texte alternatif approprié qui décrit l'objectif de l'image d'une manière qui la remplace adéquatement.

<figure>

<img src="/img/a11ycheck/informative-image.png" alt="Un exemple de texte alternatif montrant le symbole du Gouvernement du Canada.">

<figcaption>

Dans la fenêtre d'inspection des éléments, une flèche pointe vers le texte alternatif d'une image, décrivant un symbole du Gouvernement du Canada. Cela démontre comment le texte alternatif fournit une description courte et significative de l'image pour l'accessibilité.

</figcaption>
</figure>

### Les images décoratives sont codées de telle manière que les lecteurs d'écran peuvent les ignorer.

Vérifier dans le code si l'image possède un attribut `alt` et s'assurer que la valeur est vide (`alt=""`).

<figure>

<img src="/img/a11ycheck/decorative-image-fr.jpg" alt="Un exemple de code HTML pour les images décoratives.">

<figcaption>

La fenêtre d'inspection des éléments affiche le code HTML de trois images décoratives. Les parties du code montrant que le texte alternatif de chaque image est vide ont été mises en évidence en vert.

</figcaption>
</figure>

### Le contenu multimédia préenregistré (les vidéos) est sous-titré.

Vérifier que des sous-titres sont disponibles pour les contenus vidéo et audio. Ils doivent être disponibles sous forme de sous-titres ouverts (des sous-titres qui s'affichent en permanence et qui ne peuvent pas être désactivés) ou de sous-titres fermés. Dans le second cas, rechercher un bouton de sous-titrage ou un moyen d'activer les sous-titres.

<figure>

<img src="/img/a11ycheck/captions-fr.jpg" alt="Un exemple d'une vidéo avec sous-titres.">

<figcaption>

Une capture d'écran d'une vidéo affichant des sous-titres correspondant au discours de l'hôte. L'image montre une capture du site 'Guichet-Emplois Canada'.

</figcaption>
</figure>

## Formulaire

### Tous les éléments du formulaire (par exemple, les champs de texte, les cases à cocher, les boutons radio, les menus déroulants, etc.) ont des étiquettes descriptives et pertinentes.

Utiliser un vérificateur d'accessibilité automatisé comme [Accessibility Insights for Web - Fast Pass (anglais seulement)](https://accessibilityinsights.io/downloads) ou utiliser [axe DevTools (anglais seulement)](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) dans Chrome ou Firefox. Lancer une analyse de la page pour détecter automatiquement les éventuelles erreurs.

<figure>

<img src="/img/a11ycheck/form-labels-fr.jpg" alt="Un exemple d'étiquettes descriptives pour les éléments du formulaire.">

<figcaption>

Une page de formulaire est affichée avec la fenêtre d'inspection des éléments à droite. Des flèches pointent vers chacun des champs d'étiquettes descriptives.

</figcaption>
</figure>

### Des étiquettes ou des instructions sont fournies lorsque le contenu nécessite une intervention de l'utilisateur.

Vérifier le code pour voir si des champs sont marqués comme obligatoires. Si le symbole de l'astérisque (*) est utilisé pour indiquer un champ obligatoire, des instructions doivent également être fournies pour définir la signification du symbole en haut du formulaire.

<figure>

<img src="/img/a11ycheck/required-field-instructions-fr.jpg" alt="Un exemple d'instructions pour les champs obligatoires.">

<figcaption>

Une légende de formulaire avec une étiquette indiquant que les champs sont requis.

</figcaption>
</figure>

### Des messages d'erreur indiquent clairement où le problème s'est produit (par exemple, le nom du champ) et ce qui doit être corrigé.

Vérifier que les messages d'erreur sont faciles à comprendre et qu'ils fournissent des instructions claires sur la manière de les résoudre.

Exemple : La mention « Veuillez saisir votre nom » n'est pas aussi utile que la mention « Veuillez saisir votre prénom ».

<figure>

<img src="/img/a11ycheck/validation-error-fr.jpg" alt="Un exemple de message d'erreur affiché dans un formulaire.">

<figcaption>

Une flèche pointe vers un message d'erreur indiquant qu'un champ ne peut pas être vide, en demandant à l'utilisateur d'entrer une valeur. Le texte d'erreur situé au-dessus du champ de saisie est surligné en rouge.

</figcaption>
</figure>
