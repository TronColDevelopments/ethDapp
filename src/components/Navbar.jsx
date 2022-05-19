import img from "../assets/img/bank.png";

function Navbar (props){

    return ( 
        <nav className="navbar navbar-dark flex-top shadow p-0" style={{backgroundColor: "#000000", height: "50px"}}>
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#" style={{color: "#ffffff"}}>DAPP Yield Stakin &nbps;
                <img src={img} width="50" height="30" className="d-inline-block align-top" alt="bank" />
            </a>
            <ul className="navbar-nav px-3">
                <li className="text-nowrap d-none nav-item d-sm-block">
                    <small style={{color: "#ffffff"}}> Account Number</small>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;