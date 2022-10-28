import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  const [isSideMenuOpen, SetIsSideMenuOpen] = useState(false)

  function toggleSideMenu() {
    SetIsSideMenuOpen((state) => !state)
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <Header toggleSideMenu={toggleSideMenu} isSideMenuOpen={isSideMenuOpen} />
      <main
        className={`flex flex-1 items-stretch ${
          isSideMenuOpen ? 'overflow-hidden max-h-[100vw]' : 'overflow-auto'
        }`}
      >
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl mt-20 border border-green-500 w-fit h-fit p-6 rounded-md">
              Clique em um vídeo para começar!
            </h1>
          </div>
        )}
        <Sidebar activeVideoSlug={slug} isSideMenuOpen={isSideMenuOpen} />
      </main>
    </div>
  )
}
