// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 is used
export class Country {
    name: string;
    code: string;
    goldMedals: number;
    silverMedals: number;
    bronzeMedals: number;
    totalNumberOfMedals: number;

    constructor(name: string, code: string, goldMedals: number, silverMedals: number, bronzeMedals: number) {
        this.name = name;
        this.goldMedals = goldMedals;
        this.silverMedals = silverMedals;
        this.bronzeMedals = bronzeMedals;
        this.totalNumberOfMedals = goldMedals + silverMedals + bronzeMedals;
        this.code = code;
    }
}

export enum Order {
    ASC,
    DESC,
}

export class ColumLabel {
    label: string;
    id: string;
    order: Order;
    isActive: boolean;

    constructor(label: string, id: string) {
        this.label = label;
        this.id = id;
        this.order = Order.DESC;
        this.isActive = false;
    }
}

