import { motion } from "framer-motion";
import "./about.css"

 export default function About(){
    return(
        <>
            <motion.h1
        id="apropos"
        whileHover={{ scale: 1.4 }}
        transition={{ type: 'keyframes', stiffness: 100, duration: 0.5 }}
        style={{ fontSize: '30px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        
      ><hr id="horizontal_line"/> <br />A PROPOS DE APEEFY<hr id="horizontal_line"/> <br /></motion.h1>
      <motion.div
        className="etoile-row"
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="divetoile"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ y: -40 }}
          transition={{ duration: 1 }}
        >
          <img src="/etoile.png" alt="Etoile gauche" className="etoile" />
        </motion.div>
        <motion.div
          className="about-content"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ x: 40 ,y: 40,z: 40 }}
          transition={{ duration: 1 }}
        >
          <p>
            APEEFY est une agence de developpement web et mobile de reference, aidant les clients à propulser leurs projets grâce à l'expertise de ses équipes.
          </p> 
        </motion.div>
        <motion.div
          className="divetoile"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ x: 40 ,y: 40 ,z: 40 }}
          transition={{ duration: 1 }}
        >
          <img src="/etoile.png" alt="Etoile droite" className="etoile" />
        </motion.div>
      </motion.div>
        </>
    )
 }
