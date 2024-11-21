
/*let n1 = parseInt(prompt("Entrer un nombre"));
let n2 = parseInt(prompt("Entrer un nombre"));
let somme = n1 + n2;
let moyenne = somme / 2;

do {
    console.log(n1--, n2--);
    console.log(somme);
    console.log(moyenne);
}
while (n1 > 0 && n2 > 0)
alert(somme);
alert(moyenne);*/


/*function multiplication(x, y) {
    alert(x * y);
    console.log(x * y);
    return x * y;
}
var resultat = multiplication(3, 4);*/

/*Créer les 2 fonctions suivantes :
• produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
• afficheImg(image) qui affiche l’image passée en paramètre.
Créer la page HTML correspondant au résultat ci-dessous :*/



/*let x = parseInt(prompt("Entrer un nombre"));
let y = parseInt(prompt("Entrer un autre nombre"));

function multiplication(x , y){ 
    /*document.write('Le cube de 3 est égal à 27');
    console.log(x*y);
    alert(x*y);
    return x * y ;
}
alert(multiplication)*/

/*function afficheImg(image){
    document.write('<img src="image/papillon.jpg"+ image alt="Papillon">');
}
afficheImg ('image/papillon.jpg')*/


/*Exercice 2
Créer le programme qui fournira un menu permettant d’obtenir les fonctionnalités suivantes à partir
d’un tableau à une dimension :
 Affichage du contenu de tous les postes du tableau,
 Affichage du contenu d’un poste dont l’index est saisi au clavier,
 Affichage du maximum et de la moyenne des postes du tableau
Ce programme sera structuré de la manière suivante :
 une fonction GetInteger pour lire un entier au clavier,
 une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes sou-
haité sera entré au clavier,
 une fonction SaisieTab pour permettre la saisie des différents postes du tableau,
 une fonction AfficheTab pour afficher tous les postes du tableau,
 une fonction RechercheTab pour afficher le contenu d’un poste de tableau dont le rang est
saisi au clavier
 une fonction InfoTab qui affichera le maximum et la moyenne des postes.
Les fonctions seront appelées successivement.*/

/**
 * Lire un entier saisi au clavier
 * @param {*} message
 */
/*function getInteger(message) {
    alert (parseInt(prompt(message)));
  }
  getInteger = message;
  /**
   * Créer et initialiser un tableau
   */
/*function initTab() {
  const taille = getInteger("Entrez le nombre de notes souhaitées dans le tableau");
  return taille;
}
 
/*
*
 * Saisie des valeurs du tableau
 * @param {*} _tableau
 */
/*function saisieTab(_tableau) {
 
  for (let i = 0; i < tableau.length; i++) {
    _tableau[i]=getInteger("Entrez la valeur pour la note :",${i + 1});
    if (tableau[i] === null) {
        console.log("Saisie interrompue.");
        break;
    }
  }
}
 
/**
 * Afficher tout le tableau
 * @param {*} _tableau
 */
/* function afficheTab(_tableau) {
   console.log("Contenu du tableau :", _tableau);
 }
 
 /**
  * Afficher le maximum et la moyenne des valeurs du tableau
  * @param {*} _tableau
  */
/*function infoTab(_tableau) {
  if (_tableau.length == 0) {
    console.log("le tableau est vide");
    return;
  }
 
  const max = Math.max(..._tableau);
  const moyenne = _tableau.reduce((acc, val) => cc + val, 0) / _tableau.length;
 
  console.log("Max:" + max);
  console.log("Moyenne: " + moyenne);
}
 
/**
 * Afficher le contenu du tableau dont l'index est saisi au clavier
 * @param {*} _tableau
 */
/*function rechercheTab(_tableau) {
  const index = getInteger("Entrez l'index de la note à afficher");
 
  if (index >= 0 && index < _tableau.length) {
    console.log("Valeur à l'index ${index : ",${tableau[index]});
  } 
  else {console.log("Index invalide");
  }
}
//[09:22]
let taille= initTab();
let tableau=new Array(taille) ;
saisieTab(tableau);
 
let choix;
 
do {
  choix = getInteger(
    "Menu : \n" +
      "1. Afficher tout le contenu du tableau \n" +
      "2. Afficher la note à l'index du tableau \n" +
      "3. Afficher le maximum et la moyenne \n" +
      "4. Quitter \n" +
      "Choisissez une option "
  );
 
  switch (choix) {
    case 1:
      afficheTab(tableau);
      break;
    case 2:
      rechercheTab(tableau);
      break;
    case 3:
      infoTab(tableau);
      break;
    case 4:
      console.log("Fin du programme");
      break;
    default:
      console.log("Option invalide, veuillez réessayer");
  }
} while (choix !== 4); (modifié)



// LA BOUCLE SWITCH
/*
const N = true;

 switch (N)  {
    case 1 : 
    console.log("case 1 vrai");
    alert("case 1 vrai");
    break;
    case 2 : 
    console.log("case 2 vrai");
    alert("case 2 vrai");
    case 3 : 
    console.log("case 3 vrai");
    alert("case 3 vrai");
    break;
    case 4 : 
    console.log("case 4 vrai");
    alert("case 4 vrai");
    break;
    case 5 : 
    console.log("case 5 vrai");
    alert("case 5 vrai");
    break;
    case true : 
    console.log(true, " vrai donc N est un  ",typeof(N));
    alert(true+ " vrai donc N est un "+typeof(N));
    break;
    default : 
    console.log("constante fausse");
    alert("constante fausse");
    
}

/* LES BOUCLES DO...WHILE, WHILE, FOR*/
/*let compteur = 0;
do {
    compteur += 1;
    console.log(compteur);
    alert(compteur);
} while(compteur < 3);*/

/*let compteur_2 = 0;
while (compteur_2 < 3) {
    compteur_2 += 1;
    console.log("Hello World !");
    alert("Hello World !");
    }*/

/*for (let compteur = 0; compteur < 3; compteur++) {
    console.log("compteur", compteur);
    alert("compteur " + compteur);
    } 
    */





// LES TYPES DE VARIABLES

/*
var nom = "André";
var nombre = 12;
var tableau = ["pomme", "fraise", "orange"];
var vrai = true;
var faux = false;
var personne = {};
personne.age = 12;
personne.prenom = "Benjamain";
personne.adresse = "Rue du Code";


console.log("nom = ", typeof (nom),
    "\nnombre = " + typeof (nombre),
    "\ntableau = " + typeof (tableau),
    "\nvrai = " + typeof (vrai),
    "\nfaux = " + typeof (faux),
"\npersonne = ",typeof(personne));
alert("nom = " + typeof (nom) +
    "\nnombre = " + typeof (nombre) +
    "\ntableau = " + typeof (tableau) +
    "\nvrai = " + typeof (vrai) +
    "\nfaux = " + typeof (faux)+
"\npersonne = "+typeof(personne));
*/


/* VARIABLE OBJET, ici l'Objet ="personne"
var personne = {};
personne.age = 12;
personne.prenom = "Benjamain";
personne.adresse = "Rue du Code";*/




//  LA BOUCLE FOR....IN  ( c'est pour extraire le contenu des propriétés de la Variable Objet  )
/*
var personne = {};
personne.age = 12;
personne.prenom = "Benjamain";
personne.adresse = "Rue du Code";
for (propriete in personne) {
    console.log(propriete, "=", personne[propriete]);
    alert(propriete + "=" + personne[propriete]);
}
*/

//  LA BOUCLE FOR....OF ( c'est pour extraire le contenu d'un Array ou Tableau )

/*const liste = ["pomme","voiture","ananas"];
for (element of liste) {
  console.log("elemnt: ",element);
  alert("element: "+ element);
}
*/

//BOUCLE INFINI

/* let compteur_3 = 0;
while (compteur_3 < 3) {
   console.log("Hello World");
   alert("Hello World");
}*/


// LES GUILLEMETS




/* LES TABLEAUX


/* var myTableau = ["pomme", "poire", "banane", "fraise", "abricot"];
var nb = myTableau.length ;
console.log("Le tableau contient "+nb+ "éléments"); // Affiche : 5
alert("Le tableau contient "+nb+ "éléments"); */ // Affiche : 5


/*var myTableau = ["pomme", "poire", "banane", "fraise", "abricot"];
for (var i = 0; i < myTableau.length; i++)
{
console.log("Fruit : "+myTableau[i]);
}*/



/*function sayHello(alias) {
    console.log("Hello", alias, "!");
    alert("Hello "+ alias + " !");
}
sayHello("André");*/



/*const fruits = [  "orange", "banane", "pomme"];
fruits.push("clémentine");
console.log(fruits);
alert(fruits);
fruits[4] = "modification" 
console.log(fruits);
alert(fruits);
*/

/*
const personnages_Id = [
  { nom: "Luke Skywalker", espece: "Humain", affiliation: "Jedi" },
  { nom: "Dark Vador", espece: "Humain", affiliation: "Sith" },
  { nom: "Yoda", espece: "Yoda's species", affiliation: "Jedi" },
  { nom: "Obi-Wan Kenobi", espece: "Humain", affiliation: "Jedi" }
];
*/

/*
const personnages = [Luke, Dark, Yoda, Obi_Wan];

let Luke = {
  nom: "Luke Skywalker",
  espece: "Humain",
  affiliation: "Jedi",
}

const Dark = {
  nom: "Dark Vador",
  espece: "Humain",
  affiliation: "Sith",
}

const Yoda = {
  nom: "Yoda",
  espece: "Yoda's species",
  affiliation: "Jedi",
}

const Obi_Wan = {
  nom: "Obi-Wan Kenobi",
  espece: "Humain",
  affiliation: "Jedi",
}


var nom = prompt("Entrez un Nom")
function saissiNom(_personnages) {
  for (let i = 0; i < personnages.lengt; i++) {
    return nomId;
  }
  else {
    console.log("Ce Nom n'est pas valide");
  }
}
var nomId = saissiNom(_personnages);
console.log("Dark ",Dark);
alert(Dark + [Dark]);



/*const affiliation = ["Jedi", "Sith"];
function saisiAffil(personnages) {

}







/* Déclaration de la fonction 'maFonction' */
/*function maFonction(monObjet) {
  monObjet.marque = "Toyota";
}

/*
 * Déclaration de la variable 'mavoiture';
 * création et initialisation d'un nouvel objet;
 * assigner une référence à 'mavoiture'
 */
/*var mavoiture = {
  marque: "Honda",
  modele: "Accord",
  annee: 1998,
};

/* Affiche 'Honda' */
//console.log(mavoiture.marque);

/* Passer la référence de l'objet à la fonction */
//maFonction(mavoiture);

/*
 * Affiche 'Toyota' pour valeur de la propriété 'marque'
 * de l'objet. C'est ce que la fonction a changé.
 */
////console.log(mavoiture.marque);


/*
Exercice 8:
Les habitants de Zorglub paient l’impôt selon les règles suivantes :
 les hommes de plus de 20 ans paient l’impôt
 les femmes paient l’impôt si elles ont entre 18 et 35 ans
 les autres ne paient pas d’impôt
Le programme demandera donc l’âge et le sexe du Zorglubien, 
et se prononcera donc ensuite sur le fait que l’habitant est imposable.
*/


let age = 0;
let iIntervalAge_1= 0;
iIntervalAge_1+=iAge;
let iIntervalAge_2= 0;
iIntervalAge_2+=iAge;

let bGenre = confirm("Êtes vous un Homme (OK)/ une Femme (Annuler)?");
//Algo pour savoir si vous êtes un homme et si vous êtes impossable
if (bGenre==true) {
  alert("Vous êtes un Homme");
} else {
  console.log("Vous êtes une Femme");
  alert("Vous êtes une femme");
}

let iAge = parseInt(prompt("Entrer votre âge"));
age += iAge

if (age > 20) {
  
  console.log("Vous êtes Imposable");
  alert("Vous êtes Imposable");
} else {
  console.log("Vous n'êtes pas Imposable");
  alert("Vous n'êtes pas Imposable");
}

//Algo pour savoir si une femme est impossable
if (bGenre=false){
  iIntervalAge_1 > 17;
  console.log("Vous êtes Imposable");
  alert("Vous êtes Imposable");
} else if (bGenre=false){
  iIntervalAge_1 < 3;
  console.log("Vous êtes Imposable");
  alert("Vous êtes Imposable");
} else {
  console.log("Vous n'êtes pas Imposable");
  alert("Vous n'êtes pas Imposable");
} 

//Algo pour savoir si une femme est impossable

/*
age +=iAge;

 switch (bGenre=false) {
case 1 : age >= 18;
  console.log("Vous êtes Impossable");
  alert("Vous êtes Impossable");
  case 2 : age <= 35
  console.log("Vous êtes Impossable");
  alert("Vous êtes Impossable");
  default : 
  console.log("Vous n'êtes pas Impossable");
  alert("Vous n'êtes pas Impossable");
}
 */
