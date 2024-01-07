import { UserButton } from '@clerk/nextjs';
import { ReactNode } from 'react';


type Props = {
    children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    return <div className='h-screen w-screen relative'>
        <aside className='absolute w-[200px] top-0 left-0 h-full border-r border-slate/30'>
            Mood
        </aside>
        <div className='h-full ml-[200px]'>
            <header className='h-[60px] border-b border-black/10'>
                <div className='h-full w-full px-6 flex items-center justify-end'>
                    <UserButton />
                </div>
            </header>
            <div className='h-[calc(100vh - 60px)]'>{ children }</div>
        </div>
    </div>
}

export default DashboardLayout