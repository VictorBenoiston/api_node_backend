import { Knex } from 'knex';
import { EnumTableNames } from '../EnumTableNames';
import { number } from 'yup';


export const seed = async (knex: Knex) => {

    const [{ count }] = await knex(EnumTableNames.cities)
        .count<[{ count: number }]>('* as count');

    if (!Number.isInteger(count) || Number(count) > 0) return;

    const citiesToInsert = citiesRN.map(city => ({ name: city.city, state: city.state }));
    await knex(EnumTableNames.cities).insert(citiesToInsert);
};


const citiesRN = [
    { 'city': 'Natal', 'state': 'Rio Grande do Norte' },
    { 'city': 'Mossoró', 'state': 'Rio Grande do Norte' },
    { 'city': 'Parnamirim', 'state': 'Rio Grande do Norte' },
    { 'city': 'São Gonçalo do Amarante', 'state': 'Rio Grande do Norte' },
    { 'city': 'Macaíba', 'state': 'Rio Grande do Norte' },
    { 'city': 'Ceará-Mirim', 'state': 'Rio Grande do Norte' },
    { 'city': 'Caicó', 'state': 'Rio Grande do Norte' },
    { 'city': 'Currais Novos', 'state': 'Rio Grande do Norte' },
    { 'city': 'Açu', 'state': 'Rio Grande do Norte' },
    { 'city': 'São José de Mipibu', 'state': 'Rio Grande do Norte' },
    { 'city': 'Santa Cruz', 'state': 'Rio Grande do Norte' },
    { 'city': 'Nova Cruz', 'state': 'Rio Grande do Norte' },
    { 'city': 'Apodi', 'state': 'Rio Grande do Norte' },
    { 'city': 'Areia Branca', 'state': 'Rio Grande do Norte' },
    { 'city': 'João Câmara', 'state': 'Rio Grande do Norte' },
    { 'city': 'Macau', 'state': 'Rio Grande do Norte' },
    { 'city': 'Parelhas', 'state': 'Rio Grande do Norte' },
    { 'city': 'Goianinha', 'state': 'Rio Grande do Norte' },
    { 'city': 'Extremoz', 'state': 'Rio Grande do Norte' },
    { 'city': 'São Miguel', 'state': 'Rio Grande do Norte' },
    { 'city': 'Nísia Floresta', 'state': 'Rio Grande do Norte' },
    { 'city': 'Canguaretama', 'state': 'Rio Grande do Norte' },
    { 'city': 'João Câmara', 'state': 'Rio Grande do Norte' },
    { 'city': 'Jardim do Seridó', 'state': 'Rio Grande do Norte' },
    { 'city': 'Touros', 'state': 'Rio Grande do Norte' },
    { 'city': 'Baraúna', 'state': 'Rio Grande do Norte' },
    { 'city': 'Ipanguaçu', 'state': 'Rio Grande do Norte' },
    { 'city': 'Monte Alegre', 'state': 'Rio Grande do Norte' },
    { 'city': 'Pau dos Ferros', 'state': 'Rio Grande do Norte' },
    { 'city': 'São Paulo do Potengi', 'state': 'Rio Grande do Norte' },
    { 'city': 'São José do Campestre', 'state': 'Rio Grande do Norte' },
    { 'city': 'Jucurutu', 'state': 'Rio Grande do Norte' },
    { 'city': 'Taipu', 'state': 'Rio Grande do Norte' },
    { 'city': 'Lajes', 'state': 'Rio Grande do Norte' },
    { 'city': 'Tangará', 'state': 'Rio Grande do Norte' },
    { 'city': 'Natal', 'state': 'Rio Grande do Norte' },
    { 'city': 'Ceará-Mirim', 'state': 'Rio Grande do Norte' },
    { 'city': 'Extremoz', 'state': 'Rio Grande do Norte' },
    { 'city': 'Macaíba', 'state': 'Rio Grande do Norte' },
    { 'city': 'Parnamirim', 'state': 'Rio Grande do Norte' },
    { 'city': 'São Gonçalo do Amarante', 'state': 'Rio Grande do Norte' },
    { 'city': 'Mossoró', 'state': 'Rio Grande do Norte' },
    { 'city': 'Areia Branca', 'state': 'Rio Grande do Norte' },
    { 'city': 'Assú', 'state': 'Rio Grande do Norte' },
    { 'city': 'Apodi', 'state': 'Rio Grande do Norte' },
    { 'city': 'São José de Mipibu', 'state': 'Rio Grande do Norte' },
    { 'city': 'Macau', 'state': 'Rio Grande do Norte' },
    { 'city': 'Caicó', 'state': 'Rio Grande do Norte' },
    { 'city': 'Currais Novos', 'state': 'Rio Grande do Norte' },
    { 'city': 'Acari', 'state': 'Rio Grande do Norte' },
    { 'city': 'Parelhas', 'state': 'Rio Grande do Norte' },
    { 'city': 'Lagoa Nova', 'state': 'Rio Grande do Norte' },
    { 'city': 'Jardim do Seridó', 'state': 'Rio Grande do Norte' },
    { 'city': 'São Paulo do Potengi', 'state': 'Rio Grande do Norte' },
    { 'city': 'João Câmara', 'state': 'Rio Grande do Norte' },
    { 'city': 'Santa Cruz', 'state': 'Rio Grande do Norte' },
    { 'city': 'Nova Cruz', 'state': 'Rio Grande do Norte' },
    { 'city': 'São Miguel', 'state': 'Rio Grande do Norte' },
    { 'city': 'Touros', 'state': 'Rio Grande do Norte' },
    { 'city': 'Maxaranguape', 'state': 'Rio Grande do Norte' },
    { 'city': 'Canguaretama', 'state': 'Rio Grande do Norte' },
    { 'city': 'Goianinha', 'state': 'Rio Grande do Norte' },
    { 'city': 'São José do Campestre', 'state': 'Rio Grande do Norte' },
    { 'city': 'Monte Alegre', 'state': 'Rio Grande do Norte' },
    { 'city': 'Nísia Floresta', 'state': 'Rio Grande do Norte' },
    { 'city': 'São Miguel do Gostoso', 'state': 'Rio Grande do Norte' },
    { 'city': 'Rio do Fogo', 'state': 'Rio Grande do Norte' },
    { 'city': 'Jucurutu', 'state': 'Rio Grande do Norte' },
    { 'city': 'Taipu', 'state': 'Rio Grande do Norte' },
    { 'city': 'Baraúna', 'state': 'Rio Grande do Norte' },
    { 'city': 'Ipanguaçu', 'state': 'Rio Grande do Norte' },
    { 'city': 'Arez', 'state': 'Rio Grande do Norte' },
    { 'city': 'Alto do Rodrigues', 'state': 'Rio Grande do Norte' },
    { 'city': 'Santo Antônio', 'state': 'Rio Grande do Norte' },
    { 'city': 'Ipueira', 'state': 'Rio Grande do Norte' },
    { 'city': 'Paraná', 'state': 'Rio Grande do Norte' },
    { 'city': 'São Tomé', 'state': 'Rio Grande do Norte' },
    { 'city': 'Serra Caiada', 'state': 'Rio Grande do Norte' },
    { 'city': 'Riachuelo', 'state': 'Rio Grande do Norte' }
];
