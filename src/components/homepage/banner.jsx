import React from 'react'
import { Button } from '@mui/material';
import Link from 'next/link';


const Banner = () => {
    return ( 
        <div className='w-full  h-96 flex flex-col items-center justify-center mt-16' style={{
            backgroundImage:`
            linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
        url('https://i0.wp.com/www.zedighana.com/wp-content/uploads/2020/02/Ankara-Fabric.jpg?w=1200&ssl=1')`,
        backgroundSize:'cover',
        BackgroundPosition:'center'
        }}>
            <div className='flex flex-col items-center '>
                <h1 className='text-white font-mono text-3xl text-center'>Buy an African Cloth and Get 20% off within the next 24hours</h1>
                <div className='flex items-center justify-center mt-10 self-center w-28'>
                    <Link href="/Shop" style={{color:'inherit'}}>
                    <Button className='block w-full mt-4 text-white hover:bg-blue-500 bg-black'>Shop Now</Button>
                    </Link>
            
                </div>
            </div>
        </div>
     );
}
 
export default Banner;
