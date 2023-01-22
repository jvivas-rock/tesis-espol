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
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem

} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import {  cilCloudDownload,} from '@coreui/icons'


import ReactApexChart from "react-apexcharts";


import {enviroments} from '../../enviroments/enviroments'

class Comparativa extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          type: 'boxPlot',
          data: [
            {
              x: 'Jan 2015',
              y: [54, 66, 69, 75, 88]
            },
            {
              x: 'Jan 2016',
              y: [43, 65, 69, 76, 81]
            },
            {
              x: 'Jan 2017',
              y: [31, 39, 45, 51, 59]
            },
            {
              x: 'Jan 2018',
              y: [39, 46, 55, 65, 71]
            },
            {
              x: 'Jan 2019',
              y: [29, 31, 35, 39, 44]
            },
            {
              x: 'Jan 2020',
              y: [41, 49, 58, 61, 67]
            },
            {
              x: 'Jan 2021',
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
      ],
      options: {
        chart: {
          type: 'boxPlot',
          height: 350
        },
        title: {
          text: 'Basic BoxPlot Chart',
          align: 'left'
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#5C4742',
              lower: '#A5978B'
            }
          }
        }
      },
    
    
    };
  }



  random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  progressExample = [
    { title: 'Visitas', value: '29.703 Usuarios', percent: 40, color: 'success' },
    { title: 'Visitas', value: '24.093 Usuarios', percent: 20, color: 'info' },
    { title: 'Visitas', value: '78.706 Usuarios', percent: 60, color: 'warning' },
    { title: 'Visitas', value: '22.123 Usuarios', percent: 80, color: 'danger' },
    { title: 'Visitas', value: '12.123 Usuarios', percent: 40.15, color: 'primary' },
  ]



  componentDidMount() {


    let url = enviroments.apiUrl+enviroments.services.frecuencia;

    fetch( url)
    .then(res => {
      return res.json();
    }).then(res => {
      let data = {};
      res.forEach((registro)=>{
      
        if( typeof data[registro.idarea] === 'undefined'){
          data[registro.idarea]=[];
        }
        data[registro.idarea].push(registro);
      });


      console.log(data);

    });
  }

  render() {

    return (
      <> 
        <CDropdown>
          <CDropdownToggle href="#" color="secondary">
            Período
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">2022-II</CDropdownItem>
            <CDropdownItem href="#">2022-I</CDropdownItem>
            <CDropdownItem href="#">2021-II</CDropdownItem>
            <CDropdownItem href="#">2021-I</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CCard className="mb-4 mt-4">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  Resultados Comparativa
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
            

            <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="boxPlot" height={350} />
</div>



          </CCardBody>
          <CCardFooter>
            <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
              {this.progressExample.map((item, index) => (
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
  
       
  
      
  
  <CRow>
  
  </CRow>
  
      </>
    )
  }
}


export default Comparativa

