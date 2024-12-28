import abobora from './abobora.jpg';
import aipim from './aipim.jpg';
import crespa from './alface-crespa.jpg';
import dagua from './banana-dagua.jpg';
import prata from './banana-prata.jpg';
import batdoce from './batata-doce.jpg';
import batata from './batata.jpg';
import beterraba from './beterraba.jpg';
import brocamericano from './brocolis-americano.jpg';
import cebroxa from './cebola-roxa.jpg';
import cebola from "./cebola.jpg";
import cenoura from './cenoura.jpg';
import cheiro from './cheiro-verde.jpg';
import coentro from './coentro.jpg';
import chuchu from './chuchu.jpg';
import cocosec from './coco-seco.jpg';
import flor from './couve-flor.jpg';
import mineiro from './couve-mineira.jpg';
import ervilha from './ervilha.jpg';
import hortela from './hortela.jpg';
import inhame from './inhame.jpg';
import kiwi from './kiwi.jpg';
import lima from './laranja-lima.jpg';
import pera from './laranja-pera.jpg';
import limao from './limao.jpg';
import louro from './louro.jpg';
import gala from './maca-gala.jpg';
import macverde from './maca-verde.jpg';
import formosa from './mamao-formosa.jpg';
import papaia from './mamao-papaia.jpg';
import maracuja from './maracuja.jpg';
import melancia from './melancia.jpg';
import morango from './morango.jpg';
import pepino from './pepino.png';
import frutapera from './pera.jpg';
import colorido from './pimentao-colorido.jpg';
import pimentaoo from './pimentao-verde.jpg';
import quiabo from './quiabo.jpg';
import repolho from './repolho.jpg';
import tomate from './tomate.jpg';
import italia from './uva-italia.jpg';
import rubi from './uva-rubi.jpg';
import vitoria from './uva-vitoria.jpg';
import uvaverde from './uva-verde.jpg';
import vagem from './vagem.jpg';



const FoodData = [
    {
        id: 1,
        img: abobora,
        name: "Abobora Corte kg",
        price: 3.99,
        desc: "Abobora da serra , com varios tamanhos cortados.",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 2,
        img: aipim,
        name: "Aipim kg",
        price: 2.99,
        desc: "Aipim da serra , branquinhos e selecionados.",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 3,
        img: crespa,
        name: "Alface Crespa und",
        price: 1.99,
        desc: "Alface verdinho colido da serra .",
        category: "Verduras",
        rating: 4.5,
    },
    {
        id: 4,
        img: dagua,
        name: "Banana Dagua kg",
        price: 4.99,
        desc: "Banana dagua colido da serra, docinha .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 5,
        img: prata,
        name: "Banana Prata kg",
        price: 1.99,
        desc: "Banana Prata colido da serra, grande e docinha .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 6,
        img: batdoce,
        name: "Batata Doce kg",
        price: 3.99,
        desc: "Batata Doce colido da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 7,
        img: batata,
        name: "Batata Inglesa kg",
        price: 5.99,
        desc: "Batata inglesa, colida e selecionada da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 8,
        img: beterraba,
        name: "Beterraba kg",
        price: 3.99,
        desc: "Beterraba, colida e selecionada da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 9,
        img: brocamericano,
        name: "Brocolis Americano und",
        price: 5.99,
        desc: "Brocolis americano verdinho, colido e selecionado da serra .",
        category: "Verduras",
        rating: 4.5,
    },
    {
        id: 10,
        img: cebroxa,
        name: "Cebola Roxa kg",
        price: 5.99,
        desc: "Cebola roxa colida e selecionado da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 11,
        img: cebola,
        name: "Cebola kg",
        price: 3.99,
        desc: "Cebola branca colida e selecionada da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 12,
        img: cenoura,
        name: "Cenoura kg",
        price: 3.79,
        desc: "Cenoura colida e selecionada da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 13,
        img: cheiro,
        name: "Cheiro verde Und",
        price: 1.99,
        desc: "Cheiro verde verdinho colido e selecionado da serra .",
        category: "Verduras",
        rating: 4.5,
    },
    {
        id: 14,
        img: chuchu,
        name: "Chuchu kg",
        price: 2.99,
        desc: "Chuchu verdinho colido e selecionado da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 15,
        img: cocosec,
        name: "Coco seco kg",
        price: 4.99,
        desc: "Coco seco colido e selecionado da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 16,
        img: coentro,
        name: "Coentro Und",
        price: 1.99,
        desc: "Coentro verdinho colido e selecionado da serra .",
        category: "Verduras",
        rating: 4.5,
    },
    {
        id: 17,
        img: flor,
        name: "Couve Flor und",
        price: 4.99,
        desc: "Couve flor colido e selecionado da serra .",
        category: "Verduras",
        rating: 4.5,
    },
    {
        id: 18,
        img: mineiro,
        name: "Couve mineiro Und",
        price: 1.99,
        desc: "Couve mineiro verdinho colido e selecionado da serra .",
        category: "Verduras",
        rating: 4.5,
    },
    {
        id: 19,
        img: ervilha,
        name: "Ervilha kg",
        price: 7.99,
        desc: "Ervilha seca verdinha colida e selecionada da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 20,
        img: hortela,
        name: "Hortela Und",
        price: 1.99,
        desc: "Hortela verdinha colida e selecionada da serra .",
        category: "Verduras",
        rating: 4.5,
    },
    {
        id: 21,
        img: inhame,
        name: "Inhame kg",
        price: 8.99,
        desc: "Inhame molinho, colido e selecionado da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 22,
        img: kiwi,
        name: "Kiwi kg",
        price: 10.99,
        desc: "Kiwi colido e selecionado da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 23,
        img: pera,
        name: "Laranja Pera kg",
        price: 4.79,
        desc: "Laranja pera colida e selecionada da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 24,
        img: lima,
        name: "Laranja Lima kg",
        price: 5.99,
        desc: "Laranja lima colida e selecionada da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 25,
        img: limao,
        name: "Limao kg",
        price: 4.99,
        desc: "Limao verdinho colido e selecionado da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 26,
        img: louro,
        name: "Louro und",
        price: 1.99,
        desc: "Louro verdinho colido e selecionado da serra .",
        category: "Verduras",
        rating: 4.5,
    },
    {
        id: 27,
        img: gala,
        name: "Maca Gala kg",
        price: 11.99,
        desc: "Maca gala vermelhinha colida e selecionada da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 28,
        img: macverde,
        name: "Maca Verde kg",
        price: 14.99,
        desc: "Maca grandsmith verdinha colida e selecionada da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 29,
        img: formosa,
        name: "Mamao Formosa kg",
        price: 4.99,
        desc: "Mamao Formosa colido e selecionado da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 30,
        img: papaia,
        name: "Mamao Papaia und",
        price: 2.99,
        desc: "Mamao papaia colido e selecionado da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 31,
        img: melancia,
        name: "Melancia corte kg",
        price: 3.99,
        desc: "Melancia varios cortes colido e selecionado da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 32,
        img: maracuja,
        name: "Maracuja kg",
        price: 12.99,
        desc: "Maracuja colido e selecionado da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 33,
        img: morango,
        name: "Morango BDJ Und",
        price: 9.99,
        desc: "Morango colido e selecionado da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 34,
        img: frutapera,
        name: "Pera Importada kg",
        price: 14.99,
        desc: "Pera Importada colida e selecionada da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 35,
        img: pepino,
        name: "Pepino kg",
        price: 3.99,
        desc: "Pepino colido e selecionado da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 36,
        img: colorido,
        name: "Pimentao colorido kg",
        price: 15.99,
        desc: "Pimentão amarelo e vermelho colido e selecionado da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 37,
        img: pimentaoo,
        name: "Pimentao verde kg",
        price: 8.99,
        desc: "Pimentao verde colido e selecionado da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 38,
        img: quiabo,
        name: "Quiabo kg",
        price: 8.99,
        desc: "Quiabo colido e selecionado da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 39,
        img: repolho,
        name: "Repolho verde kg",
        price: 2.99,
        desc: "Repolho verde colido e selecionado da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 40,
        img: tomate,
        name: "Tomate kg",
        price: 4.99,
        desc: "Tomates maduros colidos e selecionados da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    {
        id: 41,
        img: italia,
        name: "Uva Italia kg",
        price: 15.99,
        desc: "Uvas colidas e selecionadas da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 42,
        img: rubi,
        name: "Uva Rubi kg",
        price: 15.99,
        desc: "Uvas colidas e selecionadas da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 43,
        img: uvaverde,
        name: "Uva Verde Thompson kg",
        price: 17.99,
        desc: "Uvas colidas e selecionadas da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 44,
        img: vitoria,
        name: "Uva Vitoria kg",
        price: 14.99,
        desc: "Uvas colidas e selecionadas da serra .",
        category: "Frutas",
        rating: 4.5,
    },
    {
        id: 45,
        img: vagem,
        name: "Vagem manteiga kg",
        price: 9.99,
        desc: "vagem colidas e selecionadas da serra .",
        category: "Legumes",
        rating: 4.5,
    },
    
]


export default FoodData;