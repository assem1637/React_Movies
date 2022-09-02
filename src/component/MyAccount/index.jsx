import userImg from '../../assets/image/user.png';


export default function MyAccount(props){

    return(<>
    
        {props.userToken ? <>
        
            <div className="w-50 mx-auto myAccount d-flex flex-column justify-content-center align-items-center">
                <img src={userImg} className='w-75' />
                <div className="text-light text-center">
                    <h3 className='fs-3'>User_Name : {`${props.userToken.age}`}</h3>
                    <h3 className='fs-3'>User_Name : {`${props.userToken.first_name} ${props.userToken.last_name}`}</h3>
                    <h3 className='fs-3'>User_Email : {`${props.userToken.email}`}</h3>
                </div>
            </div>
        
        </> : <div className="text-light fs-2"><i className="fas fa-spinner fa-spin"></i></div>}
        
        
    </>)
}