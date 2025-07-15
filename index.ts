// Ejercicio 1: Crear una interfaz Product con propiedades como nombre, precio, stock y una función para calcular el valor total.
interface Product {
    name : string;
    price : number;
    stock: number;
    calcularValorTotal: () => number;
}

const product: Product = {
    name: "Bluetooth Headphone",
    price: 4500,
    stock: 3,
    calcularValorTotal() {
        return this.price * this.stock;
    }
};

console.log(`Total: $${product.calcularValorTotal()}`); // Total: $13500

// Ejercicio 2: Implementar un sistema de tipos para un carrito de compras con funciones para añadir/eliminar productos y calcular el total.
interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartItem {
    product: Product;
    quantity: number;
}

type ShoppingCart = {
    items: CartItem[];
    addProduct: (product : Product, quantity: number) => void;
    removeProduct: (productId: number) => void;
    calculateTotal: () => number;
};

const cart: ShoppingCart = {
    items: [],

    addProduct(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        }
    },

    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    },

    calculateTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.product.price * item.quantity;
        }
        return total;
    },
};

const keyboard: Product = { id: 1, name: "Keyboard", price: 8000 };
const mouse: Product = { id: 2, name: "Mouse", price: 4000 };

cart.addProduct(keyboard, 1);
cart.addProduct(mouse, 2);
cart.addProduct(keyboard, 1); 

console.log(cart.calculateTotal()); 

cart.removeProduct(2); // Se elimina el mouse del array

console.log(cart.calculateTotal()); 

// Ejercicio 3: Convertir una función JavaScript existente a TypeScript añadiendo tipos adecuados.
function greet(name: string): string {
  return "Hello, " + name;
}
