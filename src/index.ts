

let first_name:string= "Masai"

let age:number=23;

let isFetching: boolean= false;

let Numbers: number[]= [1,2,3,4];

let Strings: string []= ["Masai", "School"];

let tuple: [string, number,boolean];
tuple=["Masai", 46, true];

enum Person{
    User, SuperUser, Admin, SuperAdmin
}

function Product(x:number, y:number):number{
    return x*y;
}
function Divide(x:number, y:number):number{
    return x/y;
}

const printPerson = ({name}) =>{
    console.log(name)
}