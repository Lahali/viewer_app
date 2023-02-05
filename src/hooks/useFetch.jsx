import { useState, useEffect } from "react"

function useFetch() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasData, setHasData] = useState(true)
  const [page, setPage] = useState(1)
  const [imgPerPage, setImgPerPage] = useState(12)

  const url = `https://api.unsplash.com/photos?client_id=${
    import.meta.env.VITE_UNSPLASH_API_KEY
  }&page=${page}&per_page=${imgPerPage}`

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImages(data)
        setLoading(false)
        if (images && images.length === 0) {
          setHasData(false)
        }
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { images, loading, error, hasData, page, setPage }
}

export default useFetch
