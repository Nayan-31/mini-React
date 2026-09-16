// React -- components

import { App } from "./components/App.js"

// ```App.tsx```
// import "./App.css" <- custom css aa jati hai

//function App(){
//    return <div></div> //Html return
// }

// export default App

// ek class banaunga component naam ki ye sabse super class hogi 
// and isme react ke kuch properties hongi jo mujhe chahiye rahengi toh isliye agar mai kuch component banaunga 
// jaise APP component toh mai component class ko pehle extend kar lunga taki react ki properties aa jaye 

// class Component (Super parent)
// abstract render() //ab ye jo render naam ki method hai ye mai child class me compulsary karna chahta hu kaise kar sakta hu isko abstract bana do toh ab jitne bhi class components bananege jo ki extend karenge component class ko usme humesa ek method hogi render() humesa ar nii hui toh error aa jayega render function cumpolsury aayega nii aaya toh error aa jayega ts ka render method return karta hai HTML 
// abstract style() // return custom_css 


// class App extends Component
// render(); --> idhar humsa backtick kar ke html likhna padega 
// style(); --> idhar humesa backtick kar ke css likhna padega and return karna padega


const root = document.querySelector("#root") as HTMLElement | null

if(!root){
    throw new Error("root doesn't exists")
}
const app = new App()

app.mount(root) // hum jaha pe inject karna chahte hai na apna HTML woh element hamara root element
