import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './PhotoSection.module.scss'
import gallery from 'shared/assets/icons/gallery1.jpg'

interface PhotoSectionProps {
    className?: string;
}

export const PhotoSection: FC<PhotoSectionProps> = (props) => {
    const {className, ...otherProps} = props

    return (
        <section className={classNames(cls.PhotoSection, {}, [className])}>
            <div className={cls.PhotoSection__title}>Наши фото</div>
            <div
                className={cls.PhotoSection__img}
                style={{
                background: ` no-repeat center/80% url(${gallery})`,
                    // backgroundImage: `url(${gallery}), cover no-repeat`
            }}>
            </div>
        </section>
    );
};

