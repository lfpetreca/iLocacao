export class Property {
    reference: string; // Nome de referencia do imovel
    renter: string;  // Propietário
    propertyType: string; // Tipo de imovel ("apartamento", "casa")
    status: string; // Statudo o imovel ("indisponivel", "disponivel"),
    prices: {
        rent: number;  // Valor do aluguel
        taxes: number; // Valor IPTU   - not required
        condominium: number;  // Valor condominio - not required
    };
    address: {
        street: string;   // Endereco
        number: string;   // Numero
        neighborhood: string;     // bairro
        zipCode: string;   // CEP
        city: string;  // Cidade
        uf: string;  // Estado
    };
}
