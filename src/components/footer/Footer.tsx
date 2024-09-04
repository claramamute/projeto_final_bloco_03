
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {

  let date  = new Date().getFullYear()
  return (
    <>
      <div className="flex justify-center bg-blue-neon bg-green-700 text-slate-50">
        <div className="container flex flex-col items-center py-2">
          <p className=' font-bold'>Farmácia Bem-Estar | Copyright: {date} </p>
          <p >Acesse nossas redes sociais</p>
          <div className='flex gap-2'>
          <LinkedinLogo size={32} color="#ffff" />
            <InstagramLogo size={32}  color="#ffff" />
            <FacebookLogo size={32}   color="#ffff"/>
          </div>
        </div>
      </div>
  </>
  )
}

export default Footer