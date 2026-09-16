export abstract class Component {
    protected _element:HTMLElement|null = null; //kuch nii jab mai apne string html ko convert karunga DOM html element me toh kahi pe usko store bhi toh karunga yaha karunga, yahi pe initialize kar diya toh constructor nii banaya 
    protected _customCss:HTMLStyleElement|null = null;
    abstract render():string //html string return hogi
    abstract style():string //css string return hogi

    // life cycle method
    mount(parent: HTMLElement){ //pata hai meri ek method hai mount jo ki humesa hack ho sakti hai jo hai mount wali method , mount me mai injection wala logic toh mai likhunga hi , mount me hum accept karnege parent ko parent matlab root element ar us root me mai apna HTML element inject karunga 
       this.render() //itna likh dene se tumhare pass tumhara string wala HTML aa jayega apne aap
    }

    unmount(){

    }


}

