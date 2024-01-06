const buildUrl = (path: string) => {
    return window.location.origin + path
}

export const createNewEntry = async () => {
  const res = await fetch( new Request( buildUrl('/api/journal'), {
    method: 'POST',
  }))

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

export const updateEntry = async (id: any, content: any) => {
  const res = await fetch( new Request( buildUrl(`/api/journal/${id}`), {
    method: 'PATCH',
    body: JSON.stringify({ content }),
  }))

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
} 