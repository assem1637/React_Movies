import {Link} from 'react-router-dom';

export default function Navbar(props){

    return(<>

                <nav className="navbar navbar-expand-lg bg-transaprent pt-md-0 pt-2 navbar-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2" to="/">Noxe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-lg-2 mt-0 fs-5 ">


                        {props.userToken ? <>
                        
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/home">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/movies">Movies</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/tv">Tv</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/person">Person</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/myaccount">My Account</Link>
                        </li>

                        </> : ''}
                        
                        
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-lg-2 mt-0 fs-5">



                        <li className="nav-item order-lg-0 order-1 d-flex align-items-center ">
                            <a className="nav-link me-2 me-lg-0 text-light" rel="noreferrer" href="https://www.facebook.com/Assem.Saeed.Official/" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                            <a className="nav-link mx-2 mx-lg-0 text-light" rel="noreferrer" href="https://www.instagram.com/xAssomy/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                            <a className="nav-link mx-2 mx-lg-0 text-light" rel="noreferrer" href="https://twitter.com/xAssomy/" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                            <a className="nav-link mx-2 mx-lg-0 text-light" rel="noreferrer" href="https://soundcloud.com/" target='_blank'><i className="fa-brands fa-soundcloud"></i></a>
                            <a className="nav-link mx-2 mx-lg-0 text-light" rel="noreferrer" href="https://open.spotify.com/" target='_blank'><i className="fa-brands fa-spotify"></i></a>
                        </li>

                        {props.userToken ? <li onClick={()=> props.logOut()} className="nav-item">
                            <span className="nav-link Logout">Logout</span>
                        </li> : <>
                        
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/login">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/register">Register</Link>
                        </li>

                        </>}
                        
                        

                        
                        
                    </ul>
                    </div>
                </div>
                </nav>

    </>)

}