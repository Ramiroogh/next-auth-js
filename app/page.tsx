import { getServerSession } from 'next-auth'
import { authOptions } from './utils/auth'

// UI
import LogoutButton from './components/LogoutButton'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className='p-10 w-screen h-screen flex flex-col gap-3 items-center justify-center'>
      <h1>hola desde index page, una ruta publica</h1>

      {session ?
        (
          <div className='w-screen h-screen flex flex-col gap-3 items-center justify-center'>
            <h2>Estas logeado</h2>
            <LogoutButton />
          </div>
        )
      :
        (
          <div className='w-screen h-screen flex flex-col gap-3 items-center justify-center'>
            <h1>Inicie sesion para ver algo especial</h1>
            <Button asChild>
              <Link href="/auth">Iniciar Sesion</Link>
            </Button>
          </div>
        )
      }

    </div>
  )
}
