import { createRef } from "react";
import signupImage from '../../assets/images/doc.jpg';
import '../../assets/styles/Signup.css';



const Loginpage = () => {

    let email = createRef()
    let password = createRef()

    let handlelogin = (e) => {
        e.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=67AA1C331E5507A16C0744FEC261739E");

        var raw = JSON.stringify({
            email: email.current.value,
            password: password.current.value
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:4000/api/doctor/login", requestOptions)
            .then(response => response.text())
            .then((result) => console.log("result",result),
            localStorage.setItem("login", JSON.stringify({
                login:true,
                token:result.token
            }))
           
            
            )
           
            
            .catch(error => console.log('error', error));

    }


    return (<div className="login">

<img src={signupImage} alt="Signup" className="image" />
        <form action="" className="loginform" onSubmit={handlelogin} >
            <h2>Login page</h2>
            <input type="text" name="email" placeholder="Please Enter your Email" ref={email} />
            <input type="text" name="password" placeholder="Please Enter your password" ref={password} />
            <input type="submit" value="Login" className="loginbutton" />
        </form>

    </div>);
}

export default Loginpage;