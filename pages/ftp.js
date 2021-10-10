import Header from "../components/Header/navbarFtp";
import logoPindorama from "../img/logo_pindorama.png";
import Image from "next/image";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
    <Header/>
      <section>
        <div className="section-title">
          <h2>Como funciona o FTP?</h2>
          <p>Breve documentação sobre como funciona o FTP do servidor.</p>
        </div>
      </section>
      <div className="container">
        Consequat sunt qui occaecat consequat magna. Duis eu aliquip culpa irure pariatur cupidatat eu culpa exercitation commodo laboris ut duis in. Non amet ad aute duis esse ad labore exercitation ea duis ullamco dolore sint. Nulla magna magna incididunt cillum labore pariatur ullamco laboris ex. Commodo eu duis enim ex officia esse. Est et eu aliquip non tempor nisi amet culpa occaecat ex in officia ipsum.

Dolor ut occaecat deserunt anim veniam occaecat labore. Nulla elit consequat enim cupidatat deserunt sint eu ea elit. Voluptate tempor ullamco qui officia excepteur incididunt qui reprehenderit do proident. Deserunt adipisicing minim velit est officia incididunt eu exercitation tempor pariatur. Veniam ad commodo consectetur enim adipisicing laboris eu irure cupidatat officia.
      <br/> <br/>
      <ul>
          <li>In velit consequat voluptate et eu laborum magna ex.</li>
          <li>In velit consequat voluptate et eu laborum magna ex.</li>
          <li>In velit consequat voluptate et eu laborum magna ex.</li>
          <li>In velit consequat voluptate et eu laborum magna ex.</li>
      </ul>
      </div>

      {/* <Footer/> */}
    </>
  );
}
