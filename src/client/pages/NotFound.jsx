import { useNavigate } from 'react-router-dom';

export default () =>
{
    const navigate = useNavigate();

    return(
        <div>
            <h1>404</h1>
            <h2>Not Found!</h2>

            <button onClick={ () => navigate(-1) }>Go Back</button>
        </div>
    );
};
