import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
  isActiveLesson: boolean
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'K'h'mm",
    { locale: ptBR },
  )
  return (
    <Link
      to={isLessonAvailable ? `/event/lesson/${props.slug}` : ''}
      className="group"
    >
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div
        className={`rounded border p-4 mt-2 group-hover:border-green-500 transition-all group-hover:duration-200 ${
          props.isActiveLesson
            ? 'bg-green-500  border-transparent'
            : 'border-gray-500'
        } `}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`text-sm font-medium flex items-center gap-2 ${
                props.isActiveLesson ? 'text-white' : 'text-blue-500'
              } `}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`text-xs rounded px-2 py-[0.125rem] border font-bold ${
              props.isActiveLesson
                ? 'text-white border-white'
                : 'text-gray-200 border-green-300'
            } `}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong
          className={`props.active ? 'text-white' : 'text-gray-200' mt-5 block`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
