
export class User {
    id: number;
    username: string;
    password: string;
    address: string;
    admin: boolean;
    cardNumber: string;
    cvv: any;
    email: string;
    nameOnCard: string;

    constructor(){
        this.id=0;
        this.username="";
        this.password="";
        this.address="";
        this.admin=true;
        this.cardNumber="";
        this.email="";
        this.nameOnCard="";

    }
  }



  export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    pictureUrl: string;
  }



  export interface Category {
    id: number;
    name: string;
  }



  export interface Comment {
    id: number;
    addedAt: any;
    addedBy: string;
    message: string;
    title: string;
  }  


  export interface Order {
    id: number;
    dateCreated: any;
    status: any;
  }

  
  export class ProductOrder {
    id: number;
    product: Product;
    quantity: number = 1;
    constructor(product: Product, quantity: number) {
      this.product = product;
      this.quantity = quantity = 1;
      this.id=0;
    }
  }
  export class ProductOrders {
    productOrders: ProductOrder[] = [];
  }
  export interface Product {
    id: number;
    description: string;
    name: string;
    pictureUrl: string;
    price: number;
  }
  export interface Tag {
    id: number;
    name: string;
    products: any;
  }
  export class Item {
    name: string;
    value: string;
    price: number;

    constructor(){
        this.price=0;
        this.name="";
        this.value="";
    }
  }
  export class UpdateProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;

    constructor(){
        this.id=0;
        this.name="";
        this.description="";
        this.price=0;
        this.pictureUrl="";
    }
  }
  export const ITEMS: Item[] = [
    {
      name: 'TakAway  ',
      value: 'item_1',
      price: 49,
    },
    {
      name: 'Relay  ',
      value: 'item_2',
      price: 59,
    },
    {
      name: 'Express  ',
      value: 'item_3',
      price: 99,
    },
    {
      name: 'Direct  ',
      value: 'item_4',
      price: 149,
    },
  ];
   