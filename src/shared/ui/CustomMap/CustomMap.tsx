import React, {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './CustomMap.module.scss'
import {Map, Placemark} from "@pbe/react-yandex-maps";

interface CustomMapProps {
    className?: string;
}

export const CustomMap: FC<CustomMapProps> = (props) => {
    const {className, ...otherProps} = props

    return (
        // <div className={classNames(cls.CustomMap, {}, [className])}>
            <Map
                style={{ width: '100%', height: '100%'}}
                defaultState={{ center: [46.562867, 39.634770], zoom: 15, controls: ['geolocationControl', ] }}
                options={{
                    copyrightLogoVisible: true,
                    copyrightUaVisible: false,
                    copyrightProvidersVisible: false,
                    suppressMapOpenBlock: false,
                }}
            >
                <Placemark geometry={[46.562867, 39.634770]}></Placemark>
            </Map>
        // </div>
    );
};

