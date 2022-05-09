export default function Topbar () {
    return(
        <div>
            <div class="topo">
            <div>
            <div class="instagram">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="linha"></div>
                <img
                src="./images/imagessite/LogoInstagram.png"
                alt="Logo Instagram"
                />
            </div>
            <div class="barradepesquisa">
                <p>Pesquisar</p>
            </div>
            <div class="barradeicones">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon class="vazio" name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
            </div>
        </div>
        <div class="topo-mobile">
            <ion-icon class="iconemobile" name="logo-instagram"></ion-icon>
            <img src="./images/imagessite/LogoInstagram.png" alt="Logo Instagram" />
            <ion-icon class="iconemobile" name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    )
}