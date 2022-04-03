import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export default () =>
{
    return(
        <>SIGNUP</>
    );
}

// export default () =>
// {
//     const [ showLogin, setShowLogin ] = useState(true);
//     const [ inputField, setInputField ] = useState({
//         username: '',
//         password: '',
//         passwordConfirm: ''
//     });
    
//     const { t } = useTranslation();

//     const handleSwitchToRegister = (e, state) =>
//     {
//         e.preventDefault();

//         setShowLogin(state);
//     }

//     const handleInputChange = (e) =>
//     {    
//         const value = e.target.value;

//         setInputField({
//           ...inputField,
//           [e.target.name]: value
//         });
//     }
    
//     const handleSignUp = () =>
//     {
//         axios({
//             method: 'post',
//             url: '/api/users',
//             data: {
//                 username: inputField.username,
//                 password: inputField.password,
//                 passwordConfirmation: inputField.passwordConfirm
//             }
//         }).then((response) =>
//         {
//             if(response.data.success === true)
//             {
//                 console.log(response.data.success);
//             }
//             else
//             {
//                 setErrors(response.data.errors);
//             }
//         });
//     }
    
//     const handleLogin = () =>
//     {
//         console.log(inputField);
//     }

//     return(
//         <div>
//             <h1>{ showLogin ? t('auth.login.header') : t('auth.signup.header') }</h1>
            
//             <div id="form">
//                 <input 
//                     type="text"
//                     name="username"
//                     value={inputField.username}
//                     onChange={ handleInputChange }
//                 />
//                 <br />
//                 <input
//                     type="password"
//                     name="password"
//                     value={inputField.password}
//                     onChange={ handleInputChange }
//                 />
//                 <br />
//                 {
//                     showLogin ?
//                     <>
//                         <button
//                             onClick={ handleLogin }
//                         >
//                             { t('auth.login.button') }
//                         </button>
//                         <br />

//                         { t('auth.signup.message.text') }&nbsp;
//                         <a
//                             href=""
//                             onClick={ (e) => handleSwitchToRegister(e, false) }
//                         >
//                             { t('auth.signup.message.link') }
//                         </a>
//                     </>
//                     :
//                     <>
//                         <input
//                             type="password"
//                             name="passwordConfirm"
//                             value={inputField.passwordConfirm}
//                             onChange={ handleInputChange }
//                         /><br />
//                         <button
//                             onClick={ handleSignUp }
//                         >
//                             { t('auth.signup.button') }
//                         </button>
//                         <br />

//                         { t('auth.login.message.text') }&nbsp;
//                         <a
//                             href=""
//                             onClick={ (e) => handleSwitchToRegister(e, true) }
//                         >
//                             { t('auth.login.message.link') }
//                         </a>
//                     </>
//                 }
//             </div>
//         </div>
//     );
// };
