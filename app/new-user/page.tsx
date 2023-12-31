import { prisma } from "@/utils/db"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"


const createNewUser = async () => {
    const user = await currentUser()
    console.log(user)
    const match = await prisma.user.findUnique({
        where: {
            clerkId: user.id as string,
        }
    })
    
    if (!match) {
        await prisma.user.create({
            data: {
                clerkId: user.id as string,
                email: user.emailAddresses[0].emailAddress,
            }  
        })
    }

    redirect("/journal")
}

const NewUser = async () => {
    const { user } = await createNewUser()
    return (
        <div>
            <h1>Welcome Home {user.id}</h1>
        </div>
    )
}

export default NewUser