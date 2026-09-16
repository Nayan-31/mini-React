import { Component } from "../core/component.js";

export class App extends Component {

    render(): string {
        return `
            <div class="underline">
                <h1 id="head">Hello mini react</h1>
            </div>
        `
    }

    style(): string {
        return `
            #head {
                color: cyan;
                font-weight: 700;
            }
        `
    }
}

//jo bhi injection wala logic hoga woh saara ka saara component.ts  pe hoga 
//app class ko pata bhi nii chalega ki matlab ye App jo chahta hai ki render or style jo return ho raha hai woh asal me internally kya chal raha hai woh usko pata bhi nii chalega