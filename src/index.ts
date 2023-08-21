
//3. INTERSECTION TYPES
//  -> the union types is represented by one or symbol (|)
//  while the intersection type is represented by one ad symbol(&), ampersand which is sometimes impossible because a value can not be string and number at the same time


let weight: number & string

type Draggable = {
    drag: () => void
};

type Resisable = {
    resize: () => void
}

type UIWidget = Draggable & Resisable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// 4. LITERAL TYPES 
//  when we want to limit the value we can assign to a variable

// literal(exact, specific )
let height: 50 | 100 = 50;
//   or we can use the type alias

type Quantity = 50 | 100;
let quantity:   Quantity = 100;

// 5. NULLABLE TYPES

function greet (name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('hola');
        
}
greet(null)


// 6. OPTIONAL CHAINING
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null: {birthday: new Date ()}
}

let customer = getCustomer(1);
// if(customer !== null && customer !== undefined)
// optional property access operator
    console.log(customer?.birthday?.getFullYear())

// optional element access operator: is good when you are dealing with arrays
// -> customers?.[0]

// optional call 
let log: any = null;
log?.('a')
