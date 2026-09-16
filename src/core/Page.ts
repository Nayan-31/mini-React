import { Component } from "./component.js";

export abstract class Page extends Component{
    //agar mujhe render and style method call nahi karna hai then 
    // render(){  agar yaha ye sab nii likhna hai then idhar bhi abstract laga do toh yaha se toh error chala jayega but parent se nii jayega page pe mujhe woh error nii chahiye tha idliye abstract lagaya 
    //     return ""
    // }
    // style():string{
    //     return ""
    // }

    override onMount(): void { //onMount kab chalega sabse last me jab mera mount chal ke kahtam ho jayega then uske baad chalega pageReady
        this.onPageReady()
    }

    override onUnMount(): void {
        
    }

    //ek ar method bana raha hu jo ki sirf page ke liye hogi
    onPageReady(){
      //js ko exectute karta hai
    }
}