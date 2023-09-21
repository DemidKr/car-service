import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import Slider from "react-slick";
import cls from "./Carousel.module.scss";
import gallery from 'shared/assets/icons/gallery1.jpg'

interface CarouselProps {
    className?: string;
}

type Props = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;

}

function SampleNextArrow(props: Props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: Props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}


export const Carousel: FC<CarouselProps> = (props) => {
    const {className, ...otherProps} = props
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className={classNames(cls.Carousel, {}, [className])}>
            <h2> Single Item</h2>
            <Slider {...settings}>
                <div className={cls.item}>
                    <img src={gallery} alt='gallery' className={cls.img} style={{objectPosition: 'center', objectFit: 'fill'}}/>
                </div>
                <div className={cls.item}>
                    <h3>3</h3>
                </div>
                <div className={cls.item}>
                    <h3>4</h3>
                </div>
                <div className={cls.item}>
                    <h3>5</h3>
                </div>
                <div className={cls.item}>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
};

