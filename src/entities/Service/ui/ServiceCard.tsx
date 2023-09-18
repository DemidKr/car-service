import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './ServiceCard.module.scss'
import {IServiceCard} from "entities/Service";

interface ServiceCardProps {
    className?: string;
    card: IServiceCard
}

export const ServiceCard: FC<ServiceCardProps> = (props) => {
    const {
        className,
        card,
        ...otherProps
    } = props

    return (
        <div className={classNames(cls.ServiceCard, {}, [className])}>
            <div className={cls.ServiceCard__content}>
                <div className={cls.ServiceCard__content__title}>
                    {card.title}
                </div>
                {card.price &&
                    <div className={cls.ServiceCard__content__price}>
                        от <span>{card.price} ₽</span>
                    </div>
                }
            </div>
            <img src={card.img} alt="img" height={card.imgHeight}/>
            {card.isOffer && <div className={cls.ServiceCard__offer}>
                Акция
            </div>}
        </div>
    );
};

