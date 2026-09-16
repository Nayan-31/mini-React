export abstract class Component {
    protected _element:HTMLElement|null = null; //kuch nii jab mai apne string html ko convert karunga DOM html element me toh kahi pe usko store bhi toh karunga yaha karunga, yahi pe initialize kar diya toh constructor nii banaya 
    protected _customCss:HTMLStyleElement|null = null;
    abstract render():string //html string return hogi //step 1 : string HTML hai
    abstract style():string //css string return hogi

    // life cycle method
    mount(parent: HTMLElement){ //pata hai meri ek method hai mount jo ki humesa hack ho sakti hai jo hai mount wali method , mount me mai injection wala logic toh mai likhunga hi , mount me hum accept karnege parent ko parent matlab root element ar us root me mai apna HTML element inject karunga 
      // this.render() //itna likh dene se tumhare pass tumhara string wala HTML aa jayega apne aap
    this._InjectStyle() //html load hone se pehle hum css dikhayenge 
    const el = this._createElement() //step2 : isko convert karenge ek HTML Element me
    if(el){
        parent.appendChild(el) //dom me daal denge 
        this._element = el // ye kar rahe hai kyuki unmount karne ke time kaam aayega 
    }
    this.onMount() //jab apna style inject ho jaye html inject ho jaye then isko chalate hai
    }

    unmount(){
      this.onUnMount() //ye hum remove karne se pehle chalate hai
      this._element?.remove() 
      this._element = null //poori tarah se dom se hata hi do 
    }


    //declaration kar raha hu bas 
    onMount(){ //jo ki polymorphism override kar dega apne child component me matlab ye method ka logic mai yaha pe nii likhunga iski logics mai child classes me banaunga idhar nii banaunga 

    }

    onUnMount(){

    }

    private _createElement(): HTMLElement | null {
     //step3 : ar isko direct is template element me daal denge
     const template = document.createElement('template');
     template.innerHTML = this.render().trim() //aap pehle string ko trim karo uske baad inject karo
    //  return template //itna likhne se dikkat kuch nii hota bas ek document Fragment aata hai uske andar aapka content rehta hai wo niii chahiye apne ko apne ko actual content chahaiye isliye apan firstElementChild use karte hai and bypass karne ke liye HTMLElememt use kar rahe hai
    return template.content.firstElementChild as HTMLElement
     
    }

    protected _InjectStyle():void{
        const css = this.style()
        if(!css) return 
        const key = this.constructor.name
        if(document.querySelector(`style[data-id=${key}]`)) return
        this._customCss = document.createElement('style')
        this._customCss.dataset["id"] = key; //toh data set matlab aisa kuch data-id thik hai ab humne ise kyu lagaya kyuki jab multiple times agar hum same css ko mount kar rahe hai toh utni baar style ki reference ban rahi hai jo ki hume nahi chahiye isliye hum yaha logic likh sakte hai ki agar same dataset then ek hi baar css load karo
        this._customCss.textContent = css.trim();
        document.head.appendChild(this._customCss)
    }

}

