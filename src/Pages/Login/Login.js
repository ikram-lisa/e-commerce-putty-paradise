import React, {useContext} from 'react'
import './login.css';
import { auth, provider} from '../../FireBase/firebase';
import { StateContext } from '../StateProvider/StateProvider';

const Login = () => {
    const [state, dispatch] = useContext(StateContext)
     
       
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(response => {
           dispatch({
               type:"SET-USER",
               user:response.user
           })
        })
        .catch( error => {
            alert(error)
        })
    }
   
    return (
       <div className="parent-flex">
            <div className="block-auth">
               <div className="container-fluid">
                    <i class="fab fa-slack" style={{fontSize:"2rem",color:"#354947",paddingRight:"10px",verticalAlign:"center"}}></i><span style={{verticalAlign:"center"}}>Potty Paradise</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color:"#f8f9fa",borderColor:"#f8f9fa"}}></button>
                    <button onClick={signIn}>Connexion</button>
                </div>
            </div>
       </div>
    )
}

export default Login;
