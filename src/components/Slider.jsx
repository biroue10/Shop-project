import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
export const Slider = ({ images }) => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper lg:hidden "
        >
            {images.map((slideContent, index) => (
                <SwiperSlide
                    key={slideContent} virtualIndex={index}>
                    <img
                        key={slideContent}
                        src={slideContent}
                        className={`mx-auto bg-gray-500 rounded-md shadow w-32 h-32 object-center bg-center`}
                        alt=""
                        onClick={() => handleThumbnailClick(slideContent)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
