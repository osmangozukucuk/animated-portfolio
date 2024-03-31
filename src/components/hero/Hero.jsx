import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
<<<<<<< Updated upstream
      duration: 20,
=======
      duration: 10,
     
>>>>>>> Stashed changes
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
<<<<<<< Updated upstream
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
=======
      <motion.div className="textContainer"
       variants={textVariants} 
       initial="initial" 
      animate="animate">
        <motion.h1 variants={textVariants}>$PWIF</motion.h1>
        <motion.h2 variants={textVariants}>Platypus wif a hat</motion.h2>
        <motion.div variants={textVariants} className="buttons">
          <motion.button variants={textVariants}>Buy Now!</motion.button>
          <motion.button className="scroll" variants={textVariants}>Join our Discord!</motion.button>
>>>>>>> Stashed changes
        </motion.div>
      </div>
<<<<<<< Updated upstream
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
=======
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        $PWIF
      </motion.div>
        <div className="imageContainer">
            <img src="/Hero.gif" className="photo" alt="" />
        </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Hero;
