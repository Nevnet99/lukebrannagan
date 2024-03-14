import { PageSection } from '@components/shared/PageSection';
import { Testimonial } from '@components/shared/Testimonial';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TestimonialsStoryblok } from '../../types/component-types-sb';
import { useCursorStore } from '../../stores/cursor';

export type TTestimonials = {
  blok: TestimonialsStoryblok;
};

export const Testimonials = ({ blok }: TTestimonials) => {
  const { setCursorType } = useCursorStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselLength = blok.testimonials.length;

  const { testimonials } = blok;

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % carouselLength);
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + carouselLength) % carouselLength);
  };

  return (
    <PageSection className="flex flex-col overflow-hidden pb-0 border-b-0">
      <motion.ul
        className="flex "
        animate={{
          x: `${activeIndex * -100}%`,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial._uid} {...testimonial} />
        ))}
      </motion.ul>
      <div className="flex w-full justify-between items-center border-2 border-black border-x-0">
        <button
          className="border-r-2 border-black p-4"
          onClick={prevSlide}
          type="button"
          // ! This is a false positive, the button is not missing a key event this is purely visual
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          onMouseOver={() => setCursorType('CLICKABLE')}
          onMouseLeave={() => setCursorType('DEFAULT')}
        >
          <svg
            className="transform rotate-180 "
            width="51"
            height="29"
            viewBox="0 0 51 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.5H49M49 14.5L37.6923 1M49 14.5L37.6923 28"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
          <span className="sr-only">Next slide</span>
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${
                index === activeIndex ? 'bg-primary' : 'bg-zinc-200'
              } w-6 h-6 md:w-2 md:h-2 rounded-full`}
              // ! see above comment
              // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
              onMouseOver={() => setCursorType('CLICKABLE')}
              onMouseLeave={() => setCursorType('DEFAULT')}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="border-l-2 border-black p-4"
          onClick={nextSlide}
          // ! see above comment
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          onMouseOver={() => setCursorType('CLICKABLE')}
          onMouseLeave={() => setCursorType('DEFAULT')}
        >
          <svg
            width="51"
            height="29"
            viewBox="0 0 51 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.5H49M49 14.5L37.6923 1M49 14.5L37.6923 28"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
          <span className="sr-only">Previous slide</span>
        </button>
      </div>
    </PageSection>
  );
};
