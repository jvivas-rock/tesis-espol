import React from 'react'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { CRow,} from '@coreui/react'
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
  
  return (
    <> 

<WidgetsDropdown />
   <CRow>
<MUIDataTable
  title={" Resultados de Evolución"}
  data={data}
  columns={columns}
  options={options}
/>
</CRow>

    </>
  )
}

export default Dashboard

