import { useState } from 'react';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import img1 from "../../assets/v-10.jpg";
import img2 from "../../assets/v-9.webp";
import img3 from "../../assets/v-8.jpg";
import img4 from "../../assets/v-7.jpg";

const slides = [
  {
    image: img1,
    title: "Connect with Opportunities",
    description: "Find the perfect volunteering opportunities that match your passion.",
    buttonText: "Explore Now",
    link: "/allPosts",
  },
  {
    image: img2,
    title: "Together We Serve",
    description: "Collaborate with like-minded individuals to achieve greater goals.",
    buttonText: "Join Us",
    link: "/allPosts",
  },
  {
    image: img3,
    title: "Your Skills, Their Impact",
    description: "Use your skills to support causes that need your help the most.",
    buttonText: "Learn More",
    link: "/addPost",
  },
  {
    image: img4,
    title: "Make a Difference Today",
    description: "Join hands to create meaningful change in your community.",
    buttonText: "Get Involved",
    link: "/addPost",
  },
];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    drag: false,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
    },
    created(slider) {
      const autoplay = setInterval(() => {
        if (slider.track) {
          slider.next();
        }
      }, 3000);

      return () => {
        clearInterval(autoplay);
      };
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full h-[86vh] -mt-16">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`keen-slider__slide flex items-center justify-center relative ${
            currentSlide === index ? 'active' : ''
          }`}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={slide.image}
            alt={slide.title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative text-center text-white px-6">
            <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
            <p className="text-lg mb-4">{slide.description}</p>
            <a
              href={slide.link}
              className="bg-orange-500 text-white px-6 py-2 rounded-3xl hover:bg-orange-600 transition"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
