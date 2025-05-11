import { useState } from 'react'
import Main from './layout/Main'
import Home from './pages/Home'
import Bookings from './pages/Bookings'
import Blogs from './pages/Blogs'
import LawyerDetails from './pages/LawyerDetails'
import ErrorPage from './pages/ErrorPage'
import LoadingSpinner from './ui/LoadingSpinner'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [lawyerId, setLawyerId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onLawyerSelect={(id) => {
          setLawyerId(id)
          setCurrentPage('lawyer-details')
        }} />
      case 'bookings':
        return <Bookings />
      case 'blogs':
        return <Blogs />
      case 'lawyer-details':
        return <LawyerDetails licenseNumber={lawyerId} />
      default:
        return <ErrorPage />
    }
  }

  return (
    <Main onNavigate={setCurrentPage}>
      {isLoading ? <LoadingSpinner /> : renderPage()}
    </Main>
  )
}

export default App
