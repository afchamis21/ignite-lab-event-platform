import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import codeMockup from '../assets/code-mockup.png'
import { Logo } from '../components/Logo'
import { useCreateSubscriberMutation } from '../graphql/generated'

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      },
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] px-2 flex flex-col lg:flex-row items-center gap-6 lg:justify-between mt-10 lg:mt-20 mx-auto">
        <div className="max-w-[640px] text-center flex flex-col items-center lg:text-left lg:items-baseline">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="w-full md:max-w-[288px] p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-wxl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubscribe}
          >
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu melhor email"
              className="bg-gray-900 rounded px-5 h-14"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={codeMockup} alt="" className="mt-10" />
    </div>
  )
}
