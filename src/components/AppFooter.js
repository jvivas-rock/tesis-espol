import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.espol.edu.ec/" target="_blank" rel="noopener noreferrer">
          ESPOL
        </a>
        <span className="ms-1">&copy; 2022 Jonathan Rivas.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.espol.edu.ec/" target="_blank" rel="noopener noreferrer">
          Developers EC
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
