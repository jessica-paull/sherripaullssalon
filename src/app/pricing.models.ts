export class Pricing {
    name: string;
    desc: string;
    rates: Rate[];
}

export class Rate {
    label: string;
    price: string;
}
