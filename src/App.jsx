import {Routes , Route , useNavigate , Navigate} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Movies from "./component/Movies";
import Tv from "./component/Tv";
import Person from "./component/Person";
import MyAccount from "./component/MyAccount";
import Details from "./component/Details";
import NotFound from "./component/NotFound";
import { useState } from 'react';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import TrendingProvider from './Store';
import {PaginationProvider} from './Store';



export default function App(){

    let navigate = useNavigate();

    let [userToken , setUserToken] = useState(null);

    function saveData() {
        
        let Token = localStorage.getItem('userToken');
        let decodeToken = jwtDecode(Token)
        setUserToken(decodeToken);

    }


    useEffect(()=> {

        if(localStorage.getItem('userToken')) {
            saveData();
        }

    } , []);


    function logOut(){

        localStorage.removeItem('userToken');
        setUserToken(null);
        navigate('/login');

    }


    function ProtectionRoutes(props) {

        if(!localStorage.getItem('userToken')){
            return <Navigate to={'/login'} />
        } else {
            return props.children
        }

    }


    function ProtectionLogin(props) {

        if(localStorage.getItem('userToken')){
            return <Navigate to={'/home'} />
        } else {
            return props.children
        }

    }

    return(<>
    
        <TrendingProvider>
            
            <Navbar userToken={userToken} logOut={logOut} />
            <PaginationProvider>
                <Routes>

                    <Route path='/' element={<ProtectionRoutes><Home /></ProtectionRoutes>} />
                    <Route path='/home' element={<ProtectionRoutes><Home /></ProtectionRoutes>} />
                    <Route path='/movies' element={<ProtectionRoutes><Movies /></ProtectionRoutes>} />
                    <Route path='/tv' element={<ProtectionRoutes><Tv /></ProtectionRoutes>} />

                    <Route path='/details' element={<ProtectionRoutes><Details /></ProtectionRoutes>}>
                        <Route path=':id' element={<ProtectionRoutes><Details /></ProtectionRoutes>} >
                            <Route path=':mediaType' element={<ProtectionRoutes><Details /></ProtectionRoutes>} />
                        </Route>
                    </Route>
                    
                    <Route path='/person' element={<ProtectionRoutes><Person /></ProtectionRoutes>} />
                    <Route path='/myaccount' element={<ProtectionRoutes><MyAccount userToken={userToken} /></ProtectionRoutes>} />
                    <Route path='/login' element={<ProtectionLogin><Login saveData={saveData} /></ProtectionLogin>} />
                    <Route path='/register' element={<ProtectionLogin><Register /></ProtectionLogin>} />
                    <Route path='*' element={<NotFound />} />

                </Routes>
            </PaginationProvider>
        </TrendingProvider>

    </>)

}