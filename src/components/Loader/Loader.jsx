import { BallTriangle } from 'react-loader-spinner';
import { LoaderSt } from './Loader.styled';


const Loader = () => {
    return (<LoaderSt>
        <BallTriangle color="#7FA4ED" height={200} width={200} />
    </LoaderSt>
        )
}

export default Loader;