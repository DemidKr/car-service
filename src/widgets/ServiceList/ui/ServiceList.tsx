import React, {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './ServiceList.module.scss'


import {IServiceCard, ServiceCard} from "entities/Service";

interface ServiceListProps {
    className?: string;
    cards: IServiceCard[];
}

export const ServiceList: FC<ServiceListProps> = (props) => {
    const {className, cards, ...otherProps} = props

    return (
        <div className={classNames(cls.ServiceList, {}, [className])}>
            {cards.map((card, index) =>
                <ServiceCard card={card} key={index}/>
            )}
        </div>
    );
};

