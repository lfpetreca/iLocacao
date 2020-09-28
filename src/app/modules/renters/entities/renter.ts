export class Renter {
    name: string;
    socialName: string;
    cpf: string;
    address: {
        street: string;
        number: string;
        neighborhood: string;
        zipCode: string;
        city: string;
        uf: string;
    };
    contacts: {
        email: string;
        phone: string;
    };
}
