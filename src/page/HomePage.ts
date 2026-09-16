// import { Component } from "../core/component.js"

import { button } from "../components/button.js";
import { Page } from "../core/Page.js";


// //multilevel inheritence iska matlab mai component jo already methods present hai woh toh thik hai but mai pages ke liye kuch methods banana chahta hu
// // ye page naam ki ek class hogi jo ki ek core component hi hai matlb "core folder" ke ander jo bhi React ke main logics honge react ki lifecycle method , react ke jo bhi related inner logics sab hum core folder me hi rakhenge ek hum banayenge onPageReady method()
// class HomePage extends Component { //component ko ye extend nii karenga page ko karega 

// }

export class HomePage extends Page{
    private _button = new button()
    render() : string{
        return `<div>
        <h1>Hello malik!!</h1>
        ${this._button.render()} 
        </div>`
    }

    style() : string{
        return ``
    }

    override onPageReady(): void {
        this._button.onMount()
    }
}


//react ke components me ek toh HTML return karna hi hota hai and custom css bhi compulsary hoti hai but mujhe js likhni hai ki nii ye compulsion nii hota 
//that's why maine onPageReady ko abstraction nii banaya mai ise page me override karne ka option de raha hu warna mai ise abstract bana sakta tha agar mujhe compulsion karna hai toh