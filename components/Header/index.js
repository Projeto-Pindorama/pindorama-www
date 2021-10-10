import logoPindorama from '../../img/logo_pindorama.png'
import Link from 'next/link'
import Image from "next/image"

export default () => {
    return (
        <header id="header" className="fixed-top">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-9 d-flex align-items-center">
                        <h1 className="logo mr-auto"><a href="/"><Image src={logoPindorama}></Image></a></h1>
                        <nav className="nav-menu d-block">
                            <ul>
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li><a href="#hotlinks">Hotlinks</a></li>
                                <li><a href="#about">Sobre</a></li>
                                <li><Link href="ftp"><a>FTP</a></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
