import React from 'react'

import { CRow, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react'
import MUIDataTable from "mui-datatables";
import ApexCharts from 'apexcharts';


 

const columns = ["Año", "Termino", "Nivel","Materia", "Paralelo", "% Respuestas", "Calificación"];

const data = [ ["2022", "1S", "GRADO","INDG1042", "LOGÍSTICA Y SERVICIO AL CLIENTE","1","93%","96.07",],];

const options = {
  filterType: 'checkbox',
};




const optionsc = {
  chart: {
    type: 'boxPlot'
  },
  series: [{
    data: [{
      x: "category 1",
      y: [40, 51.98, 56.29, 59.59, 63.85]
    },
    {
      x: "category 2",
      y: [43.66, 44.99, 51.35, 52.95, 59.42]
    },
    {
      x: "category 3",
      y: [43.66, 44.99, 51.35, 52.95, 59.42]
    },
    {
      x: "category 4",
      y: [52.76, 57.35, 59.15, 63.03, 67.98]
    }]
  }],
  plotOptions: {
    boxPlot: {
      colors: {
        upper: '#5C4742',
        lower: '#A5978B'
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), optionsc);

chart.render();

const Dashboard = () => {
  
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
    <CRow className="mt-4">
      <h2>Docente</h2>
      <MUIDataTable
      
      title={" Historico por Profesor"}
     
      data={data}
      columns={columns}
      options={options}
      />
      <div id="chart">
      
      </div>
    </CRow>
   
    

    </>
  )
}

 
export default Dashboard