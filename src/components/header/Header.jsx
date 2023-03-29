import Image from "next/image"

import ImagePerfil from '../../image/perfil.jpg'

export function Header (){
    return(
        <div className="m-[2.25rem] flex items-center justify-center text-center">
            <div className="block" >

                <Image src={ImagePerfil} width={120} height={120} className="m-auto bg-cover rounded-[50%]" />

                <h3 className="text-white font-extrabold my-[1rem]">Daniel Queiroz</h3>
                <p className="text-white text-gradient">Bem vindo!</p>

            </div>
        </div>
    )
}
