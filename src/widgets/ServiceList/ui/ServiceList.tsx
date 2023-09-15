import React, {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './ServiceList.module.scss'
import bodyWork from "shared/assets/icons/body-work.png";
import accessory from 'shared/assets/icons/accessory.png'
import carParts from 'shared/assets/icons/car-parts.png'
import oil from 'shared/assets/icons/oil.png'

import {ServiceCard} from "entities/Service";

interface ServiceListProps {
    className?: string;
}

export const ServiceList: FC<ServiceListProps> = (props) => {
    const {className, ...otherProps} = props

    return (
        <div className={classNames(cls.ServiceList, {}, [className])}>
            <div className={cls.ServiceList__title}>
                Популярные услуги
            </div>
            <div className={cls.ServiceList__desc}>
                Качественое обслуживание вашего автомобиля
            </div>

            <div className={cls.ServiceList__container}>
                <ServiceCard
                    title={"Слесарные работы"}
                    img={bodyWork}
                    price={2999}
                    isOffer={true}
                />
                <ServiceCard
                    title={"Запчасти в наличии и под заказ"}
                    img={carParts}
                    imgHeight={200}
                    // isOffer={true}
                />
                <ServiceCard
                    title={"Замена масла"}
                    img={oil}
                    imgHeight={190}
                    price={1499}
                    isOffer={true}
                />
                <ServiceCard
                    title={"Аксессуары"}
                    img={accessory}
                    price={999}
                />
            </div>
        </div>
    );
};

