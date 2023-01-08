import React from 'react'
import {
  CButton,
   CCard,
  CCardBody,
  CCol,
  CRow,

} from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'

import CIcon from '@coreui/icons-react'
import {  cilCloudDownload,} from '@coreui/icons'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {

  return (
    <> 
    
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Resultado Detallados
              </h4>
              <div className="small text-medium-emphasis">Periodo 2022 - Ciclo II</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
                         </CCol>
          </CRow>
          <CChart
          height={'400px'}
          width={'400px'}
          options={{ maintainAspectRatio: false }}
  type="polarArea"
  data={{
    labels: ['Planificación', 'Enseñanza', 'Tecnología', 'Satisfacción'],
    datasets: [
      {
        data: [11, 16, 7, 3],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED'],
      },
    ],
  }}
/>
        </CCardBody>
       
      </CCard>



    </>
  )
}

export default Dashboard