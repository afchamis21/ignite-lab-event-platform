import { List, X } from 'phosphor-react'
import { Logo } from './Logo'

interface HeaderProps {
  toggleSideMenu: () => void
  isSideMenuOpen: boolean
}

export function Header(props: HeaderProps) {
  return (
    <header
      className="w-full p-5 flex items-center justify-between lg:justify-center bg-gray-700 border-b
     border-gray-600 "
    >
      <Logo />
      <button
        onClick={props.toggleSideMenu}
        className="flex lg:hidden  items-center gap-2 "
      >
        Aulas{' '}
        {props.isSideMenuOpen ? (
          <X size={32} weight="bold" />
        ) : (
          <List size={32} weight="bold" />
        )}
      </button>
    </header>
  )
}
