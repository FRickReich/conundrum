import {
    BrowserRouter,
    Routes, 
    Route,
    NavLink
} from 'react-router-dom';

import { 
    Home, 
    NotFound,
    Login,
    Signup 
} from './pages';

import './App.scss';

import './i18n';

const App = () =>
{    
    return(
        <div className="App" >
            <BrowserRouter basename="/">

                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth/signup">Sign Up</NavLink>
                    </li>
                </ul>

                <div id="layout">
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/auth/login" element={ <Login /> } />
                        <Route path="/auth/signup" element={ <Signup /> } />
                        <Route path="*" element={ <NotFound /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
