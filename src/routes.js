import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Comparativa = React.lazy(() => import ('./views/comparativa/Comparativa'))
const Detallado = React.lazy(() => import ('./views/detallado/Detallado'))
const Evolucion = React.lazy(() => import ('./views/evolucion/Evolucion'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/comparativa', name: 'Comparativa', element: Comparativa },
  { path: '/detallado', name: 'Detallado', element: Detallado },
  { path: '/evolucion', name: 'Evolución', element: Evolucion },
    
]

export default routes
