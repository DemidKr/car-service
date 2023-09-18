import React, {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './PopularServices.module.scss'
import {ServiceList} from "widgets/ServiceList";
import {mainPageServices} from "shared/data/services";
import {Button, ThemeButton} from "shared/ui/Button";

interface PopularServicesProps {
    className?: string;
}

export const PopularServices: FC<PopularServicesProps> = (props) => {
    const {className, ...otherProps} = props

    return (
        <div className={classNames(cls.PopularServices, {}, [className])}>
            <div className={cls.PopularServices__title}>
                Популярные услуги
            </div>
            <div className={cls.PopularServices__desc}>
                Качественое обслуживание вашего автомобиля
            </div>

            <div>
                <ServiceList cards={mainPageServices}/>
                <div className={cls.PopularServices__btn_container}>
                    <Button theme={ThemeButton.FULLFILLED} className='left'>Все услуги</Button>
                </div>
            </div>
        </div>
    );
};

