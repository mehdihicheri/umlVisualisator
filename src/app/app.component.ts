import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  // Titre de l'application
  title = 'Visualisateur UML'; 
  
  // Contient le nom de la classe importée
  className:string;
  
  // Contient la liste des attributs de la classe
  attributs:Array<string>;

  // Contient la liste des méthodes de la classe
  methodes:Array<string>;
  
  // Contient le fichier chargé
  currentFileUpload: File;

  // Message d'erreur
  msg:string="/!\\ Veuillez choisir un fichier typescript";

  // Tester si on affiche le message d'erreur ou pas 
  isError:boolean=false;
  
  constructor(){}

  // Selection du fichier chargé
  selectFile(event) {
    
    // Réinitialisation des variables
    this.isError=false;
    this.className="";
    this.attributs=[];
    this.methodes=[];

    // Attribution du fichier chargé
    this.currentFileUpload = event.target.files.item(0);

    // Test si le fichier est de type TypeScript
    // Affichage d'un message d'erreur sinon
    if (this.currentFileUpload.name.endsWith(".ts")){

      // Lecture du fichier
      this.readFile(this.currentFileUpload);
    }else {
      this.isError = true;
    }
  }

  // Lecture du contenu du fichier
  readFile(file) {

    // Création d'un FileReader
    let fileReader = new FileReader();

    // Traitement effectué après appel de la fonction readAsText
    fileReader.onload = (e) => {  

      // Lecture des propiétés de la classe
      this.getClassProperties(fileReader.result.toString());
    }

    fileReader.readAsText(file);
}

getClassProperties(fileResult:string){

  // Création d'un fichier source
    let ts = require('typescript');
    let node = ts.createSourceFile(
      'x.ts',fileResult,
      ts.ScriptTarget.Latest
    );

  // Parcour du node pour avoir les elements de la classe
    let classDecl;

    // Parcours des childs du noeud 
    node.forEachChild(child => {

      // Tester si c'est une déclaration de classe
      if (ts.SyntaxKind[child.kind] === 'ClassDeclaration') {

        // Parcours des propiétés de la classe
        // + filtre sur chaque propriété
        child.members.forEach(member => {
          if (ts.SyntaxKind[member.kind] === 'PropertyDeclaration') {

            // Ajout des attributs trouvés
            this.attributs.push(member.name.escapedText);
          }
          if (ts.SyntaxKind[member.kind] === 'MethodDeclaration') {

            // Ajout des méthodes trouvées
            this.methodes.push(member.name.escapedText);
          }
        });

        // Lecture du nom de la classe
        this.className =child.name.escapedText;
      }
    });
  }
}
