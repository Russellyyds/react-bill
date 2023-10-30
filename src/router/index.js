import { createBrowserRouter } from 'react-router-dom'
import New from '@/pages/New'
import Year from '@/pages/Year'
import Month from '@/pages/Month'
import Layout from '@/pages/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Month />
      },
      {
        path: 'year',
        element: <Year />
      }
    ]
  },
  {
    path: '/new',
    element: <New />
  }
])

export default router