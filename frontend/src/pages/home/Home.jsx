import { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';

const Home = () => {
    const [checked, setChecked] = useState(false);
    const { selectedConversation } = useConversation();

    useEffect(() => {
        return () => setChecked(false)
    }, [selectedConversation?._id])

    return (
        <div className='home flex lg:h-[600px] md:h-[600px] h-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 relative'>

            <div className='open-sidebar-btn' onClick={() => setChecked(true)}>
                <TiMessages className='text-2xl absolute top-4 right-4 z-50' />
            </div>


            <div className={`links-container ${checked ? 'right-0' : 'right--300'}`}>
                <div className='flex items-center justify-between w-full sidebar-head overflow-hidden'>
                    <img src="https://res.cloudinary.com/deq0hxr3t/image/upload/v1714819661/GossipGrid-ideogram9-removebg-preview_xxa1qy.png" alt="" width={80} height={80} />

                    <div className='close-sidebar-btn' onClick={() => setChecked(false)}>
                        <i class="fa-solid fa-xmark text-xl"></i>
                    </div>
                </div>

                <Sidebar />
            </div>
            <MessageContainer />
        </div>
    )
}

export default Home
