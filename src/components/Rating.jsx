import React from "react";

const Rating = ({ rating }) => {
    const fullStars = Math.round(rating);

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            // Full star
            stars.push(
                <svg
                    key={i}
                    className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
            );
        } else if (i === fullStars) {
            // Half star
            stars.push(
                <svg
                    key={i}
                    className="w-5 h-5 text-gray-700 fill-current dark:text-gray-500"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
            );
        } else {
            // Unhighlighted star
            stars.push(
                <svg
                    key={i}
                    className="w-5 h-5 text-gray-400 fill-current dark:text-red-300"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
            );
        }
    }

    return <div className="flex mt-2 item-center">{stars}</div>;
};

export default Rating;
