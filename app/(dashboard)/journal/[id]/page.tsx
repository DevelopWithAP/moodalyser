import Editor from "@/components/Editor"
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntry = async (id: any) => {
  const user = await getUserByClerkId()

  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id: id
      },
    },
  })  

  return entry
}


const EntryPage = async ({params}: {params: any}) => {
  const analysisData = [
    { name: "Summary", value: "" },
    { name: "Subject", value: "" },
    { name: "Mood", value: "" },
    { name: "Negative", value: "False"}
  ]

  const entry = await getEntry(params.id)
  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className='col-span-2'>
        <Editor entry={entry} />
      </div>
      <div className='border-l border-black/10'>
        <div className='bg-blue-300 px-6 py-10'>
          <h2 className='text-2xl'>Analysis</h2>
        </div>
        <div>
          <ul>
           {analysisData.map((item, index) => (
              <li key={index} className='flex items-center justify-between px-6 py-4 border-b border-black/10'>
                <div className='text-lg'>{item.name}</div>
                <div>{item.value}</div>
              </li>
            
           ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EntryPage