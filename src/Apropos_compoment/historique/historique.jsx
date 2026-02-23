import {motion} from "framer-motion";
import "./historique.css"

export default function Historique(){
    
    
    return(
        <>
         
         <motion.h1
          whileHover={{scale: 1.4,  }} 
          transition={{type: 'keyframes', stiffness:100, duration: 0.5}}
          style={{fontSize:'30px',cursor:'pointer',display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        
        > <hr id="horizontal_line"/> <br />HISTORIQUE <hr id="horizontal_line"/> <br /></motion.h1>

        <motion.div 
           className="histry"
        
        >
          
          <motion.p initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ x: 40 ,y: 40,z: 40 }}
            transition={{ duration: 1 }}
          >l’agence APEEFY a été créée en 2025 par un groupe d’experts passionnés du numérique sous la coordination de l'entreprise AMT Systems Engineering. Fondée dans un contexte de transformation numérique croissante, APEEFY est née de la volonté de proposer des solutions digitales innovantes et accessibles.</motion.p>
        </motion.div>
         
        </>
    )
}