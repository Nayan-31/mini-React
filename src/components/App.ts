import { Component } from "../core/component.js";

class App extends Component{
   render():string{ //render return karti hai Html 
    return ``
   }
   style():string{ //style return karti hai custom_css
    return ``
   }
}

//jo bhi injection wala logic hoga woh saara ka saara component.ts  pe hoga 
//app class ko pata bhi nii chalega ki matlab ye App jo chahta hai ki render or style jo return ho raha hai woh asal me internally kya chal raha hai woh usko pata bhi nii chalega