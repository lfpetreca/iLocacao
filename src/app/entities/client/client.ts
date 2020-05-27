export interface Client {
    name: string; //Nome do cliente
    socialName: string;  // Nome social - not required
    typeOfClient: string; // Tipo ("Inquilino", "Propietário")
    cpf: string;  //CPF
    email: string;  //Email
    addressForm: {
        address: string;   //Endereco   
        number: string;   // Numero
        neighborhood: string;     // bairro
        zipCode: string;   //CEP
        city: string;  //Cidade
        uf: string;  //Estado
    },
    contacts: [
        // pode ir mais de um numero, por isso o array
        {
            phone: string;  //numero
            phoneType: string; //tipo ('celular', 'fixo')
        }
    ]
}