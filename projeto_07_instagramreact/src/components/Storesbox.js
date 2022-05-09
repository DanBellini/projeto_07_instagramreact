const stores = [
    {image:"./images/imagesstores/Ahri.jpeg", person: "Ahri"},
    {image:"./images/imagesstores/Akshan.jpeg", person:"Akshan"},
    {image:"./images/imagesstores/Ashe.jpeg", person:"Ashe"},
    {image:"./images/imagesstores/Ezreal.jpeg", person: "Ezreal"},
    {image:"./images/imagesstores/Jayce.jpeg", person:"Jayce"},
    {image:"./images/imagesstores/Jinx.jpeg", person: "Jinx"},
    {image:"./images/imagesstores/Lux.jpeg", person:"Lux"},
    {image:"./images/imagesstores/Rakan.jpeg",person: "Rakan"}
];


function Stores (props){


    return (
        <div class="stores">
            <img
                class="fundostores"
                src="./images/imagesstores/stories_background.jpg"
                alt=""
            />
            <img
                class="imgstores"
                src={props.photo}
                alt=""
            />
            <p>{props.perfil}</p>
        </div>
    )
}


export default function Storesbox (){
    return(
        <div class="caixadestores">
            {stores.map(store => <Stores 
                                    photo={store.image}
                                    perfil={store.person} /> )}
            <div class="iconestores">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div>
    )
}