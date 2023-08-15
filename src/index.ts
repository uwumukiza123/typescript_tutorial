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




// ADVANCED DATA TYPES
// 1. type aliases
// 2. unions ad intersections to combine types
//  3. type narrowing
// 4. Nullable types
// 5. the unkown types
// 6. the never types


// TYPE ALIASES
// By using type aliases we can define a custom type
// the benefit of using type alias is reuse the shape of the object in multiple places

type Employee = {
    readonly id:number, 
    name: string,
    retire: (date: Date) => void
    
}

let employee: Employee{
} = {
    id: 1,
    name: 'Kevin',
    retire: (date: Date) => {
        console.log(date)
    }
};

// 2. UNION TYPES
//  we can give a variable or a function parameter more than one time

function kgToLbs(weight: number | string): number {
    // narrowing(narrow down the data types)
    if(typeof weight === 'number')
        return weight * 2.2;

    else
        return parseInt(weight) * 2.2;
};

kgToLbs(10);
kgToLbs('10kg')
