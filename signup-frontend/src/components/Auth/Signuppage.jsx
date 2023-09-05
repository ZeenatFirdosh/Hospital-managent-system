import { createRef, useRef } from 'react';
import signupImage from '../../assets/images/doc.jpg';
import '../../assets/styles/Signup.css';
import { useNavigate } from 'react-router-dom';

const Signuppage = () => {
let navigate =useNavigate()

    let name = createRef()
    let email= createRef()
    let password = createRef()
    
    
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Send the signup data to your backend API
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=67AA1C331E5507A16C0744FEC261739E");
        
        var raw = JSON.stringify({
          name:name.current.value,
          email:email.current.value,
          password:password.current.value
          
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:4000/api/doctor/adddoctor", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        navigate('/doctorlogin')
        // ...
    
      };
    
      return (
        <div className="form-container">
          <img src={signupImage} alt="Signup" className="image" />
          <form className="form" onSubmit={handleSubmit}  >
          <h2>Sign Up</h2>
            <input type="text" name="name" placeholder="First Name" className="input" ref={name} />
            <input type="email" name="email" placeholder="Email" className="input" ref={email} />
            <input type="password" name="password" placeholder="Password" className="input" ref={password} />
            <button type="submit" className="button"  >Sign Up</button>
          </form>
        </div>
      );
    };
 
export default Signuppage;