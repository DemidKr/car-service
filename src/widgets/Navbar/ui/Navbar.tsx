import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {InfoBox} from "shared/ui/InfoBox";
import ClockIcon from "shared/assets/icons/clock.svg";
import PhoneIcon from "shared/assets/icons/phone.svg";
import PinIcon from "shared/assets/icons/pin.svg";
import logo from "shared/assets/icons/darkLogo.png"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {Button, ThemeButton} from "shared/ui/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {className, ...otherProps} = props

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.Navbar__wrapper}>
                <div className={cls.Navbar__row}>
                    <div className={cls.Navbar__row__left}>
                        <InfoBox
                            title={'График работы:'}
                            desc={'ст. Кущевская, ул. Октябрьская 1Г'}
                            svgIcon={<PinIcon className={cls.Navbar__icon}/>}
                        />
                        <div className={cls.Navbar__vertical_line}/>
                        <InfoBox
                            title={'Наш адрес:'}
                            desc={'С 8:00 до 19:00 без выходных'}
                            svgIcon={<ClockIcon className={cls.Navbar__icon}/>}
                        />
                    </div>
                    <InfoBox
                        title={'Телефон:'}
                        desc={'+7 (905) 405 65 65'}
                        svgIcon={<PhoneIcon className={cls.Navbar__icon}/>}
                    />
                </div>
                <div className={cls.Navbar__horizontal_line}/>
                <div className={cls.Navbar__row}>
                    <img src={logo} alt="logo"/>
                    <ul>
                        <li>Услуги</li>
                        <li>Наши работы</li>
                        <li>О магазине</li>
                        <li>Контакты</li>
                    </ul>
                    <ThemeSwitcher/>
                    <Button theme={ThemeButton.FULLFILLED}>Позвонить</Button>
                </div>
            </div>
        </nav>
    );
};

