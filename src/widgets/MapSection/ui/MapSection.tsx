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
                <div className={cls.MapSection__content}>
                    <h2>Где мы?</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</div>
                </div>
            </div>
            <div className={cls.MapSection__map}>
                <CustomMap/>
            </div>
        </div>
    );
};

