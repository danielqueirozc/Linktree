export function RedesSociais (){
    const redeList = [
        { id: 1, urlNome: 'WhatsApp', url: 'https://api.whatsapp.com/send?phone=5511964547273' },
        { id: 2, urlNome: 'LinkedIn', url: 'https://www.linkedin.com/in/daniel-queiroz-669b42210/' },
        { id: 3, urlNome: 'GitHub', url: 'https://github.com/danielqueirozc'},
        { id: 4, urlNome: 'Instagram', url: 'https://www.instagram.com/danqcruz/' },
        { id: 5, urlNome: 'Discord', url: 'https://discord.com/channels/@me' },
    ]

    const redeslinks = redeList.map((props) =>
        <div key={props.id} className="content_links">
                <a
                    href={props.url}>{props.urlNome}
                </a>
        </div>
    )

    return(
        <div>
            {redeslinks}
        </div>
    )
}