Visualisateur UML

Réaliser une application Angular permettant de visualiser des diagrammes de classe
UML. 

L’application devra :
- Importer une classe non compilée au format TypeScript
- Parser la classe
- Afficher le digramme UML correspondant à cette classe
- Etre robuste : le parseur doit pouvoir fonctionner si le nom de la classe et/ou les noms des
membres sont différents

La classe qui devra être importée dans l’application est la suivante :
class Person {
private _id: string;
protected name: string;
constructor() {
this._id = uuid.v4();
}
public getName(): string {
return this.name;
}
public setName(name: string): void {
this.name = name;
}
public getId(): string {
return this._id;
}
public static build(): Person {
return new Person();
}
}
