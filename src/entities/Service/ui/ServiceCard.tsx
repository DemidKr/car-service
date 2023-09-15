import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './ServiceCard.module.scss'

interface ServiceCardProps {
    className?: string;
    title: string;
    img: string;
    imgHeight?: number,
    price?: number;
    isOffer?: boolean
}

export const ServiceCard: FC<ServiceCardProps> = (props) => {
    const {
        className,
        title,
        img,
        imgHeight,
        price,
        isOffer = false,
        ...otherProps
    } = props

    return (
        <div className={classNames(cls.ServiceCard, {}, [className])}>
            <div className={cls.ServiceCard__content}>
                <div className={cls.ServiceCard__content__title}>
                    {title}
                </div>
                {price &&
                    <div className={cls.ServiceCard__content__price}>
                        от <span>{price} ₽</span>
                    </div>
                }
            </div>
            <img src={img} alt="img" height={imgHeight}/>
            {isOffer && <div className={cls.ServiceCard__offer}>
                Акция
            </div>}
        </div>
    );
};

