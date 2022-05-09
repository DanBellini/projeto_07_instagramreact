const posts =[
    {
        autorPhoto: "./images/imagesstores/Rakan.jpeg",
        person: "Rakan",
        postPhoto:"./images/imagessite/rakan-skin.jpeg",
        likedbyPhoto:"./images/imagesstores/Jayce.jpeg",
        likedbyName: "Jayce",
        likedNumber: "outras 99.159 pessoas"
    },
    {
        autorPhoto: "./images/imagesstores/Ahri.jpeg",
        person: "Ahri",
        postPhoto: "./images/imagessite/Ahri-skin.jpeg",
        likedbyPhoto: "./images/imagesstores/Lux.jpeg",
        likedbyName: "Lux",
        likedNumber: "outras 142.557 pessoas"
    },
    {
        autorPhoto: "./images/imagesstores/Akshan.jpeg",
        person: "Akshan",
        postPhoto: "./images/imagessite/Akshan-skin.jpeg",
        likedbyPhoto: "./images/imagesstores/Ezreal.jpeg",
        likedbyName: "Ezreal",
        likedNumber: "outras 82.931 pessoas"
    }
]


function Posted (props){
    return(
    <div class="post">
        <div class="autordopost">
            <div class="autor">
                <div>
                    <img
                        src={props.photo}
                        alt=""
                    />
                </div>
                <div>
                    <h5>{props.perfil}</h5>
                </div>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <img
            src={props.postimage}
            alt=""
        />
        <div class="iconesdopost">
            <div class="ladodireito">
                <ion-icon class="vazio" name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div class="ladoesquerdo">
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
        <div class="curtidas">
            <img
                src={props.liked}
                alt=""
            />
            <p>
                Curtido por <strong>{props.like}</strong> e
                <strong>{props.number}</strong>
            </p>
        </div>
    </div>
    )


}


export default function Postbox (){
    return(
        <div class="caixadeposts">
            {posts.map(post => <Posted
                                photo={post.autorPhoto}
                                perfil={post.person}
                                postimage={post.postPhoto}
                                liked={post.likedbyPhoto}
                                like={post.likedbyName}
                                number={post.likedNumber} />)}
        </div>
    )
}