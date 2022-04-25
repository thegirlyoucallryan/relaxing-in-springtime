import CanvasModule from "./CanvasModule";
import styles from '../styles/contact.module.css'
import {  useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Navigation from "./ui/Navigation";




const Contact = () => {

    const [sent, setSent] = useState(false);
    
    

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8fupon1', 'template_sydkecs', form.current, 'mJt9tkBrPbyP96zuD')
      .then((result) => {
          setSent(true);
      
        
      }, (error) => {
          console.log(error.text);
      });
     
      form.current.reset();
     
  };
  


    window.addEventListener('mousedown', e => e.preventDefault());



    function handleEnter(event) {
        if (event.keyCode === 13) {
          const form = event.target.form;
          const index = Array.prototype.indexOf.call(form, event.target);
          form.elements[index + 1].focus();
          event.preventDefault();
        }
      }


  return(
    <CanvasModule>
        <div className={styles.contact}>
        <Navigation title='Contact' />


    <div className={styles.container}>
        <div className={styles.contactInfo}>
            <h2 > Ryanmarie.hartley@gmail.com</h2>
            <h2> -------------------------------</h2>
            <h2 >(407) 744 - 3600</h2>
            
        </div>

        
{        !sent ? (<div className={styles.formDiv}>
           <div className={styles.formActual}>
            
                 <form ref={form} onSubmit={sendEmail} >
                <h2 style={{textAlign: 'center'}}>Contact form</h2>
                <label> Name* <input  onKeyDown={handleEnter}  type='text' name="Name" autoFocus required />
                    </label>
                    <label>
                    Email* <input  onKeyDown={handleEnter}  type="text" name="Email" required />
                    </label>
                    <label>
                    Message* <textarea   onKeyDown={handleEnter}  rows={5} cols={6} name="Message"  className="message" required />
                    </label>
                    
                    <input type="submit" value="Send" />
                
            </form> 
           
            
            </div>
        </div>) : (<div className={styles.formDiv}><h2>Thank you for reaching out;<br/>  I look forward to your message.</h2></div>)}
        </div>
        </div>

        
    </CanvasModule>
  )
};

export default Contact;