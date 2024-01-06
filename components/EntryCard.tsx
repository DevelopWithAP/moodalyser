type Entry = {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  content: string
  analysis?: string
};

type Props = {
  entry: Entry;
};


const EntryCard = (entry: Props) => {
  const date = new Date(entry.entry.createdAt).toLocaleDateString('en-UK', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <div className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow'>
      <div className='px-4 py-4 sm:px-6'>{date}</div>
      <div className='px-4 py-5 sm:px-6'>{entry.entry.content}</div>
    </div>
  )
}

export default EntryCard