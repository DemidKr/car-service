import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './Hero.module.scss'
import car from 'shared/assets/icons/bmw3.png'

interface HeroProps {
    className?: string;
}

export const Hero: FC<HeroProps> = (props) => {
    const {className, ...otherProps} = props

    return (
        <section className={classNames(cls.Hero, {}, [className])}>
            <div className={cls.Hero__container}>
                <div className={cls.Hero__content}>
                    <div className={cls.Hero__content__text}>
                        <h1>Affordable truck service</h1>
                        <div>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Nunc odio in et, lectus sit lorem id integer.
                        </div>
                        <button>Наши работы</button>
                    </div>
                    <img src={car} alt="car"/>
                </div>
            </div>
        </section>
    );
};

