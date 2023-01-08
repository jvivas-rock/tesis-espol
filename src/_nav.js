import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  
  cilChart,
  cilChartPie,
  cilChartLine,
  cilSpeedometer,
  
} from '@coreui/icons'
import {  CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Menú',
  },
  {
    component: CNavItem,
    name: 'Comparativo',
    to: '/comparativa',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Detallado',
    to: '/detallado',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Evolución',
    to: '/evolucion',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  },
  
  
]

export default _nav
