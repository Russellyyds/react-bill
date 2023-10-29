import { getBillList } from '@/store/modules/billStore'
import { Button } from 'antd-mobile'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const dispatch=useDispatch()
    useEffect(
        ()=>{
            dispatch(getBillList())
        }
        ,
        [dispatch]
    )
  return (
    <div>Layout
        <Outlet/>
        <Button color='primary'>111</Button>
    </div>
  )
}

export default Layout