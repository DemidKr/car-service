import React, {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './Footer.module.scss'
import logo from "shared/assets/icons/lightLogo.png";

interface FooterProps {
    className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
    const {className, ...otherProps} = props

    return (
        <section className={classNames(cls.Footer, {}, [className])}>
            <div className={cls.Footer__container}>
                <div className={cls.Footer__column}>
                    <img src={logo} alt="logo" className={cls.Footer__logo}/>
                </div>
                <div className={cls.Footer__column}>
                    <h5>Главная</h5>
                    <ul>
                        <li>Это мы</li>
                        <li>Кто мы</li>
                        <li>Почему мы?</li>
                        <li>Остались вопросы</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className={cls.Footer__column}>
                    <h5>Title</h5>
                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                    <div className={cls.Footer__column__item}>item</div>
                    <div className={cls.Footer__column__item}>item</div>
                </div>
                <div className={cls.Footer__column}>
                    <h5>Title</h5>
                    <div>Social</div>
                    <div>Social</div>
                </div>
            </div>
        </section>
    );
};

