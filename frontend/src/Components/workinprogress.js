import Card from './card';
import { Link } from 'react-router-dom';

const title = <img src="./404.png" height="200" alt='iSANDEx Logo'></img>


const body = <>
    <Link replace to="/" className="btn btn-warning" >Click to go back</Link>
    </>

function WIP() {
    return (
        <Card 
            bgcolor="danger"
            txtcolor="white"
            header="Developers working!"
            title={title}
            text="Solution is comming"
            body = {body}
         />
    );
}

export default WIP;

