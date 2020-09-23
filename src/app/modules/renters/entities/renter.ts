export class Renter {
    name: string;
    socialName: string;
    cpf: string;
    email: string;
    address: {
        street: string;
        number: string;
        neighborhood: string;
        zipCode: string;
        city: string;
        uf: string;
    };
    contacts: [
        {
            phone: string;
            phoneType: string;
        }
    ];
}
