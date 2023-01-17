import React from 'react'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { CRow, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react'
import MUIDataTable from "mui-datatables";
import ApexCharts from 'apexcharts';

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
      <MUIDataTable
      title={" Resultados de Evolución"}
      data={data}
      columns={columns}
      options={options}
      />
      <div id="chart">
        dfdfgdfg
      </div>
    </CRow>

    </>
  )
}

export default Dashboard

