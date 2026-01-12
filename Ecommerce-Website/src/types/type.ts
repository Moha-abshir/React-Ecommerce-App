//When an interface is shared across multiple components, just place the shared interface here and export 
//Import it in the components that need to use it.

export interface Product { //We export the interface so that it can be accessed by other files
    id: number,
    title: string,
    price: number, 
    quantity: number,
    images: string[], 
    description: string,
    //since the product also has category arrays, we need to specify it because it is to be used by the Products page.
    category: {
        id: number,
        name: string, 
        image: string
    }
}; 