const sidebarinfo =[
    {
        photo:"./images/imagessidebar/Xayah.jpeg",
        perfil:"Xayah"
    },
    {
        photo: "./images/imagessidebar/Ekko.jpeg",
        perfil:"Ekko"
    },
    {
        photo: "./images/imagessidebar/Tristana.jpeg",
        perfil:"Tristana"
    },
    {
        photo:"./images/imagessidebar/Katarina.jpeg",
        perfil:"Katarina"
    },
    {
        photo:"./images/imagessidebar/Zoe.jpeg",
        perfil:"Zoe"
    }
]

function SugestionsSideBar(props){
    return (
        <div class="sugestoessidebar">
        <div class="sugestao">
            <div>
                <img
                    src={props.image}
                    alt=""
                />
            </div>
            <div>
                <h5>{props.name}</h5>
                <h6>Segue você</h6>
            </div>
        </div>
        <p>Seguir</p>
    </div>
    )
} 

export default function Sidebar () {
    return (
        <div class="sidebar">
            <div class="destaquesidebar">
                <div>
                    <img
                        src="./images/imagessidebar/Seraphine.jpeg"
                        alt=""
                    />
                </div>
                <div>
                    <h5>Seraphine</h5>
                    <h6>Cantora</h6>
                </div>
            </div>
            <div class="sugestoessidebar">
                <h6>Sugestões para você</h6>
                <h4>Ver tudo</h4>
            </div>
            {sidebarinfo.map(sugestions => <SugestionsSideBar
                                                image={sugestions.photo}
                                                name={sugestions.perfil} />)}

            <div class="texto1">
                <p>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos
                • Localizações • Contas mais relevantes • Hashtags • Idioma
                </p>
            </div>
            <div class="texto1">
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}