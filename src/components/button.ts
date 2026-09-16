import { Component } from "../core/component.js";

export class button extends Component {

    render(): string {
        this._InjectStyle()
        return `
           <button id="btn">
           click me
           </button>
        `
    }

    style(): string {
        return `
            #btn {
               padding : 3px 5px;
               border-radius : 1vh;
               border: 1px solid black;
                color: cyan;
                font-weight: 700;
            }
        `
    }

    override onMount(): void {
        //idhar js ke logics likh sakte hai apan
        document.querySelector("#btn")?.addEventListener("click", ()=>{
            console.log("clicked")
        })
    }
}

//jo bhi injection wala logic hoga woh saara ka saara component.ts  pe hoga 
//app class ko pata bhi nii chalega ki matlab ye App jo chahta hai ki render or style jo return ho raha hai woh asal me internally kya chal raha hai woh usko pata bhi nii chalega