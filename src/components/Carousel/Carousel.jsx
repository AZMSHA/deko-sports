import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousel({ settings, children }) {
  return <Slider {...settings}>{children}</Slider>;
}
