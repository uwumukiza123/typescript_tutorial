//  TYPESCRIPT have annotations by telling the data type for a variable
// eg:
    let age: number = 12;
    let myName: string = 'Banny'
// is typed arrays with predefined length and types of each index
let tupple: [string, boolean, number] = ['hello', true, 12];


// ENUMS: a special class which represents a group of constants(unchangeable variables)
// and every name to enum becomes a data type
    // eg:
    // enum Size {small =1, medium, large};
    // let mySize: Size = Size.medium;
// const small = 1;
// const medium = 2;
// const large = 3;

// pascal case
const enum Size {small =1, medium, large};
let mySize: Size = Size.large;
console.log(mySize)

// FUNCTIONS
// void: means a function does not return a value
    function calculateTax(income: number, taxYear?: number): number {
       if((taxYear || 2022) < 2022) {
                 return income * 1.2;
            return income * 1.3;
       }
        
    }
    calculateTax(1000)

// OBJECTS
// optional(?)
// we can make an object's keys a readonly
// retire: we can use it to specify how many parameters, what type of the return value,...


let employee: {
    readonly id:number, 
    name?: string,
    retire: (date: Date) => void
} = {
    id: 1,
    retire: (date: Date) => {
        console.log(date)
    }
};
employee.name = 'henry';
