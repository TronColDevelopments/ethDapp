import img from "../assets/img/bank.png";

function Navbar (props){

    return ( 
        <nav className="navbar navbar-dark flex-top shadow p-0" style={{backgroundColor: "#000000", height: "50px"}}>
            <a href="/" className="navbar-brand col-sm-3 col-md-2 mr-0" style={{color: "#ffffff"}}>DAPP Yield Stakin &nbsp; 
                <img src={img} width="50" height="30" className="d-inline-block align-top" alt="bank" />
            </a>
            <ul className="navbar-nav px-3">
                <li className="text-nowrap d-none nav-item d-sm-block">
                    <small style={{color: "#ffffff"}}> Account Number: {props.account}</small>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;