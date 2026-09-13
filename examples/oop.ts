//Abe encapsulation matlab hota kuch nii hai matlab dekh tu private ko using private keyword use kar ke hi usko classes ke andar use kar sakta hai but in encapsulation what happens that tu private variables ko touch kar sakta hai using getters and setters
// class Car {
//   private color : string
//   private mileage : string
//   private brand : string

//   constructor(){
//     this.color = ""
//     this.mileage = ""
//     this.brand = ""
//   }

//   getColor():string {
//     return this.color
//   }
  
//   setColor(color:string){
//     this.color = color
//   }

//   getMileage():string{
//     return this.mileage
//   }

//   setMileage(mileage:string){
//     this.mileage = mileage
//   }

//   getBrand():string{
//     return this.brand
//   }

//   setBrand(brand:string){
//     this.brand = brand
//   }
// }

// const car1 = new Car()
// car1.setColor("Black")
// console.log(car1.getColor())

//inheritance --> jab ek class dusri class ke variables aur methods koinherit kar leta hai then usko inheritance kehte hai

// class Animal{
//   sound(){
//     console.log("Animal makes sound")
//   }
// }

// class Dog extends Animal{

// }

// const dog = new Dog()
// dog.sound()

//polymorphism ---> same method name but different behaviour

// class Animal {
//   sound(){
//     console.log("Animal sound karta hai")
//   }
// }

// class Dog extends Animal{
//   override sound(){
//     console.log("Dog barks")
//   }
// }

// class Cat extends Animal{
//   override sound(){
//     console.log("Cat meows")
//   }
// }

// const animals : Animal[] = [
//   new Animal() , new Dog() , new Cat()
// ]
// animals.forEach(animal => animal.sound())

//Abstraction ----> Essential chiz hi bas dikhao bas, baki unnecessary bussiness logics dikhane ki jarurat nahi hai

// abstract class Animal{
// abstract getAnimal():string
// }

// class Dog extends Animal{
//   override getAnimal(): string {
//     return "Dogs are good pets"
//   }
// }

// const dog = new Dog()
// console.log(dog.getAnimal())

//Matlab abstract class me complete method bhi ho sakta hai aur incomplete/abstract method bhi.

// abstract class Animal{
// abstract getAnimal():string
 
//      getMammal(){
//       console.log("Elephants are mammal yk")
//      }
// }

interface ICar{
  getCar():string
}

interface IBMW extends ICar{
  color:string
}

class Car implements IBMW{
  public color : string = ""
    getCar():string{
      return "BMW"
    }
}

const car1 = new Car()
console.log(car1.getCar())