import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './MapSection.module.scss'
import {CustomMap} from "shared/ui/CustomMap/CustomMap";

interface MapSectionProps {
    className?: string;
}

export const MapSection: FC<MapSectionProps> = (props) => {
    const {className, ...otherProps} = props

    return (
        <div className={classNames(cls.MapSection, {}, [className])}>
            <div className={cls.MapSection__container}>
                <div className={cls.MapSection__content}><h1>Text</h1></div>
            </div>
            <div className={cls.MapSection__map}>
                <CustomMap/>
            </div>
        </div>
    );
};

