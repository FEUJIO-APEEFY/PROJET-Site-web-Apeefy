import { motion } from 'framer-motion';
import './devis.css';
import  { useState } from 'react';
// import { ToastContainer,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'


export default function Devis(){
 const[formData , setFormData ]=useState({
  name:"",
  email:"",
  telephone:"",
  pays:"",
  description:"",
 });
 const [touched, setTouched]=useState({
  name:false,
  email:false,
  telephone:false,
  pays:false,
  description:false,
 });
 const handleBlur = (e) =>{
  setTouched({...touched, [e.target.name]:true});
 };
 const[errors,setErrors]= useState({});
 const nomPattern = /^[^\d]+$/;
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const telephonePattern = /^\d+$/;
 const paysPattern = /^[^\d]+$/;
 const validation = () =>{
  const newErrors = {};
  if (!formData.name.trim()) {
    newErrors.name = "Le nom est requis";
  } else if(!nomPattern.test(formData.name)){
    newErrors.name = "Le nom ne doit pas contenir de chiffre";
  } 
  if (!formData.email.trim()) {
    newErrors.email = "L'email est requis";
  } else if(!emailPattern.test(formData.email)){
    newErrors.email = "Adresse email invalide";
  }
  if (!formData.telephone.trim()) {
    newErrors.telephone = "Le numero de telephone est requis";
  } else if(!telephonePattern.test(formData.telephone)){
    newErrors.telephone = "Le numero de telephone doit contenir uniquement les chiffres";
  }
  if (!formData.pays.trim()) {
    newErrors.pays = "votre pays est requis";
  } else if(!paysPattern.test(formData.pays)){
    newErrors.pays = "Le nom du pays ne doit pas contenir de chiffre";
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
 };
 const handleChange = (e) => {
  setFormData(prev => {
    const updated = { ...prev, [e.target.name]: e.target.value };
    // Validation à chaque changement
    const newErrors = {};
    if (!updated.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if(!nomPattern.test(updated.name)){
      newErrors.name = "Le nom ne doit pas contenir de chiffre";
    }
    if (!updated.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if(!emailPattern.test(updated.email)){
      newErrors.email = "Adresse email invalide";
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Le numero de telephone est requis";
    } else if(!telephonePattern.test(formData.telephone)){
     newErrors.telephone = "Le numero de telephone doit contenir uniquement les chiffres";
    }

    if (!formData.pays.trim()) {
      newErrors.pays = "votre pays est requis";
    } else if(!paysPattern.test(formData.pays)){
      newErrors.pays = "Le nom du pays ne doit pas contenir de chiffre";
    }
    setErrors(newErrors);
    return updated;
  });
 };
 const handleSubmit = (e) =>{
  e.preventDefault();
  if(validation()){
   
    setFormData({
      name:"",
      email:"",
      telephone:"",
      pays:"",
      description:"",
    }); 
  } 
 };

    return(
        <>
       
        <motion.h1
         whileHover={{scale: 1.4,  }} 
         transition={{type: 'keyframes', stiffness:100, duration: 0.5}}
         style={{fontSize:'30px',cursor:'pointer',display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        ><hr id="horizontal_line"/> <br />COMMENCONS VOTRE PROJET<hr id="horizontal_line"/> <br /></motion.h1>
        <div className='devis'>
          <form onSubmit={handleSubmit}> 
         <div> 
          <label htmlFor="name" className='zone'>NOM</label>
          <input 
            type="text"                        
            name="name"
            value={formData.name}             
            onChange={handleChange}             
            className='zone'
            placeholder='votre nom'
            onBlur={handleBlur}
            required></input>
            {touched.name &&errors.name && <div className='alert'>
            <p> <i>{errors.name}</i></p></div>
          }
          </div>
          
          <div>
            <label htmlFor="password" className='zone'>TELEPHONE</label>
            <input 
            type="texte"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className='zone'
            placeholder='votre tel'
            onBlur={handleBlur}
            required
          />
            {touched.telephone &&errors.telephone && <div className='alert'>
            <p> <i>{errors.telephone}</i></p></div>
          }
         </div> 
         <div>
            <label htmlFor="email" className='zone'>EMAIL</label>
            <input 
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='zone'
            placeholder='votre email'
            onBlur={handleBlur}
            required
          />
            {touched.email &&errors.email && <div className='alert'>
            <p> <i>{errors.email}</i></p></div>
          }
          </div>
          <div>
          <label htmlFor="name" className='zone'>PAYS</label>
          <input 
            type="text"
            className='zone'
            name="pays"
            value={formData.pays}
            onChange={handleChange}
            placeholder='votre pays'
            onBlur={handleBlur}
            required
          />
            {touched.pays &&errors.pays && <div className='alert'>
            <p> <i>{errors.pays}</i></p></div>
          }
          </div>
            
            <label htmlFor="">DECRIVEZ VOTRE PROJET</label>
            <textarea 
               name="description" 
               value={formData.description}
               placeholder='Decrivez clairement votre projet...'
               onChange={handleChange}
               id='textarea'
               required
            ></textarea>
            <button className='btn' >ENVOYER</button>
          </form>
        </div>
        </>
    );

}

