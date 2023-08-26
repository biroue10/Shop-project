import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
export const Slider = ({ images }) => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper lg:hidden h-96 flex w-[95vw] flex-col justify-center items-center"
        >
            {images.map((slideContent, index) => (
                <SwiperSlide
                    key={slideContent} virtualIndex={index}>
                    <img
                        key={slideContent}
                        src={slideContent}
                        className={`mx-auto w-full h-full bg-gray-500 rounded-md shadow  object-center bg-center`}
                        alt={slideContent}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
