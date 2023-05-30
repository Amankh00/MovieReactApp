
import "./ContactForm.css";
const ContactForm = ()=>
{
    return(
        <>


<h1 className="Conhead"  id="Contact">Contact Us</h1>
        
         <div className="Contact" >
        
       
          <div className="contact-info">  
          <h2>Connect With Our best Team</h2>
          <p className="paT">Our team is here to help you Please conatct us to know more About us</p>
        <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        
          

        </div>


  <div className="details">
          <form action="">

         <div className="Cntc">
          
        <input type="text" required placeholder="First Name" />
        <input type="text" required placeholder="Last Name" />
        <input type="number" required placeholder="Phone Number" maxlength = "10"/>
        <input type="email" required placeholder="Your Email" />
        <input type="text" required placeholder="Your Address"id="adress"/>
        <input type="text" required placeholder="Enter Your Message" id="mesg"/>
        <input type="checkbox" id="chk" /> <p className="para"> I agree that provider can contact me at the email address or phone number Above</p>
        <input type="submit" />
         
        </div>
        </form>

        </div>
        </div>
          
        </>

    )
}

export default ContactForm;