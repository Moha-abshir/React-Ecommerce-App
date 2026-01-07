//When an interface is shared across multiple components, just place the shared interface here and import it in the
//components that need to use it.

export interface Product { //We export the interface so that it can be accessed by other files
    id: number,
    title: string,
    price: number, 
    images: string[];
};