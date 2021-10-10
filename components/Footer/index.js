import Image from 'next/image'
import Linux from '../../img/linux.gif'
import CopaCabana from '../../img/COPACABANA_X64-256.102x46.png'
import Hk from '../../img/WESTANDWITHHK.png'

export default () => {
    return (
        <footer>
            <div className="text-center">
                <div className="container p-2">
                    <div className="row">
                        <div className="col-sm">
                        <Image src={Linux}></Image>
                        </div>
                        <div className="col-sm">
                        <Image src={Hk}></Image>
                        </div>
                        <div className="col-sm">
                        <Image src={CopaCabana}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}