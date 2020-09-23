export class Property {
    reference: string; // Nome de referencia do imovel
    renter: string;  // Propietário
    propertie: string; // Tipo de imovel ("apartamento", "casa")
    rent: number;  // Valor do aluguel
    taxes: number; // Valor IPTU   - not required
    condominium: number;  // Valor condominio - not required
    status: string; // Statudo o imovel ("indisponivel", "disponivel"),
    address: {
        street: string;   // Endereco
        number: string;   // Numero
        neighborhood: string;     // bairro
        zipCode: string;   // CEP
        city: string;  // Cidade
        uf: string;  // Estado
    };
}
