import Card from './card';
import { Link, Navigate } from 'react-router-dom';
import { ToolTips, Tagline, Header } from '../utils/tools';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/fir-login';
import { ButtonGroup } from 'react-bootstrap';

// After successfully logged in, display basic information about the user.
// Once landing here, I have everything to connect to the backend, and I'm sure the user is successfully logged in

function AccountSummary() {
    const [user,] = useAuthState(auth);

    const GreetingTxt = `Hello${user.displayName ? ', ' + user.displayName:''}! \nWelcome to Crypto BadBank`;
    
    return (
        <Card 
            bgcolor="danger"
            txtcolor="white"
            header=<Header/>
            title= { GreetingTxt }
            text=<Tagline/>
            body={ !user ? (
                <Navigate replace to="/login" ></Navigate>
            ) : (<>
                    <div>
                        <span>
                            <img src="./bank_logo.png" className="img-fluid" alt="Responsive Site"/>
                        </span>
                    </div>
                    <div>
                    {/* Arrange the buttons as a table to look tidier */}
                        <ButtonGroup vertical className="sm">
                            <Link data-tip data-for="depositClickTip" to="/deposit" className="btn btn-warning" >
                                Deposit
                            </Link>
                            <Link data-tip data-for="withdrawClickTip" to="/withdraw" className="btn btn-warning" >
                                Withdrawal
                            </Link>
                        </ButtonGroup>

                        <ButtonGroup vertical className="sm">
                            <Link data-tip data-for="transferClickTip" to="/transfer" className="btn btn-warning" >
                                Transfer
                            </Link>
                            <Link data-tip data-for="allDataTip" to="/alldata" className="btn btn-warning">
                                Statement
                            </Link>
                        </ButtonGroup>
                        <hr></hr>
                        <ButtonGroup vertical className="sm">
                        <Link data-tip data-for="allDataTip" to="/logout" className="btn btn-warning">
                                Logout
                        </Link>
                        </ButtonGroup>
                        <ToolTips></ToolTips>
                    </div>
                </>
            )}
         />
    );
}

export default AccountSummary;
