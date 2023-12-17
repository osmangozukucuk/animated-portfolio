import React, { useRef } from 'react';
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React",
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "React, Facebook tarafından geliştirilen ve açık kaynaklı bir JavaScript kütüphanesidir. Web uygulamaları oluşturmak için kullanılan React, özellikle kullanıcı arayüzü geliştirmek için tasarlanmıştır. React'in temel felsefesi, bileşen tabanlı bir yapı üzerine odaklanmaktır."
  },
  {
    id: 2,
    title: "Next.js ",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Next.js, React tabanlı açık kaynaklı bir JavaScript framework'üdür ve özellikle web uygulamaları oluşturmak için tasarlanmıştır. Next.js, React uygulamalarını geliştirmek için bir dizi özellik ve iyileştirmeler ekler."
  },
  {
    id: 3,
    title: "Vanilla JS ",
    img: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Vanilla terimi, genellikle vanilla JavaScript olarak anıldığında, saf, temel JavaScript'i ifade eder. Vanilla JavaScript, herhangi bir çerçeve (framework) veya kütüphane kullanılmadan, yalnızca tarayıcı tarafından desteklenen JavaScript özellikleri kullanılarak yazılan JavaScript kodunu ifade eder."
  },
  {
    id: 4,
    title: "Php",
    img: "https://images.pexels.com/photos/3862367/pexels-photo-3862367.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "PHP (Hypertext Preprocessor), genellikle sunucu taraflı web geliştirmek için kullanılan popüler bir programlama dilidir. İlk olarak 1994 yılında Rasmus Lerdorf tarafından geliştirilen PHP, özellikle dinamik web siteleri oluşturmak için yaygın bir şekilde kullanılmaktadır."
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-600, 600]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>

            
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>Gör</button>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Öne Çıkan Bilgiler</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
