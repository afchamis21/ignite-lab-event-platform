import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

interface SidebarProps {
  activeVideoSlug?: string
  isSideMenuOpen: boolean
}

export function Sidebar(props: SidebarProps) {
  const { data } = useGetLessonsQuery()

  return (
    <aside
      className={`${
        props.isSideMenuOpen ? 'block' : 'hidden'
      } z-50 absolute h-full lg:h-unset w-[100vw] lg:static lg:block lg:z-0 lg:w-[21.75rem] bg-gray-700 p-6 border-l border-gray-600 overflow-hidden`}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              isActiveLesson={props.activeVideoSlug === lesson.slug}
            />
          )
        })}
      </div>
    </aside>
  )
}
