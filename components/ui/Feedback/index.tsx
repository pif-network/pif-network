import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Avatar } from 'antd';
import { ChevronRight } from '../svgs/Icons';
import DoubleQuoteSm from '~/assets/feedback/feedback_double-quote-sm.png';
import DoubleQuoteLg from '~/assets/feedback/feedback_double-quote-lg.png';
import LineLG from '~/assets/feedback/feedback_line-lg.png';
import MenteeAvatar from '~/assets/feedback/feedback_avatar.png';
import data from './data';
import style from './index.module.css';

const Feedback = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const prevSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };
  const nextSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div>
      <div className="grid text-black font-lora font-semi-bold md:text-title-sm sm:text-heading-sm md:pb-11 sm:pb-8 justify-items-center sm:word-[-7px] md:word-[-10px]">
        Mentee nói gì về &lt;product_name&gt;?
      </div>
      <div className="flex justify-center">
        <div className="relative bg-gray-50 justify-items-center overflow-hidden rounded-2xl md:h-[426px] md:w-[1068px] sm:w-[314px] sm:h-[126px]">
          <div className={style.section}>
            {people.map((person, personIndex) => {
              const { id, image, name, job, quote, description } = person;
              let position = 'nextSlide';
              if (personIndex === index) {
                position = 'activeSlide';
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = 'lastSlide';
              }
              return (
                <article
                  className={`${style.article} 
                  ${position == 'lastSlide' ? style.lastSlide : ''} 
                  ${position == 'activeSlide' ? style.activeSlide : ''} 
                  ${position == 'nextSlide' ? style.nextSlide : ''}`}
                  key={id}
                >
                  <div>
                    <Image
                      src={DoubleQuoteLg.src}
                      className="absolute hidden md:inline-block md:top-[63px] md:left-[54px]"
                      alt="Double QuoteLg"
                      width={50}
                      height={5}
                    />
                    <Image
                      src={DoubleQuoteSm.src}
                      className="absolute md:hidden sm:top-[19px] sm:left-[15px]"
                      alt="DoubleQuoteSm"
                      width={15}
                      height={5}
                    />

                    <div className="grid items-center justify-center absolute md:top-[83px] md:left-[121px] md:w-[830px] sm:top-[24px] sm:left-[36px]">
                      <p className="text-black font-lora font-semi-bold md:text-[32px] md:leading-10 md:word-[-8px] sm:word-[-3px] sm:text-[10px] text-left">
                        {quote}
                      </p>
                      <p className="text-gray-400 font-manrope font-regular text-semi-bold md:text-heading-sm sm:text-[8px] md:word-[0.8px] sm:word-[-0.3px] text-left">
                        {description}
                      </p>
                    </div>
                  </div>

                  <Image
                    src={LineLG.src}
                    className="absolute sm:hidden md:inline-block md:top-[287px] md:left-[88px] sm:top-[85px] sm:left-[26px] "
                    alt="Line LG"
                    width={900}
                    height={5}
                  />
                  <Image
                    src={LineLG.src}
                    className="absolute md:hidden md:top-[287px] md:left-[88px] sm:top-[85px] sm:left-[26px]"
                    alt="Line LG"
                    width={270}
                    height={5}
                  />

                  <div className="flex flex-row justify-between">
                    <div>
                      <Avatar
                        src={image}
                        className="absolute hidden md:inline-block md:top-[306px] md:left-[121px] md:w-[64px] md:h-[64px]"
                      ></Avatar>
                      <Avatar
                        src={image}
                        className="absolute md:hidden sm:top-[91px] sm:left-[34px] sm:w-[19px] sm:h-[19px]"
                      ></Avatar>

                      <div className="absolute md:top-[316px] md:left-[195px] sm:top-[92px] sm:left-[55px]">
                        <p className="text-primary-900 font-lora font-semi-bold text-start md:text-sub-heading sm:text-[7px] md:word-[-6px] sm:word-[-2px]">
                          {name}
                        </p>
                        <p className="text-gray-600 font-manrope text-start md:text-caption sm:text-[4px] md:word-[-0.8px] sm:word-[-0.3px]">
                          {job}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex">
                      <button className="prev" onClick={prevSlide}>
                        <ChevronRight
                          colour="black"
                          className="transform rotate-180 absolute hidden md:inline-block md:left-[840px] md:top-[333px]"
                        ></ChevronRight>
                      </button>
                      <button className="next" onClick={nextSlide}>
                        <ChevronRight
                          colour="black"
                          className="absolute hidden md:inline-block md:left-[884px] md:top-[333px]"
                        ></ChevronRight>
                      </button>

                      <button className="prev" onClick={prevSlide}>
                        <ChevronRight
                          colour="black"
                          className="transform rotate-180 absolute sm:w-[6px] md:hidden sm:left-[247px] sm:top-[90px]"
                        ></ChevronRight>
                      </button>
                      <button className="next" onClick={nextSlide}>
                        <ChevronRight
                          colour="black"
                          className="absolute md:hidden sm:w-[6px] sm:left-[260px] sm:top-[90px]"
                        ></ChevronRight>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
