import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css"

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover object-top object-center rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {truncateText(description, 140)}
          </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to code
          repositories and live demos. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-20 seeswiper'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
         autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide on small screens
            768: { slidesPerView: 2 }, // 2 slides on medium screens
            1152: { slidesPerView: 3 }, // 3 slides at 1152px and above
          }}
          className='flex flex-wrap gap-7'
        >
          {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`}>
              <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className='bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]'
                >
                  <div className='relative w-full h-[230px]'>
                    <img
                      src={project.image}
                      alt='project_image'
                      className='w-full h-full object-cover object-top object-center rounded-2xl'
                    />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                      <div
                        onClick={() => window.open(project.source_code_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                      >
                        <img
                          src={github}
                          alt='source code'
                          style={{background: '#fff',
                            borderRadius: '50%'}}
                          className='w-1/2 h-1/2 object-contain'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>
                      {truncateText(project.description, 140)}
                    </p>
                  </div>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <p key={`${project.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                </Tilt>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>  {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev custom-swiper-nav top-[-20px] left-[20px]"></div>
        <div className="swiper-button-next custom-swiper-nav top-[-20px] left-[60px]"></div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");






