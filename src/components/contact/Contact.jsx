import "./contact.scss"
import {motion} from "framer-motion"

const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};

const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
        <motion.h1>Hadi Birlikte Çalışalım</motion.h1>
        <motion.div  variants={variants}>
            <h2>Mail</h2>
            <span>UbnJr@Example.com</span>
        </motion.div>
        <motion.div  variants={variants}>
            <h2>Adres</h2>
            <span>Ankara</span>
        </motion.div>
        <motion.div  variants={variants}>
            <h2>Telefon</h2>
            <span>+1 234 4567</span>
        </motion.div>
        </motion.div>
        <div className="formContainer">
            <form>
                <input type="text" required placeholder="İsim" />
                <input type="email" required placeholder="Email" />
                <textarea rows={8} placeholder="Message"/>
                <button>Paylaş</button>
            </form>
        </div>
    </motion.div>
  );
};

export default Contact