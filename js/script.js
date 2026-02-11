function ToIndexFr()
{
    document.documentElement.lang = "fr";
    document.body.innerHTML = `
<div id="header" style="padding-left:0; padding-right: 0;">
    <a href="#home" target="_top">Accueil</a>
    <a href="#about" target="_top">A propos</a>
    <a href="#portfolio" target="_top">Portfolio</a>
    <a href="#contact" target="_top">Contact</a>
    <div class="language_container_1">
            <button class="btn btn-outilne-secondary" id="fr-index-btn" href="" onclick="ToIndexEn()">En</button>
    </div>
</div>

<section class="dark mt-lg-5" id="home">
    <div style="position: absolute; top: 20%; left: 2rem;" class="namediv">
        <h1>Zube Pierre Basali</h1>
        <h2>D&eacute;veloppeur Back End C#</h2>
    </div>
    <div style="position: absolute; bottom: 8rem; left: 50%;">
        <a href="#about" target="_top">
            <img src="images/down-arrow.svg" style="height: 3rem; width: 3rem;" alt="scroll down" />
        </a>
    </div>
</section>

<section class="light" id="about">
    <img class="background" src="images/grey_yellow_background.jpg" alt="grey_yellow_background" />
    <h2 style="color: white; margin-top: 0vh">A propos de moi</h2>
    <div class="aboutdiv d-flex-md">
        <p class="large">
            Je suis un d&eacute;veloppeur back end sp&eacute;cialis&eacute; en language C#. J'aime d&eacute;couvrir et en apprendre plus sur le fonctionnement
            des ordinateurs.
        </p>
        <hr class="hr1" />
        <ul class="aboutlist d-flex-md" style="text-align: left; columns: 2; font-size: 1.25rem; margin: 2rem 3rem; gap: 3rem;">
            <li accesskey="@skill">Elastic Search</li>
            <li key="@skill">Web API Basique</li>
            <li key="@skill">Entity Framework</li>
            <li key="@skill">Sql/Sqlite</li>
            <li key="@skill">Test Unitaire Basique</li>
            <li key="@skill">Soif d'apprentissage</li>
            <li key="@skill">Autodidacte</li>
            <li key="@skill">Travail d'&eacute;quipe</li>
            <li key="@skill">Disponible</li>
            <li accesskey="@skill">Polyvalent</li>
        </ul>
        <hr class="hr2" />
        <p style="padding: 1rem 3rem 0;">
            Je suis curieux de conna&icirc;tre le fonctionnement de toute chose, j'aime
            d&eacute;couvrir leurs origines et leurs m&eacute;caniques. La programmation m'apporte satisfaction dans cette qu&ecirc;te,
            surtout lorsqu'il s'agit de back end.
        </p>
    </div>
</section>

<section class="yellow" id="portfolio">
    <h2>Portfolio</h2>
    <div class="portfolio-container">
        <div class="portfolio-hero">
            <img class="portfolio-img" src="images/dev_desk.jpg" style="height: 100%; width: 100%; object-fit: cover; margin-top: -10vh;"
                 alt="dev_desk" />
        </div>

        <div class="portfolio-projects-container container" style="padding-top: 5vh;">

            <div class="box" key="ElasticSearch MVC" style="border-block-color: rgba(150,150,150);">
                <a href="https://github.com/ZubePB/ElasticSearch_MVC.git" target="_blank" rel="noopener noreferrer">
                    <h3 style="flex-basis: 40px;">ElasticSearch MVC</h3>
                </a>
                <p class="small" style="padding-top:1rem">
                    Une application ASP.NET MVC pour g&eacute;rer des livres et des librairies. Toutes les op&eacute;ration de donn&eacute;es sont effectu&eacute;es avec ElasticSearch.
                </p>
            </div>
            <div class="box" key="Exercice Logger" style="border-block-color: rgba(150,150,150);">
                <a href="https://github.com/ZubePB/ASP.NET_ExerciceLogger.git" target="_blank" rel="noopener noreferrer">
                    <h3 style="flex-basis: 40px;">ASP.NET Exercice Logger</h3>
                </a>
                <p class="small" style="padding-top:1rem">
                    Une simple application ASP.NET revoyant les bases en permettant la gestion d'exercices et l'affichage de rapports simplifi&eacute;s via Entity Framework.
                </p>
            </div>
            <div class="box" key="Shifts Logger" style="border-block-color: rgba(150,150,150);">
                <a href="https://github.com/ZubePB/ShiftsLogger.git" target="_blank" rel="noopener noreferrer">
                    <h3 style="flex-basis: 40px;">Shifts Logger</h3>
                </a>
                <p class="small" style="padding-top:1rem">
                    Un project fait de deux applications: Une Web API et un IU console. Les donn&eacute;es sont g&eacute;r&eacute;es par
                    l'interface Web et r&eacute;cup&eacute;r&eacute;es via IU console.
                </p>
            </div>

            <div class="box" key="Sport Result Notifier" style="border-block-color: rgba(150,150,150);">
                <a href="https://github.com/ZubePB/SportResultsNotifier.git" target="_blank"
                   rel="noopener noreferrer">
                    <h3 style="flex-basis: 40px;">Sport Result Notifier</h3>
                </a>
                <p class="small" style="padding-top:1rem">
                    Un projet fait pour r&eacute;cup&eacute;rer des r&eacute;sultats sportifs sur un site et envoyer les r&eacute;sultat par mail via l'application.
                </p>
            </div>

            <div class="box" key="Excel Reader" style="border-block-color: rgba(150,150,150);">
                <a href="https://github.com/ZubePB/ExcelReader.git" target="_blank" rel="noopener noreferrer">
                    <h3 style="flex-basis: 40px;">Excel Reader</h3>
                </a>
                <p class="small" style="padding-top:1rem">
                    Une application r&eacute;cup&eacute;rant des donn&eacute;es dans un fichier excel et les pr&eacute;sentant &agrave; l'utilisateur.
                </p>
            </div>

            <div class="box" key="Unit Testing" style="border-block-color: rgba(150,150,150);">
                <a href="https://github.com/ZubePB/UnitTesting" target="_blank" rel="noopener noreferrer">
                    <h3 style="flex-basis: 40px;">Unit Testing</h3>
                </a>
                <p class="small" style="padding-top:1rem">
                    Un projet dans lequel des tests unitaires sont effectu&eacute;s &agrave; l'aide MSTest. Le projet associ&eacute; s'appelle 'Coding Tracker'.
                </p>
            </div>
        </div>
    </div>

    <div id="fcc_certifications">
        <p>
            A voir également mes Certificats FreeCodeCamp (Incluant un Certificat Officiel Windows en language C#):
            <a href="https://www.freecodecamp.org/P13" target="_blank" rel="noopener noreferrer">
                <img src="images/socials/freecodecamp.svg" alt="FreeCodeCamp"
                     class="social-icon">
            </a>
        </p>
    </div>
</section>
<div id="contact" style="background-color: rgba(150,150,150);">
    <div style="display: flex; justify-content: center; gap: 2.5rem;">
        <a href="mailto:pb.zube@gmail.com">
            <img src="images/socials/envelope.svg" alt="email"
                 class="social-icon">
        </a>
        <a href="https://github.com/ZubePB" target="_blank" rel="noopener noreferrer">
            <img src="images/socials/github.svg" alt="GitHub"
                 class="social-icon">
        </a>
        <a href="https://www.freecodecamp.org/P13" target="_blank" rel="noopener noreferrer">
            <img src="images/socials/freecodecamp.svg" alt="FreeCodeCamp"
                 class="social-icon">
        </a>
    </div><!--!-->
        <p class="small" style="margin-top: 0; color: white;">Cr&eacute;&eacute; par Zube Pierre Basali</p>
        <p class="small" style="margin-top: 0; color: white;">Contactez-moi par email: <button type="button" class="btn" onclick="copy_To_clipboard()" >pb.zube@gmail.com</button></p>

        <div class="language_container_2">
            <button class="btn btn-outilne-secondary" id="fr-index-btn" href="" onclick="ToIndexEn()">En</button>
        </div>
</div>

<script src="js/script.js"></script>
    `
};

function ToIndexEn()
{
    document.documentElement.lang = 'en';
    document.body.innerHTML = `
    <div id="header" >
        <a href="#home" target="_top">Home</a>
        <a href="#about" target="_top">About</a>
        <a href="#portfolio" target="_top">Portfolio</a>
        <a href="#contact" target="_top">Contact</a>
        <div class="language_container_1">
            <button class="btn btn-outilne-secondary" id="fr-index-btn" href="" onclick="ToIndexFr()">Fr</button>
        </div>
    </div>

    <section class="dark mt-lg-5" id="home">
        <div style="position: absolute; top: 20%; left: 2rem;" class="namediv">
            <h1>Zube Pierre Basali</h1>
            <h2>C# Back End Developper</h2>
        </div>
        <div style="position: absolute; bottom: 8rem; left: 50%;">
            <a href="#about" target="_top">
                <img src="images/down-arrow.svg" style="height: 3rem; width: 3rem;" alt="scroll down" />
            </a>
        </div>

        <div id="testdiv"></div>
    </section>

    <section class="light" id="about">
        <img class="background" src="images/grey_yellow_background.jpg" alt="grey_yellow_background" />
        <h2 style="color: white; margin-top: 0vh">About Myself</h2>
        <div class="aboutdiv d-flex-md">
            <p class="large">
                I'm a Back End autodidact developper specialised in C#. I like to learn and discover how
                computers work.
            </p>
            <hr class="hr1" />
            <ul class="aboutlist d-flex-md" style="text-align: left; columns: 2; font-size: 1.25rem; margin: 2rem 3rem; gap: 3rem;">
                <li accesskey="@skill">Elastic Search</li>
                <li key="@skill">Basic Web API</li>
                <li key="@skill">Entity Framework</li>
                <li key="@skill">Sql/Sqlite</li>
                <li key="@skill">Basic Unit Testing</li>
                <li key="@skill">Keen Learner</li>
                <li key="@skill">Autodidact</li>
                <li key="@skill">Team Worker</li>
                <li key="@skill">Disponibility</li>
                <li accesskey="@skill">Adaptability</li>
            </ul>
            <hr class="hr2" />
            <p style="padding: 1rem 3rem 0;">
                I am passionate by how things work in general, very curious about their
                roots and mecanics. I love to satisfy this curiousity through programmation, espacially the Back End
                part.
            </p>
        </div>
    </section>

    <section class="yellow" id="portfolio">
        <h2>Portfolio</h2>
        <div class="portfolio-container">
            <div class="portfolio-hero">
                <img class="portfolio-img" src="images/dev_desk.jpg" style="height: 100%; width: 100%; object-fit: cover; margin-top: -10vh;"
                     alt="dev_desk" />
            </div>

            <div class="portfolio-projects-container container" style="padding-top: 5vh;">

                <div class="box" key="ElasticSearch MVC" style="border-block-color: rgba(150,150,150);">
                    <a href="https://github.com/ZubePB/ElasticSearch_MVC.git" target="_blank" rel="noopener noreferrer">
                        <h3 style="flex-basis: 40px;">ElasticSearch MVC</h3>
                    </a>
                    <p class="small" style="padding-top:1rem">
                        An ASP.NET MVC app principles to manage books and libraries. ElasticSearch is used to perform all data opertaions.
                    </p>
                </div>
                <div class="box" key="Exercice Logger" style="border-block-color: rgba(150,150,150);">
                    <a href="https://github.com/ZubePB/ASP.NET_ExerciceLogger.git" target="_blank" rel="noopener noreferrer">
                        <h3 style="flex-basis: 40px;">ASP.NET Exercice Logger</h3>
                    </a>
                    <p class="small" style="padding-top:1rem">
                        A simple ASP.NET app to learn the basics by managing exercices and displaying simple reports for each of them via a Web Api using Entity Framework.
                    </p>
                </div>
                <div class="box" key="Shifts Logger" style="border-block-color: rgba(150,150,150);">
                    <a href="https://github.com/ZubePB/ShiftsLogger.git" target="_blank" rel="noopener noreferrer">
                        <h3 style="flex-basis: 40px;">Shifts Logger</h3>
                    </a>
                    <p class="small" style="padding-top:1rem">
                        A project made of two Applications: A Web API and a console UI. Data is seeded in a
                        Web API and retrieved via the UI.
                    </p>
                </div>

                <div class="box" key="Sport Result Notifier" style="border-block-color: rgba(150,150,150);">
                    <a href="https://github.com/ZubePB/SportResultsNotifier.git" target="_blank"
                       rel="noopener noreferrer">
                        <h3 style="flex-basis: 40px;">Sport Result Notifier</h3>
                    </a>
                    <p class="small" style="padding-top:1rem">
                        A project made to scrap sport results on a website and send the result via an App.
                    </p>
                </div>

                <div class="box" key="Excel Reader" style="border-block-color: rgba(150,150,150);">
                    <a href="https://github.com/ZubePB/ExcelReader.git" target="_blank" rel="noopener noreferrer">
                        <h3 style="flex-basis: 40px;">Excel Reader</h3>
                    </a>
                    <p class="small" style="padding-top:1rem">
                        An Application to retrieve data from an excel file and present them to the user.
                    </p>
                </div>

                <div class="box" key="Unit Testing" style="border-block-color: rgba(150,150,150);">
                    <a href="https://github.com/ZubePB/UnitTesting" target="_blank" rel="noopener noreferrer">
                        <h3 style="flex-basis: 40px;">Unit Testing</h3>
                    </a>
                    <p class="small" style="padding-top:1rem">
                        A project where unit tests are used to debug the code. Using MSTest on a project
                        named 'Coding Tracker'.
                    </p>
                </div>
            </div>
        </div>

        <div id="fcc_certifications">
            <p>
                Also see my FreeCodeCamp Certifications(Including an Official Windows C# Certificate):
                <a href="https://www.freecodecamp.org/P13" target="_blank" rel="noopener noreferrer">
                    <img src="images/socials/freecodecamp.svg" alt="FreeCodeCamp"
                         class="social-icon">
                </a>
            </p>
        </div>
    </section>
    <div id="contact" style="background-color: rgba(150,150,150);">
        <div style="display: flex; justify-content: center; gap: 2.5rem;">
            <a href="mailto:pb.zube@gmail.com">
                <img src="images/socials/envelope.svg" alt="email"
                     class="social-icon">
            </a>
            <a href="https://github.com/ZubePB" target="_blank" rel="noopener noreferrer">
                <img src="images/socials/github.svg" alt="GitHub"
                     class="social-icon">
            </a>
            <a href="https://www.freecodecamp.org/P13" target="_blank" rel="noopener noreferrer">
                <img src="images/socials/freecodecamp.svg" alt="FreeCodeCamp"
                     class="social-icon">
            </a>
        </div><!--!-->
        <p class="small" style="margin-top: 0; color: white;">Created by Zube Pierre Basali</p>
        <p class="small" style="margin-top: 0; color: white;">Email me at: <button type="button" class="btn" onclick="copy_To_clipboard()" >pb.zube@gmail.com</button></p>

        <div class="language_container_2">
            <button class="btn btn-outilne-secondary" id="fr-index-btn" href="" onclick="ToIndexFr()">Fr</button>
        </div>
    </div>

    <script src="js/script.js"></script>
    `
}

function copy_To_clipboard()
{
    navigator.permissions.query({ name: "clipboard-write" })
        .then(({ state }) => {
            console.log(`permission response: ${state}`);
            if (state === "granted") {
                const data = [new ClipboardItem({ "text/plain": new Blob([`pb.zube@gmail.com`], { type: "text/plain" }) })];
                navigator.clipboard.write(data).then(
                    () => {
                        window.alert(`"pb.zube@gmail.com" was copied to your clipboard.`);
                        console.log("The email adress pb.zube@gmail.com was copied to your clipboard.");
                    },
                    () => {
                        console.error("Clipboard write failed");
                    }
                );
            }
        });

}