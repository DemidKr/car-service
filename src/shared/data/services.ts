import {IServiceCard} from "entities/Service";
import bodyWork from "shared/assets/icons/body-work.png";
import accessory from 'shared/assets/icons/accessory.png'
import carParts from 'shared/assets/icons/car-parts.png'
import oil from 'shared/assets/icons/oil.png'

export const mainPageServices: IServiceCard[] = [
    {
        title: "Слесарные работы",
        img: bodyWork,
        price: 2999,
        isOffer: true,
    },
    {
        title: "Запчасти в наличии и под заказ",
        img: carParts,
        price: 10,
        isOffer: true,
        imgHeight: 200,
    },
    {
        title: "Замена масла",
        img: oil,
        imgHeight: 190,
        price: 1499,
        isOffer: true,
    },
    {
        title: "Аксессуары",
        img: accessory,
        price: 999,
    },
]