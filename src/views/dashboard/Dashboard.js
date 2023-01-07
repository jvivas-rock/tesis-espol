import React from 'react'

import {

  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,

} from '@coreui/react'
import { CChartLine,CChart } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {  cilCloudDownload,} from '@coreui/icons'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MUIDataTable from "mui-datatables";

const columns = ["Profesor", "Materia", "Ciclo","Paralelo", "Calificación"];

const data = [
 ["Joe James", "Calculo I", "2022-Cliclo II","2A", "7"],
 ["John Walsh", "Redes II", "2022-Cliclo II","2A", "8"],
 ["Bob Herm", "Fisica Aplicada", "2022-Cliclo II","1B", "4"],
 ["James Houston", "Electrónica", "2022-Cliclo II","1C", "5"],
];

const options = {
  filterType: 'checkbox',
};

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]
  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Resultado evolución
              </h4>
              <div className="small text-medium-emphasis">Periodo 2022 - Ciclo II</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Dia', 'Mes', 'Año'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Mes'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['1', '2', '3', '4', '5', '6', '7'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

     

      <CRow></CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Resultado detallado
              </h4>
              <div className="small text-medium-emphasis">Periodo 2022 - Ciclo II</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Dia', 'Mes', 'Año'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Mes'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
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

<CRow>
<MUIDataTable
  title={"Calificación Docente"}
  data={data}
  columns={columns}
  options={options}
/>
</CRow>

    </>
  )
}

export default Dashboard
