class Item {
    name: string;
    description: string;
    section: string;
    price: number;
    pictureUrl: string;
    addToCart(item: Item): void {};
}

class Cart {
    itemList: {Item: number}[];
    totalPrice: number;
    removeFromCart(item: Item): void {}
}

class PersonalData {
    paymentMethod: "online" | "offline";
    addres: string;
    email: string;
    phoneNumber: string;
    pay(data: PersonalData): void {};
}
