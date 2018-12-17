export class Pricing {
    name: string;
    desc: string;
    subtext: string;
    items: ServiceItem[];
}

export class ServiceItem {
    name: string;
    desc: string;
    rates: Rate[];
}

export class Rate {
    label: string;
    price: string;
}
