import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex">
      <div className="p-5 w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;
