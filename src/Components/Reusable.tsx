import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { colors } from '../styles/colors';
import { ArrowRight } from '@phosphor-icons/react';

export const IconWithText = () => {
  const [isCircle, setIsCircle] = React.useState(false);

  const variants = {
    circle: { borderRadius: '50px', width: '60px', height: '60px', transition: { duration: 1 } },
    pill: { borderRadius: '50px', width: '130px', height: '60px', transition: { duration: 1 } },
  };

  useEffect(() => {
    setIsCircle(true);
  }, []);

  return (
    <motion.div
      style={{
        backgroundColor: colors.loading_secondary,
        overflow: 'hidden',
        textWrap: 'nowrap',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
      variants={variants}
      initial="pill"
      animate={isCircle ? 'circle' : 'pill'}
    >
      <AnimatePresence>
        {isCircle && (
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ color: colors.loading_primary, fontSize: 25 }}
          >
            DENTAL
          </motion.div>
        )}

        {isCircle && (
          <motion.div
            style={{ position: 'absolute' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ArrowRight size={30} weight="bold" color="#fffcef" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// images
const img1 = '/image1.jpg';
const img2 = '/image2.jpg';
const img3 = '/image3.jpg';
const img4 = '/image4.jpg';
const img5 = '/image5.jpg';

const images = [img1, img2, img3, img4, img5];

export const MyComponent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '50%' }}
        exit={{ y: '-100%', display: 'none' }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ position: 'relative', height: '300px', width: '200px' }}
      >
        <AnimatePresence>
          {images.map((img, i) => (
            <motion.img
              key={img}
              src={img}
              style={{ position: 'absolute', objectFit: 'cover', height: '100%', width: '100%' }}
              initial={{ y: '100%', rotate: i !== index ? -30 : 0 }}
              animate={{ y: i === index ? '0%' : '-100%', rotate: 0 }}
              exit={{ y: '-100%', rotate: 0 }}
              transition={{ duration: 1 }}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default MyComponent;
