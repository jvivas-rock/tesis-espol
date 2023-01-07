import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'

const WidgetsDropdown = () => {
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>
              Matematicas
            </>
          }
          title="Facultad"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Jurisprudencia</CDropdownItem>
                <CDropdownItem>Administración</CDropdownItem>
                <CDropdownItem>Filosofia</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
             Todos
            </>
          }
          title="Programa"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Programa A</CDropdownItem>
                <CDropdownItem>Programa B</CDropdownItem>
                <CDropdownItem>Programa C</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              Ingeniería Sistemas
            </>
          }
          title="Carrera"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Ingeniería civil</CDropdownItem>
                <CDropdownItem>Ingeniería networking</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="dark"
          value={
            <>
              Maria Blanco
            </>
          }
          title="Docente"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Jurisprudencia</CDropdownItem>
                <CDropdownItem>Administración</CDropdownItem>
                <CDropdownItem>Filosofia</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          
        />
      </CCol>


      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              2022-Ciclo II
            </>
          }
          title="Periodo"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>2022 - Ciclo I</CDropdownItem>
                <CDropdownItem>2021 - Ciclo I</CDropdownItem>
                <CDropdownItem>2021 - Ciclo II</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          
        />
      </CCol>


      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="success"
          value={
            <>
             Materia 2
            </>
          }
          title="Materia"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Materia 1</CDropdownItem>
                <CDropdownItem>Materia 2</CDropdownItem>
                <CDropdownItem>Materia 3</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          
        />
      </CCol>


      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="secondary"
          value={
            <>
              Sección 1
            </>
          }
          title="Sección"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Sección 1</CDropdownItem>
                <CDropdownItem>Sección 2</CDropdownItem>
                <CDropdownItem>Sección 3</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          
        />
      </CCol>


    </CRow>
  )
}

export default WidgetsDropdown
