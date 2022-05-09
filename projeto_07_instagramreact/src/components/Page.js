import Storesbox from "./Storesbox"
import Postbox from "./Postbox"
import Sidebar from "./Sidebar"

export default function Page (){
    return (
        <div class="pagina">
            <div class="conteudo">
                <div class="lado1">
                    <Storesbox />
                    <Postbox />
                </div>
                <Sidebar />
            </div>
            
        </div>
    )
}