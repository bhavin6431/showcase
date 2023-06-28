import { Outlet } from 'react-router-dom'
import Menu from '../menu/menu'
import { useSelector } from 'react-redux'
export default function Layout() {
    
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    console.log(isLoggedIn)
    return (
        <>
            {isLoggedIn && <Menu />}
            <Outlet />
        </>
    )
}