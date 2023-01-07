import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Comparativa = React.lazy(() => import ('./views/comparativa/Comparativa'))
const Desarrollado = React.lazy(() => import ('./views/desarrollado/Desarrollado'))
const Evolucion = React.lazy(() => import ('./views/evolucion/Evolucion'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/comparativa', name: 'Comparativa', element: Comparativa },
  { path: '/desarrollado', name: 'Desarrollado', element: Desarrollado },
  { path: '/evolucion', name: 'Evolución', element: Evolucion },
    
]

export default routes
