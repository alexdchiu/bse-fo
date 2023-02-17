import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import ('./navBar.js'))
export default function Layout ({children}) {

  return (
    <>
    <NavBar teamNames={[]} teamIDs={[]}>{children}</NavBar>
    
    </>
  )
}