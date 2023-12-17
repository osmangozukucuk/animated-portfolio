import "./services.scss"
import React, { useRef } from "react";
import { motion, useInView} from "framer-motion"

const variants = {
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      straggerChildren:0.1,
    },
  },
};

const Services = () => {

  const ref = useRef()

   const isInView = useInView(ref,{margin:"-100px"})


  return (
    <motion.div 
    className="services" 
    variants={variants} 
    initial="initial" 
    ref={ref} 
    animate={isInView && "animate"} 
    >
      <motion.div className="textContainer" variants={variants}>
        <p>Ubn-Jr ~ You Be Not Junior</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Projeleriniz</motion.b> İçin
            </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Eşsiz</motion.b> Fikirler.
            </h1>
            <button>Ne Yapıyoruz?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Markalaşma</h2>
          <p>
          Şirketimizde markalaştırma sürecimizi benzersiz bir 
          kimlik oluşturarak, hedef kitle odaklı çözümler 
          geliştirme, tutarlı iletişim ve sürekli inovasyon üzerine 
          kurduk. Müşteri memnuniyetine odaklanarak, değer
          katmaya ve uzun vadeli bağlar kurmaya devam ediyoruz.

      
          </p>
          <button>Git</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Proje Oluşturma</h2>
          <p>
          Net ve ölçülebilir hedeflere odaklanarak, uyumlu 
          bir ekip oluşturuyor ve detaylı bir zaman 
          çizelgesiyle projeyi planlıyoruz. Şeffaf
          iletişim stratejileriyle bilgi akışını güçlendiriyor,
          potansiyel riskleri önceden belirleyip sürekli
          değerlendirme ve veri analiziyle performansı 
          artırıyoruz.Bu stratejilerle projelerimizi başarıyla 
          yönetiyor ve hedeflerimize ulaşıyoruz.

          
          </p>
          <button>Git</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Öğrenim</h2>
          <p>
          Proje tabanlı öğrenme, öğrencilere teorik bilgiyi 
          pratiğe dönüştürme fırsatı sağlar. Öğrenciler, 
          projeler aracılığıyla problem çözme, işbirliği 
          ve iletişim becerilerini geliştirirler. 
          Bu yöntem, öğrencilere öğrenme süreçlerini 
          yönlendirme ve disiplinlerarası bakış açısı 
          kazanma imkanı sunar.

         
          </p>
          <button>Git</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Bilgi Aktarımı</h2>
          <p>
          Bilgiden bilmeyene geçiş, bir öğrenme zinciridir. 
          Bilgi paylaşımı, öğretmenlerden öğrencilere ve 
          birbirine doğru devam eder. Eğitmenler, deneyim 
          ve bilgilerini paylaşarak öğrencilerin gelişimine 
          katkı sağlar. Bu süreç, etkileşimli bir öğrenme 
          topluluğunu oluşturur ve bilgi, farklı bakış 
          açılarıyla zenginleşir.

          
          </p>
          <button>Git</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services