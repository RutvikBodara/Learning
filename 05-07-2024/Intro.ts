var user  = {"email":"abc@gmail.com","name":"john"};
console.log(user.email);

type points = {x:number ; y:string};

function print1(pt:points){
    console.log("x is "+ pt.x);
    console.log("y is "+ pt.y);
}
function print2(x:string , y:boolean = false){
    return x;
}
print2("da");
print1({x:3, y:"aa"});

function TryCases(x :string | number){
if(typeof x === "string"){
    console.log(x.toUpperCase())
}
else{
    console.log(x);
}
}
TryCases("hello ");

function Test(x:string) : string{
    return(x);
}
const Test3 = (x:string):string =>{
    return "";
}

function HandleError(msg:string): never{
    throw new Error()
}

function ConsoleError(msg:string) :void{
    console.log(msg);
}

type Demodata={
    readonly _ID:number,
             Name:string,
             Email:string,
             card?:number,
}

var testdata :Demodata ={
             _ID:1223,
             Name:"john",
             Email:"a@gmail.com",
}
// testdata._ID =12; 
type testDetails= Demodata & points & {
    extra? :string
}
 
let CheckType  : (string | number)[] = ["1",1];

let SeatAllcation = ():"middle" | "window" =>{
return "window"
} 

//TUPLES
type DemoType = [string, number];
let Demodata :DemoType = ["ASD",12]
Demodata[1] = 1;
// Demodata.push(true);

//interface
interface Test1 {
    name: string;
}

interface Test2 extends Test1 {
    item: boolean;
}

const deltavalue :Test2= {name:"",item:true}
interface Ecommerce {
    website:string,
    coupen():string,
    discount(producename :string , discountValue? : number):string
}

//reopen
interface Ecommerce{
    granted? :boolean
}

let Buyer :Ecommerce = 
{
    website : "a@gmail.com" ,
    coupen : () =>{
        return "a"
    },
    discount : (name:"book") => {
        return "granted"
    }

}
//interface > type  why=> reopen interface any time 

//access modifiers 
class DemoClass {
    protected Count = 1;
    private readonly city ="surat";
    constructor
    (
        public email :string,
        public name :string
    )
    {
        this.email= email,
        this.name=name;
    }

    //get
    get Currentcount() :string{
        return `count is ${this.Count}`
    } 

    //set & (does not have return type) 
    set SetCount(newcount :number){
        this.Count = newcount
    }
    //why? -> to expose private property or do safe operations
}
let InstanceDemoClass = new DemoClass("a@gmail.com","john");
InstanceDemoClass.email
// InstanceDemoClass.city  
class SubClass extends DemoClass {
    public changecount(){
        this.Count = 10
    }
}
let InstanceSubClass  = new SubClass("a@gmail.com","john");
InstanceSubClass.Currentcount
InstanceSubClass.SetCount=12;

//abstact class
abstract class AbstractDemoClass {
    constructor
    (
        public email :string, 
        public name:string
    )
    {   }

    abstract getcount() : number

    public getCount():number{
        return 98;
    }
}

class ExtendedAbstractDemoClass extends AbstractDemoClass
{
    constructor
    (
        public email :string,
        public name:string,
        public Mobilenumber :number
    ){
        super(email,name)
    }
    getcount(): number {
        return 10;
    }
}

//generics

function GenericTesting<T>(vala: T):T{
    return vala;
} 
interface GenericModel {
    name : string,
    value:number
}
interface SecondModel{
    name : string,
    value:number,
    Mobilenumber:number
}
console.log(GenericTesting<SecondModel>({name:"John",value:12,Mobilenumber:125677676767890}))

interface MultiInput {
    name :["John","jordan","jay"]
}
const array:Array<string>=["John","jordan","jay"]
const arr:Array<Number> =[1,2,3]
//with array
 let GenericFunction = <T>(inputvalues :T[]):T =>{
    return inputvalues[2]
 }

 console.log(GenericFunction<string>(array) )
 console.log(GenericFunction<Number>(arr) )

 //with extends

 function DemoGenric<T extends SecondModel,V>(Inputvalue : T) :object{
    return{
        Inputvalue
    }
    
 }
 console.log(DemoGenric({name:"John", value:1, Mobilenumber:1234567890}))

 //generic class
 class GenericClass<T>{
    public DataKeeper : T[] = []

    public PutData(value:T){
        this.DataKeeper.push(value);
        console.log(this.DataKeeper);
    }  
 }
 var NewClass = new GenericClass<string>();
 NewClass.PutData("John");
 NewClass.PutData("Doe");
 NewClass.PutData("Jay");

 //instance of narrowing , work with new key word
 function DemoInstance(value : Date | string){
    if(value instanceof Date){
        console.log(value.getDay);
    }
    else{
        console.log(value.charAt(0))
    }
 }

 //type predicates
 type food = {Healty : () =>string}
 type Pet = {Vegitarian : ()=>boolean}
 function DemoTypePredicate (value : (food | Pet)) :value is Pet{
    return (value as food).Healty !== undefined
 }
 function CheckItemType(value :food | Pet):void{
    if(DemoTypePredicate(value)){
        console.log("this is food")
    }
    else{
        console.log("this is pet");
    }
 }
 let InputUser:food ={
    Healty(){
        return "Dhosa"
    }
 }
 let InputPetUser :Pet = {
    Vegitarian(){
        return true
    }
 }
 CheckItemType(InputPetUser)

 //Discriminated Union and Exhaustiveness checking with never

 interface Circle{
    // Discriminated unions
    kind:"circle",
    radius :number
 }

 interface Ractangle{
   // Discriminated unions
    kind:"ractangle",
    side : number
 }
 interface Triangle{
    //Discriminated unions
    kind:"triangle",
    side : number
 }
 type shape = Circle|Ractangle

 function GetSize(shape :shape) : number{
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    else if (shape.kind === "ractangle"){
        return shape.side *shape.side;
    }
    return 0
 }

 //can be use in payment gateway
 function getArea(shape:shape):number{
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "ractangle":
            return shape.side *shape.side;
        default:
            const _TempData:never = shape;
            return _TempData
    }
 }

//10-07-2023
 //mappped types

type demoMapType = {
    x:number,
    y:number
}
//intenal working of readonly
export type Readonly<T> = {
    [key in keyof T] : T[key]
}

const demoMapValue:Readonly<demoMapType> ={x:1,y:2}
//can not change as this value mapped
// demoMapValue.x =1;

//literal values
type World = 'string'
type Greeting = `hello ${World}`;

//more on the function

function DemoFuntion1(Fn : (value:string) => void){
    Fn("hey there i am typing type script")
}
function DemoFuntion2(value:string){
    console.log(value)
}
DemoFuntion1(DemoFuntion2)

//call signature
//for the variable
//for the interface
interface DemoCall {
    (x:number , y:number)
}

const demoCall :DemoCall =  (x,y) => x-y

//construct signatures

interface DemoCall2{
    (s:string):string;
    (y:string):string;
    new (y:string):string
}

//constraint

function DemoConstraint<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
   
  // longerArray is of type 'number[]'
  const DemoConstraint1 = DemoConstraint([1, 2], [1, 2, 3]);
  const DemoConstraint2 = DemoConstraint("John", "Dow");
 console.log(DemoConstraint1 +"  " +DemoConstraint2)

 //function optional parameter in the callbacks 

 function DemoCallBack<T extends number>(arg1 : T[] ,callback: (x:number,y?:number) =>void ){
    let count :number =1;
    if(arg1 instanceof Number){
        arg1.forEach(element => {
            callback(element,count) 
            count++;
        });
    }
}
//  function callback<Type>(x:Type , y? :Type){ 
//     console.log("sum of this number are " + x+y);
//  }
DemoCallBack([1,2,3,4], (a) => console.log(a))

DemoCallBack([1,2,3,4], (a,i) => console.log(a+" "+i))

//overload function

function DemoOverLoad(y:number[]):number{
    return 2;
}
function DemoOverload(x:any[]):number;
function DemoOverload(asa:any){return 1}


//never -> never return value always throw error using this parameter also shown in the narrowing

//rest perameters

function DemoRestPerameter(...m:number[]){
m.map((n)=>console.log(n))
}
DemoRestPerameter(1,2,3,4,5)
//rest argument 
const arr1 = [1,3,4]
const arr2 = [5,6,7]
arr1.push(...arr2)
console.log(arr1)

//assign function to other variable
type DemoFunc = ()=>boolean

const demoAssign :DemoFunc = () =>{return true}
