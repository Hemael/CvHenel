import React from "react";
import "./Accueil.css";
import photoProfil from "./asset/photodp.jpg";

const Accueil = ({ onLogout }) => {
  return (
    <div className="accueil-container">
      <header className="accueil-header">
            <div className="header-info">
                <h1>Alternance</h1>
                <p>Chloé Legouas — 06 01 77 72 59 - chloe.legouas@hotmail.fr</p>
            </div>
            <button onClick={onLogout}>Se déconnecter</button>
    </header>


      <main className="accueil-main">
        <section className="motivation-box">
          <div className="motivation-text">
            <h2>Ma motivation</h2>
            <h4>Mastère Spécialisé Manager de la Sécurité des Systèmes d’Information</h4>
            <p>
              Je suis une jeune étudiante diplomée d'un bac +5 actuellement acceptée au CESI de Rouen, je suis à la recherche d’une alternance dans le domaine de la cybersécurité, un univers qui attise énormément ma curiosité. Je suis passionnée par tout ce qui touche au développement en général, que ce soit le front, le back ou la sécurité des systèmes.
            </p>
            <p>
              Après de longues années à développer ma créativité dans le design, je me suis tournée vers le jeu vidéo. Mais c’est dans le développement web que je me suis sentie le plus épanouie. La création de sites fonctionnels, sécurisés et accessibles est un véritable défi qui me motive à progresser.
            </p>
            <p>
              C’est pourquoi j’ai choisi la cybersécurité… et je compte bien mener cette quête jusqu’à son terme !
            </p>
          </div>
          <div className="motivation-photo">
            <img src={photoProfil} alt="Profil" />
          </div>
        </section>

        <section className="row-box">
          <section className="info-box experiences">
            <h2>Expériences professionnelles</h2>
            <ul>
              <li>
                <strong>Développeuse web / Graphiste – Obby, Bordeaux</strong><br />
                <em>Novembre 2021 – Mars 2022</em><br />
                Maquettes et graphismes pour sites web, flyers, bannières et designs pour e-mails marketing.
              </li>
              <li>
                <strong>Acheteuse magasin maintenance – Ashland Specialties France, Alizay</strong><br />
                <em>Juin 2021 – Septembre 2021</em><br />
                Gestion des stocks et des commandes via SAP.
              </li>
              <li>
                <strong>Responsable de création – Etigo, Tourcoing</strong><br />
                <em>Juillet 2019 – Novembre 2019</em><br />
                Création visuelle pour supports variés, validation des BAT et communication interne.
              </li>
              <li>
                <strong>Graphiste / Animatrice – WheezLab, Lille</strong><br />
                <em>Mars 2019 – Août 2019</em><br />
                Visuels et animations pour le robot médical <em>WheezHope</em>.
              </li>
              <li>
                <strong>Infographiste / Graphiste – Al Graphik, Vendée</strong><br />
                <em>Avril 2017 – Juin 2017</em><br />
                Conception de maquettes en respectant les cahiers des charges.
              </li>
            </ul>
          </section>

          <div className="side-boxes">
            <div className="small-box">
              <h3>Mes compétences</h3>
              <ul>
                <li>Développement web : React, HTML, CSS, JavaScript, Sass, TypeScript — <strong>site Golstrem</strong> en exemple.</li>
                <li>API : intégration via <em>ApiService</em>, création de <em>mocks</em> et algorithmes connectés.</li>
                <li>Bases de données : connexions, requêtes et modifications.</li>
                <li>Serveur & Git : relancer, mettre à jour, commandes Git.</li>
                <li>3D & moteurs : 3DSMax, ZBrush, Unity, Unreal Engine.</li>
                <li>Infographie : Photoshop, Illustrator, InDesign, BAT et maquettes.</li>
              </ul>
            </div>

            <div className="small-box">
                    <h3>Mes atouts</h3>
                    <p>
                        Je suis une personne patiente, passionnée et pleine d’énergie. Même si je peux sembler un peu timide au premier abord,<br/>
                        je sais travailler de manière autonome et demander de l’aide avant de « faire exploser » le serveur de production.
                    </p>
                    <p>
                        Je respecte toujours les décisions et conseils de mon lead dev,<br/> consciente que mon code peut être parfois perfectible
                        en raison de mon manque d’expérience en entreprise.
                    </p>
                    <p>
                        En dehors de cela, je suis toujours pleine d’idées et capable de rebondir rapidement pour trouver des solutions.
                    </p>
                </div>
            </div>
        </section>

        <div className="info-box">
            <h2>Mes passions</h2>
            <p>
                Je suis passionnée par le design, le graphisme et le développement. J’adore créer, chercher des idées et développer. Chez moi, je dispose de tout le nécessaire pour dessiner des maquettes, des personnages, des slogans ou même des jeux. Ma tablette graphique est mon alliée pour donner vie à toutes mes créations, qu’il s’agisse de l’image sur cette page ou des nombreuses autres œuvres qui se cachent derrière. Mais ne faites pas trop attention à cette page, elle a été codée en quelques heures… Peut-être trouverez-vous cependant les liens vers mes portfolios disséminés ici et là !
            </p>
            <p>
                J’aime aussi voyager et rencontrer du monde. Je n’hésite pas à traverser la France en solitaire, à croiser de nouvelles personnes venues de divers horizons, car on ne sait jamais — une rencontre fortuite peut toujours ouvrir de nouvelles opportunités. En dehors des voyages, je suis également passionnée de musique : rien de mieux que de découvrir de nouveaux artistes pour se motiver et avancer dans ses projets. Et même si je suis développeuse et peu sportive, je prends plaisir à suivre le handball et le Tour de France.
            </p>
            <p>
                Enfin, ma passion principale après la création reste l’univers du jeu vidéo, en particulier les jeux indés et les MMORPG, pour leurs histoires immersives et leurs trames narratives riches. Voyager à travers une histoire, qu’elle soit audio, visuelle ou écrite, est une source d’inspiration. Pour moi, le développement est aussi une façon de voyager.
            </p>
        </div>


        <section className="bottom-row">
            <div className="small-box">
                <h3>Mes envies</h3>
                <p>
                    Je souhaite approfondir mes connaissances dans le développement, en particulier dans le domaine de la cybersécurité. J’aimerais découvrir l’ensemble des aspects du développement pour en comprendre pleinement le fonctionnement et suivre ses évolutions. Je veux rester à jour face aux nouvelles technologies et ne jamais prendre de retard face aux innovations.
                </p>
                <p>
                    Je recherche un poste en alternance qui m’offre des possibilités d’apprentissage, encadrée par un mentor afin de m’accompagner dans les défis techniques ou humains que je rencontrerai. Je souhaite travailler dans un environnement calme où règne l’entraide, afin d’apprendre, d’échanger et de partager mes compétences.
                </p>
            </div>
          <div className="small-box">
            <h3>Mes défauts</h3>
            <p>
                Je suis un brin perfectionniste et très exigeante envers moi-même, ce qui me pousse à toujours vouloir faire mieux dans tous les domaines. J’ai également des difficultés à me concentrer dans un environnement très bruyant, ce qui peut nuire à ma productivité dans ces conditions.
            </p>
            <p>
                Il m’arrive aussi de me parler à moi-même lorsque je développe, même lorsque mes fonctions ne me répondent pas correctement. Je suis très expressive, ce qui peut donner l’impression d’un contraste entre ma concentration et mon attitude en apparence détachée face à l’écran. Enfin, je suis hypersensible sur le plan émotionnel, ce qui fait partie de ma personnalité.
            </p>
          </div>

        </section>
        <div className="small-box autre">
                <h3>Autres</h3>
                <p> <a href="https://github.com/Hemael"> github </a> </p>
                <p> <a href="https://www.linkedin.com/in/chloe-legouas/">linkedin</a></p>
                
        </div>
      </main>
    </div>
  );
};

export default Accueil;
