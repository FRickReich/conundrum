import {
    BrowserRouter,
    Routes, 
    Route
} from 'react-router-dom';

import { Home, NotFound } from './pages';

import './App.scss';

const App = () =>
{    
    return(
        <div className="App" >
            <BrowserRouter>
                <div id="layout">
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="*" element={ <NotFound /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
