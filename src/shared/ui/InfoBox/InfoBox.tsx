import React, {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './InfoBox.module.scss'
import PinIcon from 'shared/assets/icons/pin.svg'
import ClockIcon from 'shared/assets/icons/clock.svg'
import PhoneIcon from 'shared/assets/icons/phone.svg'



interface InfoBoxProps {
    className?: string;
    title: string;
    desc: string;
    svgIcon: JSX.Element;
}

export const InfoBox: FC<InfoBoxProps> = (props) => {
    const {
        className,
        title,
        desc,
        svgIcon,
        ...otherProps
    } = props

    return (
        <div className={classNames(cls.InfoBox, {}, [className])}>
            {svgIcon}
            <div className={cls.InfoBox__text}>
                <div className={cls.InfoBox__text__title}>{title}</div>
                <div>{desc}</div>
            </div>
        </div>
    );
};

