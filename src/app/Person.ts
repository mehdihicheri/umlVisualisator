class Person {
private _id: string;
protected name: string;
constructor() {
this._id = "kk";
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