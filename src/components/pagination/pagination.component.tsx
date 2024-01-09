import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './pagination.component.scoped.scss'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  currentPage?: number
  totalPages?: number
  showPages?: number
  onPageChange?: (page: number) => void
}

export default ({ currentPage = 1, totalPages = 1, showPages = 5, onPageChange, className = '', style }: Props) => {
  const [page, setPage] = useState(currentPage)
  const navigate = useNavigate()
  const { search, pathname } = useLocation()

  useEffect(() => {
    setPage(currentPage)
  }, [currentPage])

  useEffect(() => {
    const searchParams = new URLSearchParams(search)
    const page = searchParams.get('page')
    if (page) {
      const newPageQuery = parseInt(page) || 1
      setPage(newPageQuery)
      return () => {
        searchParams.delete('page')
      }
    }
  }, [search])

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) {
      return
    }
    setPage(newPage)
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', newPage.toString())
    navigate(pathname + '?' + searchParams.toString())
    if (onPageChange && typeof onPageChange === 'function') {
      onPageChange(newPage)
    }
  }

  const showDotMax = () => {
    const half = Math.floor(showPages / 2)
    return currentPage + half < totalPages
  }

  const showDotMin = () => {
    const half = Math.floor(showPages / 2)
    return currentPage - half > 1
  }

  const canShow = (actualPage: number) => {
    const half = Math.floor(showPages / 2)
    return actualPage === currentPage || (actualPage >= currentPage - half && actualPage <= currentPage + half)
  }

  return (
    <div className={`pagination-wrapper ${className}`} style={style}>
      <ul className="pagination">
        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
          <button onClick={() => handlePageChange(page - 1)}>
            <i className="fa-regular fa-chevron-left"></i>
          </button>
        </li>

        {showDotMin() && (
          <li className="disabled">
            <button onClick={() => null}>
              <i className="fa-regular fa-ellipsis"></i>
            </button>
          </li>
        )}

        {Array.from({ length: totalPages }, (_, i) => i + 1)?.map(
          (p) =>
            canShow(p) && (
              <li key={p} className={p === page ? 'active' : ''}>
                <button onClick={() => handlePageChange(p)}>{p}</button>
              </li>
            ),
        )}

        {showDotMax() && (
          <li className="disabled">
            <button onClick={() => null}>
              <i className="fa-regular fa-ellipsis"></i>
            </button>
          </li>
        )}

        <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
          <button onClick={() => handlePageChange(page + 1)}>
            <i className="fa-regular fa-chevron-right"></i>
          </button>
        </li>
      </ul>
    </div>
  )
}
