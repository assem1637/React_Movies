import notFount from '../../assets/image/notFound.png';

export default function NotFound(){

    return(<>

       <div className='w-100 my-5 NotFound d-flex justify-content-center align-items-center'>
            <div className='my-5 d-flex justify-content-center align-items-center'>
                    <img src={notFount} alt="" className='w-75 mb-5' />
            </div>
       </div>

    </>)

}