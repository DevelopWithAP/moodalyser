import { prisma } from "@/utils/db"
import { getUserByClerkId } from "@/utils/auth";
import NewEntryCard from "@/components/NewEntryCard";
import EntryCard from "@/components/EntryCard";
import Link from "next/link";
import { analyse } from "@/utils/ai";

const getEntries = async () => {
    const user = await getUserByClerkId();

    const entries = await prisma.journalEntry.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        },
    })

    return entries
}

const JournalPage = async () => {
    const entries = await getEntries();

    return (
        <div className='bg-slate-400/30'>
            <h1 className='text-3xl mb-8 font-bold'>Journal</h1>
            <div className='grid grid-cols-3 gap-4'>
                <NewEntryCard />
                {entries.map(entry => (
                    <Link href={`/journal/${entry.id}`} key={`/journal/${entry.id}`}>
                        <EntryCard entry={entry} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default JournalPage