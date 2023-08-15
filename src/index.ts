
//3. INTERSECTION TYPES
//  -> the union types is represented by one or symbol (|)
//  while the intersectio type is represented by one ad symbol(&), ampersand which is sometimes impossible because a value can not be string and number at the same time


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