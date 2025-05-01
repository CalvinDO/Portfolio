<script src= "Code/Vector.js"><script>
<script src= "Code/UserData.js"></script>
<script src= "Code/Main.js"></script>
<script src= "Code/HeaderRubberBand.js"></script>
<!-- <script src= "Code/Ball.js"></script> -->

<style>


html {
  margin: 0;
  padding: 0;
  height: 100%;
}

div#header_wrap {
  background:#212529;
}

#header_wrap canvas {
  position: fixed;
  min-height: 100lvh;
  width: 100%;
  background-color: #212529;
}

.quote-container::before {
  right: 3vw !important;
  content: "“";
  font-size: 16.18vw;
  font-weight: bold;
  color: #FF5722;
  position: relative;
  font-family: "Poppins", sans-serif;
  bottom: 10vw;
}

.quote-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100lvh;
  position: relative;
  padding: 0px 25px;
  padding-right: 11vw;
}

blockquote {
  margin: 0;
  padding: 0;
  border-left: 0;
  color: #F8F9FA;
  position: relative;
  font-family: "Poppins", sans-serif;
}

blockquote a {
  color: #F8F9FA;
}

blockquote img {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border: none !important;
  transform: translateY(50%);
  width: calc(20px + 1.580339vw);
  padding-left: 20px;
  justify-self: center;
  top: 15%;
}

.quote-text{
  position: relative;
}

blockquote * {
  font-size: calc(20px + 0.6180339vw);
}

.quote-container blockquote footer cite, .quote-container a {
    font-size: clamp(9px, calc((6.18px + 1vw)* 0.618), 20px) !important;
}


blockquote:first-child{
  user-select: none;
}

.quote-container footer {
  display: flex;
  justify-content: flex-end; /* Footer-Inhalt nach rechts verschieben */
  width: 100%;  /* Footer nimmt die gesamte Breite des Blockquotes ein */
  margin-top: 1.618rem;   /* Abstand zwischen Zitattext und Footer */
}


#startpage-arrow {
  position: absolute;
  bottom: -1vw;
  left: 50%;
  transform: translateX(-50%);
  /* font-size: calc(40px + 6.180339vw); */
  font-family: auto;
  width: calc(5.6180339vw) !important;
  opacity: 0.0618;

  border: none;
  box-shadow: none;
  -webkit-box-shadow: none;

  user-select: none;
  pointer-events: none;
}


#project_title, #project_tagline{
  display: none !important;
}

.inner{
  padding: 0 !important;
  width: 100% !important;
  max-width: none !important;
  min-width: none !important;
}

#main_content_wrap{
  position: relative;
  background: #f8f9fa;
}

h1{
  text-align: center !important;
}

.section-header {
  margin-top: 200px;
  margin-bottom: 95px;
  text-align: center;
  font-size: 200px;
  color: #212529;
  line-height: 61px;
}

.section-header i {
    font-size: 161px;
}

.section-header h1 {
    color: #212529 !important;
    font-size: xxx-large;
    font-family: "Poppins", sans-serif;
    margin-top: 30px;
}

.navbar {
  position: absolute;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 0;
  margin-bottom: 0px;
  /*transition: all 0.3s ease;*/
}

.navbar.sticky {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  /*box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);*/
  padding-top: 0;
}

.navbar.sticky .menu {
    background: #212529;
    transition: 0.3s all ease-in-out;
}


.navbar.hidden {
  display: none !important;
}

.navbar-placeholder {
  overflow: hidden;
  position: inherit;
  height: 0px;
  margin: 0;
  padding: 0;
}

#navbar-top-placeholder {
  top: 38px;
}

#navbar-placeholder {
  top: 39px;
}

.menu {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  /* background: #f8f9fa; */
}

.menu li {
  /*margin: 0 0.6180339%;*/
}

.menu li a {
  text-decoration: none;
  color: #343A40;
  padding: 10px 15px;
  display: block;
  background-color: hsl(210deg 5.56% 92.94%);
  transition: background 0.3s;
}

.navbar.sticky .menu li a {
  color: #F8F9FA;
  background: #212529;
}

.menu li a:hover {
  text-decoration: none;
  background: #212529;
  color: #E9ECEF;
}

.navbar.sticky .menu li a:hover, .navbar.sticky .menu li a.active {
    background: #E9ECEF;
    color: #343A40;
}


</style>

<div class = "navbar-placeholder" id="navbar-top-placeholder"></div>

<div class = "navbar-placeholder" id="navbar-placeholder"></div>

<nav class ="navbar">
  <ul class = "menu">
    <li><a href="#motivation">Motivation</a></li>
    <li><a href="#header-coding">Coding</a></li>
    <li><a href="#modelling">Modelling</a></li>
    <li><a href="#video">Video</a></li>
    <li><a href="#musik">Musik</a></li>
    <li><a href="#grafik">Grafik</a></li>
    <li><a href="#dokumente">Dokumente</a></li>
  </ul>
</nav>

<style>


#main_content .quote-container::before, #footer_wrap .quote-container::before  {
  color: #00a8dd;
  font-size: calc(16.18vw * 0.618);
  bottom: 1.618vw;
  right: calc(3vw * 0.618) !important;
}

#main_content .quote-container, #footer_wrap .quote-container {
  min-height: 0;
  padding-top: 100px;
  padding-right: 5.4vw;
}

#first-blue-quote {
    margin-top: 125px !important;
}

#main_content blockquote {
    color: #212529 !important;
}

#main_content blockquote a {
    color: #212529 !important;
}

#main_content blockquote img, #footer_wrap blockquote img {
    width: calc((20px + 0.9vw));
}

#weltenbauer-main-logo {
  width: calc((20px + 4vw)) !important;
  top: 7%;
}

#main_content blockquote *, #footer_wrap blockquote * {
    font-size: calc((20px + 0.6180339vw)* 0.618);
}

.quote-container + .section-header {
  margin-top: 150px;
}

</style>

<div class="quote-container" id="first-blue-quote" ><blockquote>
  <span class="quote-text">[Calvin Dell'Oro] arbeitete sehr <strong>effizient</strong>, <strong>routiniert</strong> und <strong>zuverlässig</strong>.<br>
  </span>
  <footer>
    <cite class="author">— <a href="PraktikumsbestätigungCalvinDellOro.pdf" target = "_blank">René Nold, Geschäftsführer</a><img src = "weltenbauerLogoMainContent.png" id ="weltenbauer-main-logo"></cite>
  </footer>
  </blockquote>
</div>

<div class="quote-container"><blockquote>
  <span class="quote-text"><strong>weit über</strong> die vorgegebenen <strong>Lehrziele hinaus</strong><br>
  </span>
  <footer>
    <cite class="author">— <a href="EmpfehlungsschreibenVonProfChristophMueller.pdf" target="_blank">Prof. Christoph Müller</a><img src = "HFULogoMainContent.png"></cite>
  </footer>
  </blockquote>
</div>

<div class="section-header">
<h1 id="motivation">Motivation</h1>
</div>

<style>

.details-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 55px;
  column-gap: 25px;
  padding: 0 25px;
}


details[open] summary::after {
    content: "";
    margin: 30px;
    display: block;
}

.details-container details {
    padding: 10px;
    padding-bottom: 14px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: justify;
    border: 3px solid transparent;
    border-radius: 5px;
    background-color:hsl(210, 0%, 88.60%);
    height: 100%;
    color: #212529;
}

details:hover, details:open {
  background-color: #DEE2E6;
}


@media (max-width: 1225px) {
  .details-container {
    grid-template-columns: 1fr 1fr; /* Zwei Spalte auf kleineren Bildschirmen */
    column-gap: 12.5px;
    padding: 0 12.5px;
  }
}

@media (max-width: 700px) {
  .details-container {
    grid-template-columns: 1fr; /* Eine Spalte auf Smartphone Bildschirmen */
    padding: 0;
  }
}

summary{
  font-weight: 549;
  text-align: center;
}

summary li {
    margin: 10px auto;
}

strong{

  font-weight: 600;
}

summary ul {
  text-align: left;
  font-size: large;
}

summary ul::before {
    white-space: pre;
    content: " \A";
}

/* details klicken*/
.klicken {
  display: block;
  justify-self: center;
  position: relative;
  bottom: 45px;
  pointer-events: none;
  user-select: none;
  width: 20px;
  border: 0;
  box-shadow: none;
}

details[open] ~ .klicken {
    display: none;
}

.to-remove{
  display: none !important;
}

</style>

<div class = "details-container">
  <div class="details-flex-item">
    <details>
      <summary>Alter: <strong>3–9</strong><br>
      <ul>
        <li>
          Erste <strong>PC-Games</strong> gespielt
        </li>
        <li>
          Level- &amp; Game-<strong>Design</strong> auf <strong>Papier</strong>
        </li>
        <li>
          Minecraft-<strong>Modifikationen</strong> &ndash; <strong>Redstone</strong>-<strong>Schaltungen</strong>
        </li>
      </ul>
      </summary>
      Seit mein Vater – ein Professori für <strong>Computerspiele</strong> – mich bereits mit <strong>drei Jahren</strong> vorsichtig an dieses Medium herangeführt hat, interessierte ich mich nicht nur für das <strong>Spielen</strong>, sondern ebenso für die <strong>Entwicklung</strong> von Games. Ich zeichnete zusätzliche Level für Super Mario oder entwarf neue Spiele &mdash; meine <strong>ersten Schritte</strong> im <strong>Game-Design</strong>. Später verbrachte ich viel Zeit damit, die Redstone-Elemente in Minecraft zu kombinieren, um <strong>logische Schaltungen</strong>, <strong>Rechensysteme</strong>, <strong>Binärzähler</strong> und <strong>Segmentanzeigen</strong> zu konstruieren. Auch die <strong>Modifikation</strong> des Spiels durch <strong>eigene Resourcepacks</strong> bereitete mir große Freude.
    </details>
    <img src="startpageArrow.png" class="klicken">
  </div>
  
  <div class="details-flex-item">
      <details>
          <summary>Alter: <strong>9–13</strong><br>
          <ul>
            <li><strong>3D-Modellierung</strong>, Zeichnen &amp; Stop-Motion-<strong>Trickfilme</strong></li>
            <li><strong>Text-Games</strong> mit Batch</li>
            <li><strong>Grafikbearbeitung</strong></li>
          </ul>
          </summary>
          Im Alter von <strong>9 Jahren</strong> begann mein Interesse am <strong>3D-Modelling</strong>, was sich durch Architektur-Projekte in Google SketchUp und diverses Modeling in Sculpt3D widerspiegelte. Mit <strong>10 Jahren</strong> folgten kleinere <strong>Text-Games</strong>, die ich mit Batch – meiner ersten Programmiersprache – und dem Windows Editor umsetzte. Mit einem Leuchtturm von Fischer-Technik machte ich zu dieser Zeit erste Erfahrungen mit <strong>Ablaufsteuerungen</strong>. Am Nintendo DS erstellte ich <strong>Zeichentrickanimationen</strong> über das Touchpad und kleine <strong>Stop-Motion-Trickfilme</strong>. Mit <strong>11 Jahren</strong> begann ich mit der <strong>grafischen Bildbearbeitung</strong> mit Paint, mit <strong>13 Jahren</strong> intensivierte ich dieses Hobby mit <strong>GIMP</strong>.
      </details>
      <img src="startpageArrow.png" class="klicken">
  </div>

  <div class="details-flex-item">
      <details>
          <summary>Alter: <strong>13–14</strong><br>
          <ul>
            <li>
              <strong>Pong</strong> mit Processing
            </li>
            <li>
              <strong>Dynamische 2D-Generierung</strong> mit TypeScript 
            </li>
          </ul>
          </summary>
          Etwa zur selben Zeit befreite mich <strong>TypeScript</strong> aus der Unflexibilität von Batch, was mir die <strong>dynamische Generierung zweidimensionaler Bilder</strong> auf einem Canvas ermöglichte. Im Rahmen des mehrmals besuchten Kinder-Uni-Feriencamps in Furtwangen machte ich erste Erfahrungen mit <strong>Processing</strong> und programmierte <strong>Pong</strong>. Jedes Erlernen eines neuen programmiertechnischen Werkzeugs verstärkte die Erkenntnis der Möglichkeit, meine Ideen in einem digitalen Medium festzuhalten und sie – interaktiv oder passiv – später wieder abrufbar zu machen, was meine <strong>Motivation</strong> immer weiter steigen ließ.
      </details>
      <img src="startpageArrow.png" class="klicken">
  </div>

  <div class="details-flex-item">
      <details>
          <summary>Alter: <strong>14–16</strong><br>
          <ul>
            <li>
              Begeisterung für <strong>Vektorrechnung</strong> und <strong>fraktale Geometrie</strong>
            </li>
            <li>
              <strong>Gründung</strong> der <strong>Informatik-AG</strong> am Gymnasium
            </li>
            <li>
              Programmierung <strong>künstlicher Intelligenz</strong> zur <strong>Bildverarbeitung</strong>
            </li>
            <li>
              Programmierung <strong>Übersetzer</strong> für Geheimsprache
            </li>
          </ul>
          </summary>
          Ich erkannte durch die Programmierung die <strong>Relevanz der Mathematik</strong> in verschiedenen Bereichen und begann mit experimenteller Programmierung für verschiedene Fächer am <strong>technischen Gymnasium</strong>, wo auch meine erste formale Ausbildung in Informatik begann. Mit <strong>15 Jahren</strong> entwickelte ich eine regelrechte Begeisterung für die Möglichkeiten der <strong>Vektorrechnung</strong> und <strong>fraktalen Geometrie</strong>. Zusammen mit einem Lehreri und einem Mitschüleri, mit dem ich einen <strong>Übersetzer</strong> für eine ausgedachte <strong>Geheimsprache</strong> programmierte, gründete ich eine <strong>Informatik-AG</strong>. In dieser wagten wir uns an die Programmierung <strong>neuronaler Netzwerke</strong>, um mit <strong>künstlicher Intelligenz</strong> zu experimentieren, besonders in der <strong>Echtzeit-Bildverarbeitung</strong> eines Live-Kamerabildes.
      </details>
      <img src="startpageArrow.png" class="klicken">
  </div>

  <div class="details-flex-item">
      <details>
          <summary>Alter: <strong>17–18</strong><br>
          <ul>
            <li>
              <strong>Erstsemester</strong>-Selbststudium – <strong>Game of Life &amp; Tic-Tac-Toe</strong>
            </li>
            <li>
              <strong>GGJ VR-Spiel</strong> – Gamedesign und Sound (Fuwashima)
            </li>
            <li>
              Private Fortbildung – <strong>Unity</strong> und <strong>Blender</strong>
            </li>
          </ul>
          </summary>
          Im Rahmen der freiwilligen Aufgaben des Programmiermoduls des ersten Semesters meines abgeschlossenen Studiums entwickelte ich mit Java einen ewigen Kalender, <strong>Game of Life</strong> und <strong>Tic-Tac-Toe</strong>. Letzteres baute ich mit einem zufällig spielenden Computergegneri aus, der zum Trainieren einer künstlichen Intelligenz genutzt werden soll.<br>
          Beim <strong>Global Game Jam 2020</strong> im Spiellabor der Hochschule wirkte ich in einem Team bei der Entwicklung eines <a href="#fuwashima">VR-Spiels</a> mit. Meine Hauptaufgaben lagen im <strong>Gamedesign</strong> und <a href="#fuwashima"><strong>Sound</strong></a>. Dieses Event weckte bei mir erneut das Interesse an der <strong>3D-Programmierung</strong> und dem <strong>3D-Modeling</strong>, weshalb ich mich intensiver mit <strong>Unity</strong> und <strong>Blender</strong> beschäftigte.
      </details>
      <img src="startpageArrow.png" class="klicken">
  </div>

  <div class="details-flex-item">
      <details>
          <summary>Alter: <strong>18–20</strong><br>
          <ul>
            <li>
              Angestellt als <strong>Tutori</strong> für Programmierung
            </li>
            <li>
              <strong>360°</strong>-Point-and-Click &amp; Eisladen-<strong>Browsergame</strong>
            </li>
            <li>
              <strong>Praktikum</strong> &amp; <strong>Werkstudium</strong> – <strong>Bau-Simulator</strong> bei <strong>weltenbauer.</strong>
            </li>
            <li>
              <strong>Horrorgame Morbus Animi</strong>, <strong>Fantasy-Roguelike</strong>, <strong>AR-Bierpong-Browsergame</strong>
            </li>
          </ul>
          </summary>
          Ab Oktober 2019 studierte ich sieben Semester lang <strong>Medieninformatik</strong> an der Hochschule Furtwangen. Nach dem ersten Semester erhielt ich von meinen Professoren für Mathematik und Informatik Anfragen, als <strong>Tutor</strong> für Programmierung tätig zu werden.<br>
          Ich beendete das zweite Semester mit einer <a href="dischoverhfu"><strong>360°-Panorama-Verkörperung</strong></a> der Schnitzeljagd an der Hochschule Furtwangen sowie einer <a href="#eisladen"><strong>Eisladen-Website</strong></a> mit Server, realisiert als Browsergame.
          Mein Praktikum im dritten Semester absolvierte ich bei <a href="https://www.weltenbauer-se.com/de" target = "_blank"><strong>weltenbauer. Software Entwicklung GmbH</strong></a>, wo ich im Development-Team am <strong>Bau-Simulator</strong> mitarbeitete. Das Unternehmen behielt mich anschließend zwei weitere Jahre als Werkstudenti.<br>
          Im vierten und fünften Semester, dem <strong>Projektstudium</strong>, entwickelte ich mit einem sechsköpfigen Team das psychologische <a href="morbus-animi"><strong>Horrorspiel Morbus Animi</strong></a>. Im sechsten Semester folgten weitere Spiele wie <a href="the-last-hope"><strong>The Last Hope</strong></a>, ein <strong>Roguelike</strong>, oder <a href="realtime-beerphong"><strong>BeerPhong</strong></a>, eine browserbasierte <strong>AR</strong>-Version des bekannten Partyspiels.
      </details>
      <img src="startpageArrow.png" class="klicken">
  </div>
</div>

<br>

<style>

#ausfuehrlicher-lebenslauf {
    text-align: center;
    font-style: italic;
}

</style>

<br>
<p id="ausfuehrlicher-lebenslauf"><a href="Lebenslauf.pdf" target="_blank"><i class="fa-solid fa-file-lines"></i>&nbsp;&nbsp;Ausführlicher Lebenslauf</a></p>

<style>

#motivation-end-container {
  padding: 0% 28.604%;
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 20px;

  margin-bottom: 0px;
  margin-top: 0px;
  padding-top: 100px;
  padding-bottom: 25px;

  font-size: large;
}


@media (max-width: 900px){
  #motivation-end-container {
    padding: 0% 23.604%;
    text-align: start;

    padding-top: 100px;
    padding-bottom: 25px;
  }
}


@media (max-width: 500px){
  #motivation-end-container {
    padding: 0% 9%;
    padding-left: 5.18%;

    padding-top: 100px;
    padding-bottom: 25px;
  }
}

#motivation-end-container p{
  margin: 12.5px 0px 12.5px;
}

.motivation-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.motivation-item i {
  font-size: 1.5rem;
  width: 40px;
  min-width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}


#abschluss i {
  color: #4361ee;
}
#wunsch i {
  color: #3a0ca3;
}
#jobs i {
  color: #f72585;
}
#warum i {
  color: #4cc9f0;
}

</style>

<div id="motivation-end-container">
    <div class="motivation-item" id="abschluss">
        <i class="fa-solid fa-graduation-cap"></i>
        <p>Mit <strong>21 Jahren</strong> schloss ich das <strong>Studium</strong> mit meiner <a href="#neuroevolution-benutzerdefinierter-mehrbeiniger-kreaturen"><strong>Bachelor-Thesis</strong> "Neuroevolution benutzerdefinierter mehrbeiniger Kreaturen"</a> ab. In einem Editor werden <strong>Knochen–Gelenk–Konstruktionen</strong> erstellt, die durch <strong>Mutationen</strong> über Generationen hinweg <strong>Laufmuster</strong> von Grund auf lernen.</p>
    </div>
    <div class="motivation-item" id="wunsch">
        <i class="fa-solid fa-flag-checkered"></i>
        <p>Gerne programmiere ich <strong>Spiele ohne Gewaltdarstellungen</strong> und biete Spieleris eine eher <strong>friedliche</strong> und <strong>meditative Erfahrung</strong>. Bei Mehrspielermodi sollten alle <strong>konstruktiv</strong> und <strong>kooperativ</strong> zusammenarbeiten.<br>  
        Optimalerweise verzichtet das Spiel auf Gegneris und vermittelt <strong>intuitive Einsichten</strong> über tiefgreifende Themen und <strong>Philosophien</strong>. <strong>Puzzle-Games</strong>, <strong>Aufbau-Strategiespiele</strong> sowie <strong>Cozy–</strong> oder <strong>Educational-Games</strong>, <strong>Simulatoren</strong> oder <strong>Musik–, Sound– und Rhythm-Games</strong> kommen besonders infrage.</p>
    </div>
    <div class="motivation-item" id="jobs">
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <p><strong>Programmieren</strong> stellt meine <strong>Haupttätigkeit</strong> dar. Grundlegende <strong>3D-Modelling–</strong> und <strong>Design-Kenntnisse</strong> sind vorhanden, jedoch nicht als Haupttätigkeit bevorzugt. Daneben bin ich <strong>musikalisch begabt</strong> und spiele viele Instrumente – digital wie akustisch. Daher wirke ich gerne in der <strong>Soundgestaltung</strong> und <strong>Soundtechnik</strong> des Spiels mit.</p>
    </div>
    <div class="motivation-item" id="warum">
        <i class="fa-solid fa-circle-check"></i>
        <p>Auf dieser Seite sammle ich einige meiner <strong>Arbeiten</strong>, um einen <strong>Beleg</strong> für meinen <strong>Enthusiasmus</strong> und meine <strong>Lernfähigkeit</strong> zu liefern und Interesse für ein Angebot als <strong>Spieleprogrammiereri</strong> zu wecken.</p>
    </div>
</div>

<style>
/*
h1#header-coding,
h1#header-coding ~ h1 {
    text-align: center;
}
*/
.task-list{
  text-align: start;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 53px !important;
}


.flex-item {
  width: calc(-37px + 33.333333%); /* Standard: 3 Elemente pro Zeile */
  box-sizing: border-box;
  padding: 0px;
  background-color: #212529;
  text-align: center;

  position: relative; /* Notwendig, damit .toggle-content sich relativ zum flex-item ausrichtet */
  overflow: visible; /* Erlaubt, dass das ausgeklappte Element überlappt */

  border: #2f2f2f;
  border-style: none;
  border-width: medium;
}

button.more-projects:hover {
    opacity: 0.618;
}

button.more-projects {
  top: -23px;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  width: 140px;
  height: 52px;
  line-height: 52px;
  font-family: inherit;
  font-weight: bold;
  font-size: x-large;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00a8dd;
  color: #f8f9fa;
  border: none;
}

.excess {
  display: none;
}

/* !FONT TRYOUT!*/
.flex-item *:not(i) {
    /* font-family: "Poppins", sans-serif !important; */
}

#video-flex-container .flex-item{
  width: 100% !important;
}

.toggle-content {
  overflow: hidden;
  height: 0;

  position: absolute;
  z-index: 10;
  width: 100%; 
  left: 0;
  background: #E9ECEF;
}

.heading-toggle-content {
  margin: 0;
  padding: 0;
  text-align: center;
  background: #343a40;
  user-select: none;
  z-index: 12;
  height: auto;
  position: relative;
}

.heading-toggle-content h2{
  margin: 0 !important;
  z-index: 13;
  padding: 0;
  background: none;

  font-size: 32px;
  color: #f8f9fa;

  white-space: nowrap;
}

.heading-toggle-content h4 {
  color: #F8F9FA;
}

.toggle-content.second-toggle-content h4 {
  font-size: 17px;
  color: #F8F9FA;
  /*background-color: hsl(210 9% 34% / 1) !important;*/
}

.second-toggle-content {
  bottom: 0;
  pointer-events: none; 
}

.second-toggle-content a {
  pointer-events: auto;
}

.flex-item.hovered .toggle-content.second-toggle-content {
  opacity: 0.82;
}

.expanded .toggle-content.second-toggle-content {
  height: 128px !important;
  top: 100%;
  background-color: hsl(210deg 13.95% 83.14%) !important;
}

.expanded .second-toggle-content h4 {
    color: #343a40 !important;
}

.third-toggle-content {
  z-index: 13;
}

.flex-item.hovered .toggle-content:not(.third-toggle-content){
  overflow: visible;
  height: auto;
  background-color:  #343a40;
}


.flex-item.expanded .toggle-content:not(.third-toggle-content){
  overflow: visible;
  height: auto;
  background-color:  #343a40;
  opacity: 1;
}

.flex-item.expanded .toggle-content {
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 2px solid rgb(102, 102, 102);
  border-radius: 4px; 
  box-sizing: border-box;
  */
  height: auto;
  overflow: visible !important;
  padding: 0;
  margin: 0;
}

.expanded .heading-toggle-content {
  transform: translateY(-164.8%);
}

.expanded .third-toggle-content {
  padding-bottom: 22px !important;
}



/* .flex-container:hover .flex-item:not(.expanded) {
  filter: blur(5px);
  opacity: 0.5;
} */


#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  z-index: 0;
}

.expanded .visual-presentation-container img, .expanded .visual-presentation-container video {
    z-index: 12 !important;
}

.flex-item {
    filter: none !important;
    opacity: 1 !important;
}

body:has(.flex-item.expanded) .flex-item:not(.expanded) {
    filter: blur(5px) !important;
    opacity: 0.5 !important;
}
        
@media (max-width: 1225px) {
  .flex-item {
      width: calc(-25px + 50%) !important;
  }
}

@media (max-width: 700px) {
  .flex-item {
    width: 100% !important; /* 1 Element pro Zeile */
  }
}



.klicken-indicator{
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2em;
  pointer-events: none;
  display: inline-block;
  vertical-align: middle;
  text-align:center;
  white-space: nowrap;
  opacity: 0;
}

.expanded.hovered .klicken-indicator {
  opacity: 1;

  font-size: 2em;
  font-weight: bold;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6180339);
  transition: all 0.2s ease-in-out;
}

#klicken-beerphong-special-indicator{
  left: 25%;
  color: black;
}

.visual-presentation-container:not(#multi-display) {
  position: relative;
  cursor: pointer;
}

#multi-display{
  border: 0;
}


.flex-item .visual-presentation-container a {
  filter: grayscale(40%);
  transition: all 0.3s ease-in-out;
}

.flex-item.hovered .visual-presentation-container a {
  filter: grayscale(26%) !important;
}

.flex-item.expanded .visual-presentation-container a {
  filter: grayscale(0%) !important;
}


.visual-presentation-container video, .visual-presentation-container img, .visual-presentation-container:not(#multi-display) {

  border: 0;
  display: block !important;        /* Macht den <a>-Tag zu einem Blockelement, damit es eine feste Größe haben kann */

  width: 100%  !important;          /* Bild skaliert auf die Breite des Containers */
  height: auto  !important;         /* Höhe wird automatisch angepasst, um das Seitenverhältnis beizubehalten */
  object-fit: fill  !important; 

  padding: 0;
  margin: 0;
  box-shadow: 0 0 0px !important;
  /* -webkit-box-shadow: 0 0 0px #ebebeb !important; */
}

.primary-info-container {
  margin: 0;
  padding: 0;
  background: #495057;
  user-select: none;
  height: 29.66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.primary-info-container > *{
  pointer-events: none;
  user-select: none;
}

.vignette {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(circle, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 100%);
  transition: all 0.3s ease-in-out;
}

.hovered .vignette{
  background: radial-gradient(circle, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.26) 100%);
}

.expanded .vignette{
  background: radial-gradient(circle, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
}


.duration {
  left: 2%;
  background-color: rgb(67 97 238);
  color: #F8F9FA;
  font-size: 14px;
  display: none;
  padding: 3px 12px;
  border-radius: 5px;
  font-weight: bold;
  font-family: sans-serif;
  white-space: nowrap;
}

.team-size-container {
  display: flex;
  align-items: center; /* Perfekte vertikale Ausrichtung */
  gap: 5px; /* Abstand zwischen Icon und Text */
  font-size: 19px !important;
  color: #4cc9f0;
  /* text-shadow: -1px 0 #f8f9fa, 0 1px #f8f9fa, 1px 0 #f8f9fa, 0 -1px #f8f9fa; */
  margin-left: 1.618%;
}

.team-size-container span {
  display: flex;
  align-items: center;
}

.team-size-container i {
  font-size: 19px; /* Gleiche Größe wie der Text */
  line-height: 1; /* Verhindert Höhenabweichungen */
  display: flex; /* Sorgt für perfekte Zentrierung */
  align-items: center;
}

.team-size-container i.material-icons {
    font-size: 20px !important;
}

.context-awards {
  position: absolute;
  flex-direction: row;
  width: auto;
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  left: 30%;
  transform: translateX(-50%);
}

.context-awards * {
  font-size: 19px !important;
  color: #3a0ca3;
  text-shadow: -1px 0 #f8f9fa, 0 1px #f8f9fa, 1px 0 #f8f9fa, 0 -1px #f8f9fa;
}

.tags {
  flex-direction: row;
  width: 100%;
  display: flex;
  gap: 6.18px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  right: 0%;
  bottom: 0%;
  height: fit-content;
  margin-right: 6.18px;
}

.tag {
  background-color: rgb(114 9 183);
  color: #F8F9FA;
  font-family: Arial, sans-serif;
  font-size: 12px;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: bold;
  font-family: sans-serif;
  white-space: nowrap;
}

/*
.hovered .primary-info-container, .expanded .primary-info-container{
  display: none;
}
*/

:root {
  --person-color: hsl(194 85% 94% / 1);
  --person-outline-color: #000000;
}

.toggle-arrow {
    position: absolute;
    bottom: 0%;
    left: 50%;
    font-size: 1.7em;
    color: #F8F9FA;
    background: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 12;
    transform: translateX(-50%);
}

.expanded .toggle-arrow {
    width: 48px;
    height: 48px;
    top: 0;
    left: 100%;
    transform: translateX(-100%);
}

.toggle-arrow-span {
    display: none;
    position: relative;
    top: 2px;
    left: 0.5px;
}

.expanded .toggle-arrow-span {
    display: initial !important;
}

/* Wenn .flex-item gehovt wird -> Glow-Effekt */

.flex-item.hovered .toggle-arrow {
    /*box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);*/
    background: rgba(0, 0, 0, 0.1618);
}

/* Wenn der Pfeil selbst gehovt wird -> Klar als klickbar erkennbar */
/*
.toggle-arrow:hover {
    transform: translateX(-50%) scale(1.16180339);
    opacity: 1;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.8);
}
*/
        
.skills {
  line-height: 2.1;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 15px;
}

.task-list {
    list-style: none;
    padding-left: 25px;
    padding-right: 25px;
}

.task-list ul {
    list-style: none;
    padding-left: 0; /* Entfernt zusätzlichen Einzug */
}

.task-list ul li {
    display: flex;
    align-items: flex-start;
}


.task-list ul li::before {
    content: "➜"; /* Pfeil-Symbol */
    color: black;
    font-weight: bold;
    margin-right: 8px; /* Abstand zwischen Pfeil und Text */
    flex-shrink: 0; /* Verhindert, dass der Pfeil skaliert wird */
}

.task-list li span {
    display: block;
    margin-left: 10px;
}

.controls {
  padding-left: 25px;
  padding-right: 25px;
}

</style>

<!-- pdf icon -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
<!-- person icon -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- calendar icon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- clock icon -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
<!-- user tie -->
<!-- persons icon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<!-- umbrella icon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

<div id="overlay"></div>

<div class="quote-container"><blockquote>
  <span class="quote-text">Durch […] <strong>schnelle Auffassungsgabe</strong>, […] <strong>aktive Beteiligung</strong> und <br>
  […] nie erlahmende Bereitschaft zum <strong>Mit- bzw. Weiterdenken</strong><br>
  [ist Calvin Dell’Oro] von Beginn an positiv aufgefallen.<br>
  </span>
  <footer>
    <cite class="author">— <a href="EmpfehlungsschreibenVonProfDrThomasSchneider.pdf" target = "_blank">Prof. Dr. rer. nat. Thomas Schneider</a><img src = "HFULogoMainContent.png"></cite></footer>
  </blockquote>
</div>

<div class="quote-container"><blockquote>
  <span class="quote-text">Dell'Oro genießt in unserem Hause <strong>hohes Vertrauen</strong> und war stets <strong>ehrlich</strong>, <strong>pünktlich</strong> und <strong>fleißig</strong>.<br>
  </span>
  <footer>
    <cite class="author">— <a href="PraktikumsbestätigungCalvinDellOro.pdf" target="_blank">René Nold, Geschäftsführer</a><img src = "weltenbauerLogoMainContent.png" id = "weltenbauer-main-logo"></cite>
  </footer>
  </blockquote>
</div>

<div class="section-header">
<i class="fa-solid fa-code"></i>
<h1 id="header-coding">Coding</h1>
</div>

<div class = "flex-container" id ="coding-container">
  <div class = "flex-item excess">
    <div class="toggle-content heading-toggle-content">
      <h2 id ="bau-simulator">Construction Simulator®</h2>
    </div>
    <div  class = "visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <a href="https://store.steampowered.com/app/1273400/BauSimulator" target = "_blank">
      <video width="100%" poster = "ConstructionSimulatorThumbnail.jpg" controls loop>
          <source src="ConstructionSimulator.mp4" alt="ConstructionSimulator" type="video/mp4"/>
          Ihr Browser unterstützt den Video-Tag nicht
      </video>
      </a>
      <div class="vignette"></div>
      <div class = "klicken-indicator">Klicken zum Spielen</div>
      <div class="toggle-arrow"><span class = "toggle-arrow-span"><i class="fas fa-times"></i></span></div>
    </div>
    <div class = "primary-info-container">
      <div class="team-size-container">
        <span><i class='fas fa-users'></i>&nbsp;&nbsp;25+</span>
      </div>
      <div class = "context-awards">
        <i class="fa-solid fa-user-tie"></i>
      </div>
      <div class="tags">
        <span class="tag">Unity</span>
        <span class="tag">C#</span>
        <span class="tag">FMOD</span>
      </div>
      <span class="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;2y 6m</span>
    </div>
    <div class="toggle-content second-toggle-content">
      <h4>
      <a href="https://www.weltenbauer-se.com/de" target = "_blank">weltenbauer. Software Entwicklung GmbH</a><br>
      25‑köpfiges Team + Outsourceris<br>
      Herbst 2020 – Frühling 2023<br>
      Publisher: <a href = "https://www.astragon.de/" target = "_blank">Astragon</a>
      </h4>
    </div>
    <div class = "toggle-content third-toggle-content">
      <br>
      <strong>6</strong> Monate <strong>Praktikum</strong><br>
      <strong>2,5</strong> Jahre <strong>Werkstudium</strong><br>
      <br>
      <div class = "skills">
      <strong>Unity (C#), FMOD (Audio-Integration)</strong><br>
      <em>Strukturiert – Interdisziplinär – Kooperativ</em><br>
      <strong>SCRUM, Atlassian Confluence, Plastic SCM, Mantis</strong><br>
      </div>
      <br>
      <ul class="task-list">
      <li><strong>Fahrzeug-Setup</strong><br>
          <span>Integration von dutzenden Fahrzeugmodellen mit funktionsspezifischen Logikbausteinen</span>
          <ul>
              <li>Rotationslimits, Getriebe- und Motorsimulation, Terrainsimulation</li>
              <li>Fahrzeugaudio mit FMOD</li>
          </ul>
      </li>
      <li><strong>Debug-UI-Entwicklung</strong><br>
          <span>Erstellung eines dynamischen und generischen Debug-Tools für</span>
          <ul>
              <li>Missionen, Fahrzeug-Spawning, Settings</li>
          </ul>
      </li>
      <li><strong>Navigationsdisplay</strong><br>
          <span>Anzeige des Pfades in der Minimap.</span>
      </li>
      </ul>
    </div>
    <!-- Im Dev-Team bei <a href="https://www.weltenbauer-se.com/de">weltenbauer. Software Entwicklung GmbH</a> arbeitete ich mit insgesamt 25 Mitarbeitern und weiteren Outsourcern vom Winter 2020 bis zum Frühling 2023. Begonnen als Praktikant im Büro für das dritte Semester, behielt mich das Unternehmen überzeugt als Werkstudent bis zum Bachelor-Abschluss. So sammelte ich zwei weitere Jahre lang Erfahrung in der Programmierung eines kommerziellen Mid-Tier Games. Neben strukturellem Arbeiten mit agilem Projektmanagement, wie SCRUM-Sprintmeetings, Atlassian Confluence, Versionskontrolle, Bugtracking mit Mantis in einem größeren Team und Orientierung nach Vorgaben eines kommerziellen Publishers (<a href = "https://www.astragon.de/">Astragon</a>), sowie Synergie mit Grafiker- und QA-Departments vertiefte ich mich in fortgeschrittene Programmierung mit Unity und C#. Desweiteren lernte ich FMOD als Audio-Integrationssoftware für Unity kennen.  
    Meine Hauptbeschäftigung bestand aus dem Fahrzeug-Setup, bei dem ich Modelle der Grafiker mit Logikbausteinen der Programmierer zu funktionsfähigen Baumaschinen integrierte. Da jedes der >80 Fahrzeuge sich in seinen Funktionen unterscheidet, wie beispielsweise Rotationslimits von Schaufeln und Armen oder Schaltpunkte der Motoren- und Getriebesimulation, zeichnete sich das Fahrzeug-Setup größtenteils durch Parametrierung der Logik-Assets aus. Ein weiterer Bestandteil war die intensive Kommunikation mit dem Grafik-Team, falls Meshes der Modelle ausgetauscht oder ergänzt werden mussten. Besonders im Bereich des Hydraulik-, Fahrkabinen-, Licht-, und Spiegel-Setups war die interdisziplinäre Kooperation mit dem Art-Department essentiell. Viele Ressourcen flossen auch in das Aufsetzen der Terrainsimulation, um Schuttfüllungen in verschiedenen Werkzeugen wie Schaufeln und Kipper von Mulden zu realisieren. Auch zum Fahrzeug-Setup gehörte die auditive Simulation des Baugeschehens, bei dem ich den Umgang mit Banks in FMOD lernte.  
    Meine restliche Arbeit am Bau-Simulator bestand zum Einen aus der Programmierung eines zentralen Debug-UserInterfaces, mit dem neben allen Departments vor allem die Tester der Quality-Assurance das Command-System grafisch aufbereitet und effizient benutzen können. Darunter fällt das Springen zu und Erledigen von Missionen, Spawnen von Fahrzeugen, Cargo und Props, Einstellen globaler Parameter und weitere Steuerung des Spielgeschehens auf vielen Ebenen. Für die Realisierung des Aufbaus und Designs wählte ich einen dynamisch-generischen Ansatz, der das gesamte Command-System des Spiels als Konstellation von Knöpfen, Reglern und Eingabefeldern, geordnet unter mehreren Hierarchieebenen, generiert. Somit verringerte sich der Wartungsbedarf, da neu registrierte Kommandos direkt richtig in dem Debug-UI dargestellt werden.  
    Zum Anderen bestand meine Arbeit auch aus der Programmierung einer Anzeige des Navigations-Pfades in der Minimap, um Spieler anschaulich zu ihrem Ziel in der Welt zu leiten. Hier halfen mir meine Kenntnisse der Projektion von Räumen höherer Dimensionen in Räume niederer, die ich bereits in dem Kurs "Mathematik und Simulation" erlernte -- Link zum entsprechenden Projekt --   -->
  </div>
  <div class = "flex-item excess">
    <h2 id="neuroevolution-benutzerdefinierter-mehrbeiniger-kreaturen">Neuroevolution</h2>
    <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <a href="https://simmer.io/@DerCalvino/neuroevolutionbenutzerdefiniertermehrbeinigerkreaturen" target = "_blank">
            <video width="100%" poster ="NeuroevolutionThumbnail.jpg" controls loop>
                <source src="BachelorThesis.mp4" alt="BachelorThesis" type="video/mp4"/>
                Ihr Browser unterstützt den Video-Tag nicht
            </video>
        </a>
        <div class = "klicken-indicator">Klicken zum Spielen</div>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
            <i class="fa fa-graduation-cap"></i>
            <i class="fa fa-university"></i>
          </div>
          <div class="tags">
            <span class="tag">NEAT</span>
            <span class="tag">AI</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;6m</span>
        </div>
    </div>
    <h4>
      <a href="NeuroevolutionBenutzerdefinierterMehrbeinigerKreaturen.pdf"  target = "_blank">
        <i class="fas fa-file-pdf"></i> Bachelor Thesis
      </a><br>
      Solo-Projekt<br>
      Herbst 2022 – Frühling 2023<br>
      AI-Playground
    </h4>
    <br>
    <div class="skills">
        <strong>Unity (C#), <a href = "https://en.wikipedia.org/wiki/Neuroevolution_of_augmenting_topologies"  target = "_blank">NEAT</a></strong><br>
        <em>Forschungsorientiert – Innovativ – Selbstständig</em><br>
        <strong>Git, Roadmap, Kanban-Board</strong><br>
    </div>
    <br>
    <ul class="task-list">
    <li><strong>Evolutionäre Algorithmen</strong><br>
        <span>Selektion, Rekombination und Mutation</span>
        <ul>
            <li>Lernen von Kreaturenbewegungen über Generationen hinweg</li>
        </ul>
    </li>
    <li><strong>Simulations-basierte KI-Entwicklung</strong><br>
        <span>Kreation und Training eines neuronalen Netzwerks</span>
        <ul>
            <li>Instanzen laufen in physikalischer Simulation</li>
        </ul>
    </li>
    <li><strong>Editor für Kreaturenbau</strong><br>
        <span>Erstellen und Modifizieren von Kreaturen</span>
        <ul>
            <li>Hinzufügen und Einstellen von Gliedern und Gelenken</li>
        </ul>
    </li>
    </ul>
    <div class = "controls">
    Kamera: Mausbewegung und Drücken, Scrollen<br>
    Bauen neuer Glieder: Starten mit Linksklick, Verlängerung mit Mausbewegung<br>
    Bauen Abschließen: erneuter Linksklick<br>
    Bauen Abbrechen: rechte Maustaste<br>
    Rotations-Einstellungs-Modus: "R"<br>
    Weitere Anleitung: <a href ="NeuroevolutionBenutzerdefinierterMehrbeinigerKreaturen.pdf"  target = "_blank">Thesis</a>
    </div>
    <!-- Dieser AI-Playground ist die Methode meiner Bachelor-Thesis des siebten Semesters. Es ermöglicht Benutzern, eine Kreatur aus Gliedern und Gelenken nach Belieben in einem Editor zu bauen, sowie Rotationslimits der Glieder anzupassen. Im zweiten Schritt startet eine Simulation, bei dem der Kreatur ein vollständig verbundenes künstliches Neuronales Netzwerk zugeteilt wird. Daten über aktuelle Pose und Position werden als Sensoren oder Inputs in das Netz eingespeist, Outputs sind die angestrebten Winkel der Gelenke. Über Generationen hinweg werden die Kreatur und ihre Mutationen je nach räumlichem Fortschritt belohnt, selektiert und die besten Gene in die nächste Generation weitergetragen, wo sie wieder mutieren. Somit lernen die Bauten zu laufen.  
    Zugrunde liegen Evolutionäre Algorithmen, die Probleme ähnlich biologischer Organismen lösen, da genetische Operatoren wie Selektion, Rekombination und Mutation die Evolution durch Reproduktion der stärksten Gene steuern. In meiner Bachelor-Arbeit nutzte ich die topologische Flexibilität von NEAT (Neuroevolution of Augumenting Topologies) um die Kreaturen durch evolvierende Genome zu bewegen. Untersucht habe ich, welche Berechnungsmethode und Parameter-Konfiguration des NEAT-Algorithmus' zu der weitesten Laufdistanz verschiedener Kreaturen führt, ohne Laufmuster vorzugeben. Ich wollte eine Anwendung entwickeln, die ohne weitere Eingriffe des Nutzers zu Laufmustern seiner erstellten Kreaturen führt. Durch diese Arbeit entwickelte ich die Fähigkeit, künstliche Intelligenzen auf Basis von evolutionär veränderten Neuronalen Netzen zu programmieren und trainieren, sowie einen InGame-Editor in Unity zu programmieren.  
    Die Kamera kann im Editor mit Mausbewegung und Drücken sowie Scrollen der mittleren Maustaste gesteuert werden. Bauen neuer Glieder wird mit Linksklick gestartet und mit Mausbewegung verlängert. Ein erneuter Linksklick schließt das Bauen ab, während die rechte Maustaste das Bauen abbricht. Den Rotations-Einstellungs-Modus schalten Sie mit "R" um. Weitere Anleitung finden Sie in der <a href = "NeuroevolutionBenutzerdefinierterMehrbeinigerKreaturen.pdf">Thesis</a> -->
  </div>

  <div class = "flex-item excess">
    <h2 id="morbus-animi">Morbus Animi</h2>
    <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <a href="https://simmer.io/@DerCalvino/morbus-animi-final"  target = "_blank">
            <video width="100%" poster = "MorbusAnimiThumbnail.jpg" controls loop>
                <source src="Morbus-Animi.mp4" alt="Morbus-Animi" type="video/mp4"/>
                Ihr Browser unterstützt den Video-Tag nicht
            </video>
        </a>
        <div class = "klicken-indicator">Klicken zum Spielen</div>
        <div class = "primary-info-container">
          <div class="team-size-container">
          <span><i class='fas fa-users'></i>&nbsp;&nbsp;6</span>
          </div>
          <div class = "context-awards">
            <i class="fa fa-university"></i>
            <i class="fas fa-award"></i>
          </div>
          <div class="tags">
            <span class="tag">Horrorgame</span>
            <span class="tag">JumpNRun</span>
            <span class="tag">NavMesh</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;1y</span>
        </div>
    </div>  
    <h4>
        Projektstudium<br>
        6-köpfiges Team<br>
        Frühling 2021 – Frühling 2022<br>
        Horrorspiel, IndieNight-Erstplatziert
    </h4>
    <br>
    <div class="skills">
        <strong>Unity (C#), NavMesh</strong><br>
        <em>Teamorientiert – Strukturiert – Erzählstark</em><br>
        <strong>Style Guides, Dokumentation, Roadmap, Kanban, SCRUM, Git</strong>
    </div>
    <br>
    <ul class="task-list">
      <li><strong>Fortgeschrittener Camera-Controller</strong><br>
          <span>Programmierung eines intelligenten Third-Person-Kamerasystems</span>
          <ul>
              <li>Verdeckung, Bewegung, Hindernis-Vermeidung</li>
          </ul>
      </li>
      <li><strong>Modulare Asset-Programmierung</strong><br>
          <span>Erstellung parametrischer Assets zur flexiblen Anpassung durch andere Abteilungen</span>
          <ul>
              <li>Dynamische Elemente: Story, Level, Puzzle, Effekt, Sound</li>
          </ul>
      </li>
      <li><strong>Spielmechanik & Physik</strong><br>
          <span>Entwicklung eines Jump-and-Run</span>
          <ul>
              <li>Schwingen, Greifen, Hangeln, Parkour</li>
          </ul>
      </li>
      <li><strong>KI-Gegneri & Steuerung</strong><br>
          <span>Programmierung und Balancing der Gegneri-KI (Unity NavMesh)</span>
          <ul>
              <li>Anpassungsfähige Verfolgungs- und Fluchtmechaniken</li>
          </ul>
      </li>
      <li><strong>Details & Technische Tiefe</strong><br>
          <span>Diverses Coding zur Steigerung der Immersion und Interaktivität</span>
          <ul>
              <li>Bone-Rigs mit Multi-Aim Constraints & Weights</li>
          </ul>
      </li>
    </ul>
    <div class="controls">
        Steuerung wird im Spiel erklärt.
    </div>
    <!-- Mit zwei Grafikerinnen, einem VFX-Spezialist, einem Storyteller, einem anderen Programmierer und mir entwickelten wir im vierten und fünften Semester im Rahmen des Projektstudiums dieses psychische Horrorspiel. Auch bei der Organisation dieses Projekts half die Erfahrung mit dem SCRUM-System im kommerziellen Umfeld bei <a href="https://www.weltenbauer-se.com/de">weltenbauer. Software Entwicklung GmbH</a>.<br>
    Ich übernahm bis auf Inventar, Collectables und Menü-GUI das Coding der Skripte, um Spielmechanik, Physik-, Animations-, Sound- und KI-Controller, sowie UserInterfaces und Spielbalance zu realisieren. Besonders die Programmierung des Jump-and-Runs, mit Schwingen und Greifen sowie Hängen an Kanten, lag in meinem Fokus und lieferte eingängige Lernerfahrungen. Gleiches gilt für Entwicklung und Balancing des KI-Gegners mit Unity NavMesh. Auch mit dem Coding modularer Assets bereicherte ich das Projekt und die Kooperation, da andere Abteilungen diese parametrisierten, um Spielgeschehen wie Story-Fortschritt, Puzzle-Logik, Effekte und Sounds zu steuern. Mit diesem Titel gewannen wir den ersten Platz der Projektausstellung bei der "IndieNight" an der Hochschule Furtwangen. <br>
    Die Steuerung wird im Spiel erklärt. -->
  </div>
  <div class = "flex-item excess">
      <h2 id="the-last-hope">The Last Hope</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
          <a href="https://simmer.io/@DerCalvino/thelasthope"  target = "_blank">
              <video width="100%" poster = "TheLastHopeThumbnail.png" controls loop>
                  <source src="TheLastHope.mp4" alt="TheLastHope" type="video/mp4"/>
                  Ihr Browser unterstützt den Video-Tag nicht
              </video>
          </a>
          <div class = "klicken-indicator">Klicken zum Spielen</div>
          <div class = "primary-info-container">
            <div class="team-size-container">
              <span><i class='fas fa-users'></i>&nbsp;&nbsp;6</span>
            </div>
            <div class = "context-awards">
              <i class="fa fa-university"></i>
              <i class="fas fa-award"></i>
            </div>
            <div class="tags">
              <span class="tag">Rouge-like</span>
              <span class="tag">NavMesh</span>
            </div>
            <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;6m</span>
          </div>
      </div>  
      <h4>
          Gamedesign-Workhop<br>
          6-köpfiges Team<br>
          Sommer – Herbst 2022<br>
          Rouge-like, IndieNight-Auszeichnung
      </h4>
      <br>
      <div class="skills">
          <strong>Unity (C#), NavMesh</strong><br>
          <em>Kreativ – Kooperativ – Interdisziplinär</em><br>
          <strong>Gameplay-Design, Wireframes, User Tests, Klassendiagramme, Sounddesign, Kanban-Board, SCRUM, Git</strong><br>
      </div>
      <br>
      <ul class="task-list">
        <li><strong>Spielmechanik & Physik</strong><br>
            <span>Programmierung der Spielphysik und Mechaniken</span>
            <ul>
                <li>Beschwörungs- und Zauberkampfsystem, Spielbalance</li>
            </ul>
        </li>
        <li><strong>KI-Controller</strong><br>
            <span>Logik von KI-Gegneris (Unity-NavMesh)</span>
            <ul>
                <li>Bewegungssteuerung, intelligentes Angreifen</li>
            </ul>
        </li>
        <li><strong>Sound & Animation</strong><br>
            <span>Integration von Soundeffekten und Animationen</span></li>
        <li><strong>User Interface</strong><br> 
            <span>Design und Implementierung der Bedienoberfläche</span><br>
            <ul>
                <li>Kombination von Fähigkeitskarten</li>
            </ul>
        </li>
      </ul>
      <div class="controls">
          W, A, S, D zum Laufen<br>
          Maustasten, Q, E zum Angreifen<br>
          Inventar: I<br>
          Fähigkeitskarten kombinieren: Drag and Drop
      </div>
      <!-- "Conflux - TheLastHope" entstand in einem sechsköpfigen Team. Im Kurs "Gamedesign Workshop" des sechsten Semesters programmierte ich den Großteil des Unity-Spiels, wie Spielmechanik, Physik-, Animations-, Sound- und KI-Controller, sowie UserInterfaces und Spielbalance. Begonnen mit Themenwahl, Abstimmung über Spielideenvorstellung und einer gemeinsamen Vision und Moodboard, einigten wir uns auf ein Rouge-like, dessen Story sich an H.P.Lovecrafts "Cthulhu-Mythos" orientiert. Der Spieler als Auserwählter utilisiert die 4 Elemente von Gott und Teufel kombinatorisch, um gegen die drohende Instabilisierung des Gleichgewichts durch Cthulhu der Erde anzukämpfen. Es folgten Gameplaypillars und -Loops, USP-Definition, Wireframes für Menüs und Fähigkeitskarten, Bedienungsprofile, Klassendiagramme, Sounddesign, Kanban-Boards und Priorisierungslisten, während in SCRUM-Meetings sorgfältig protokolliert und reviewed wurde. Hierbei half die bereits vorhandene Erfahrung im professionellen Umfeld bei <a href="https://www.weltenbauer-se.com/de">weltenbauer. Software Entwicklung GmbH</a>.  
      Das Projekt endete mit UserTests inklusive Fragebögen, sowie dem Gewinnen der Projektauszeichnung bei der "IndieNight" an der Hochschule Furtwangen.  
      Laufen erfolgt mit W A S D, Angreifen mit den Maustasten, Q und E. I öffnet das Inventar. Drag and Drop von einer Fähigkeitskarte auf eine andere ermöglicht das Kombinieren. -->
    </div>
    <div class = "flex-item excess">
      <div class="toggle-content heading-toggle-content">
      <h2 id="realtime-beerpong">Realtime-BeerPhong</h2>
      </div>
      <div id = "multi-display" class = "visual-presentation-container" style="display: flex; justify-content: space-between;">
        <a href="https://calvindo.github.io/Realtime-BeerPhong/aFrame.html"  target = "_blank">
          <div style="position: relative;">
            <img src="BeerPhong.jpeg" style="width: 100%; height: auto; max-width: 100%;">
            <div class = "klicken-indicator">Klicken<br>zum<br>Spielen</div>
          </div>
        </a>  
        <a href="BeerPhongMarker.png" download>
          <div style="position: relative;">
            <img src="BeerPhongMarker.png" style="width: 100%; height: auto; max-width: 100%;">
            <div id = "klicken-beerphong-special-indicator" class = "klicken-indicator">Klicken<br>zum<br>Marker</div>
          </div>
        </a>
        <div class="toggle-arrow"><span class = "toggle-arrow-span"><i class="fas fa-times"></i></span></div>
      </div>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <span><i class='fas fa-users'></i>&nbsp;&nbsp;3</span>
          </div>
          <div class = "context-awards">
              <i class="fa fa-university"></i>
            </div>
          <div class="tags">
            <span class="tag">WebAR</span>
            <span class="tag">GLSL</span>
            <span class="tag">JS</span>
            <span class="tag">Three.js</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3m</span>
        </div>
      <div class="toggle-content second-toggle-content">
        <h4>
        Echtzeit-Computergrafik<br>
        Trio-Team<br>
        Herbst 2022<br>
        Mobile Web-AR Partyspiel
        </h4>
      </div>
      <div class = "toggle-content third-toggle-content">
        <br>
        <div class = "skills">
          <strong>WebAR, JavaScript, GLSL, Three.js</strong><br>
          <em>Innovativ – Kollaborativ – Kreativ</em><br>
          <strong>Dokumentation, UI/UX, Sprint-Meetings, Git</strong>
        </div>
        <br>
        <ul class="task-list">
          <li><strong>Shader-Programmierung</strong><br>
              <span>Erstellung von Vertex- und Fragment-Shadern für AR-Rendering</span>
              <ul>
                  <li>Beleuchtung, Materialeffekte, visuelle Optimierung</li>
              </ul>
          </li>
          <li><strong>Physik & Wurfmechanik</strong><br>
              <span>Implementierung der Ballflugbahn</span>
              <ul>
                  <li>Aufprall- und Abprall-Logik, Touchscreen-Gestensteuerung</li>
              </ul>
          </li>
          <li><strong>Augmented Reality & Web-Integration</strong><br>
              <span>Nutzung von WebAR & Three.js</span>
              <ul>
                  <li>Platzierung des Spieltisches über einen AR-Marker</li>
              </ul>
          </li>
        </ul>
        <div class="controls">
            Smartphone-Kamera auf Marker richten<br>
            Swipen zum Werfen<br>
        </div>
      </div>
      <!-- Dieses webbasierte Mobile-Game erfordert einen AR-Marker, über dem auf dem Smartphone ein Beerpong-Tisch mit Bechern als Ziele generiert wird. Der Spieler bewegt sich um den Tisch herum, um aus einer günstigen Abwurfposition heraus den Ball mit einem Swipe auf dem Touchscreen so in die Spielszene zu werfen, dass er direkt oder nach Aufkommen auf der Platte in einem Becher landet.  
      Die Umsetzung innerhalb des Kurses "Echtzeit-Computergrafik" im sechsten Semester erfolgte mit WebAR, JavaScript und GLSL. In einem dreiköpfigen Team machten wir uns mit Programmierung von Vertex- und Fragmentshadern vertraut, sowie mit Umgebungsvariablen von WebAR und "Three.js". -->
    </div>
    <div class = "flex-item excess">
      <h2 id="gesetzestext-generator">Gesetzestext-Generator</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <a href="https://colab.research.google.com/github/CalvinDO/AITextGenerator/blob/main/LawLanguageRNN/textGenerator.ipynb"  target = "_blank">
          <img src="TextGenerator.png" width="100%">
        </a>
        <div class = "klicken-indicator">Klicken zum Anwenden</div>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
            <i class='fas fa-umbrella-beach'></i>
          </div>
          <div class="tags">
            <span class="tag">Python</span>
            <span class="tag">TensorFlow</span>
            <span class="tag">RNN</span>
            <span class="tag">GRU</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;10d</span>
        </div>
      </div>  
      <h4>
        Introduction to Deep Learning<br>
        Solo-Selbststudium<br>
        Frühling 2022<br>
        AI-Experiment
      </h4>
      <br>
      <div class="skills">
          <strong>Python, Keras (TensorFlow), Jupyter Notebook, Language Model, Recurrent Neural Networks (RNN), GRU</strong><br>
          <em>Forschungsorientiert – Innovativ – Selbstständig</em><br>
          <strong>Google Colab, Git</strong><br>
      </div>
      <br>
      <ul class="task-list">
        <li><strong>Trainingsdatensatz & Vorverarbeitung</strong><br>
            <span>Erstellung eines Textmodells mit Bürgergesetzbuch als Trainingsdaten</span>
            <ul>
                <li>Umwandlung des Textes in sequenzielle Eingaben und Zielzeichen</li>
            </ul>
        </li>
        <li><strong>Neuronale Netzwerk-Architektur</strong><br>
            <span>Implementierung eines GRU-basierten RNNs in Keras</span>
            <ul>
                <li>Architektur aus Embedding, GRU und Dense-Schichten</li>
            </ul>
        </li>
        <li><strong>Textgenerierung</strong><br>
            <span>Erzeugung von neuen Paragraphen basierend auf beliebigen Startzeichen</span>
            <ul>
                <li>Anpassung der Vorhersage durch Temperatur</li>
            </ul>
        </li>
        <li><strong>Zukünftige Erweiterungen</strong><br>
            <span>Testen von LSTM und GPT für verbesserte Textgenerierung</span>
            <ul>
                <li>Vergleich der Performance und Effizienz</li>
            </ul>
        </li>
      </ul>
      <div class="controls">
          Code-Blöcke in Colab ausführen, Kommentare beachten
      </div>
      <!-- Das Bürgergesetzbuch als Trainingsdaten eingespeist, "erfindet" mein Gesetzestext-Generator neue Paragraphen am laufenden Band. Dieses Freizeitprojekt ist eine --darüber hinausgehung-- des Kurses "Introduction to Deep Learning" im fünften Semester, in dem ich bereits Logistische Regression mit BCE und Softmax, Backpropagation und Convolutional Neural Networks erlernte.  
      Das gesamte Projekt wurde in einem Jupyter Notebook mit Python entwickelt. Zuerst werden die Trainingsdaten für das Language Model, hier das Gesetzbuch als String mit 1,8 Millionen Zeichen, geladen, und einzigartige Zeichen im Text analysiert. Diesen werden IDs zugeordnet und der Text in eine Sequenz von solchen umgewandelt. In Input- und Target-Sequenzen aufgeteilt, stellt das Target das nächste Zeichen der Sequenz dar.
      Für die Architektur wählte ich das Keras Model von Tensorflow mit einem GRU (Gated Recurrent Unit) Layer als Hauptkomponente. Vorrangeschaltet ist ein Embedding-Layer, in dem eine beliebig lange Input-Sequenz zu einem dichten Vektor umgewandelt wird, während eine vollständig verbundene Dense-Schicht den finalen Output berechnet - der Wahrscheinlichkeit für das nächste Zeichen.  
      Nach der Erstellung des Modells wird es mit dem vorbereiteten Datenset trainiert. Ich habe die SparseCategoricalCrossentropy-Loss-Funktion verwendet, um den Fehler zwischen den Vorhersagen und den Zielzeichen zu messen. An diesem Loss lernt das Modell, und versucht, ihn zu minimieren. Auch habe ich einen Checkpoint-Mechanismus zur Persistenz eingerichtet.  
      Das Modell generiert nun auf Basis eines gegebenen Startzeichens mit einem One Step Model Zeichen für Zeichen neuen Text. Bei jedem Schritt trifft das Modell eine Vorhersage für das nächste Zeichen, wobei die Wahrscheinlichkeiten für mögliche Zeichen mittels der Temperatur angepasst werden können. Dies beeinflusst, wie zufällig oder deterministisch die generierten Zeichen sind.  
      Geplant ist Implementierung von und Testen der Performance von LSTM als weitere RNN-Struktur am Bürgergesetzbuch, sowie GPT als generativer Transformer wegen Self-Attention- und Parallelisierungsmechanismen. Auch würde die Verwendung einer Wörterbuch-Datenbank würde Effizienz in dem Use Case des Gesetzesbuchs deutlich steigern, allerdings zu weniger komischen Neologismen führen. -->
    </div>
    <div class = "flex-item excess">
    <h2 id="baumgenerator">Baumgenerator</h2>
    <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <a href="Code/TreeGenerator/TreeGenerator.zip" download>
        <img src="TreeGenerator.png" width="100%" />
      </a>
      <div class = "klicken-indicator">Klicken zum Downloaden</div>
      <div class = "primary-info-container">
        <div class="team-size-container">
          <span><i class='fas fa-users'></i>&nbsp;&nbsp;3</span>
        </div>
        <div class = "context-awards">
          <i class="fa fa-university"></i>
        </div>
        <div class="tags">
          <span class="tag">Blender API</span>
          <span class="tag">Vektorrechnung</span>
        </div> 
        <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3m</span>
      </div>
    </div>
    <h4>
      Datenverarbeitung in der Medienproduktion<br>
      Trio-Team<br>
      Frühling 2022<br>
      Blender-Addon
    </h4>
    <br>
    <div class="skills">
      <strong>Python, Blender API, Vektorrechnung</strong><br>
      <em>Kollaborativ – Systematisch – Flexibel</em><br>
      <strong>Roadmap, Kanban, Git</strong>
    </div>
    <br>
    <ul class="task-list">
        <li><strong>Parametrisierte Baumgenerierung</strong><br>
          <span>Entwicklung eines Addons zur Generierung prozeduraler Bäume</span>
          <ul>
            <li>Einstellbare Ast-Abspaltungen, Ausrichtung, Radius, Zufallsfaktoren</li>
          </ul> 
        </li>
        <li><strong>Rekursion & Vektorrechnung</strong><br>
          <span>Vertiefung und Erweiterung des technischen Vokabulars</span>
          <ul>
            <li>Rekursive Python-Programmierung</li>
            <li>Rodrigues-Rotationsformel, Kreuzprodukt, ...</li>
          </ul>
        </li>
        <li><strong>Blender-Addon-Integration</strong><br>
          <span>Realisierung als Addon in Blender mit User-Interface</span>
          <ul>
            <li>Nutzung der Blender-API</li>
          </ul>
        </li>
    </ul>
    <div class="controls">
      "Addon.py" importieren, "Generate Tree"-Button im Scene-Tab des Property-Windows klicken
    </div>
    <!-- Diesen parametrisierten Baumgenerator als Blender-Addon entwickelte ich in einem Team, bestehend aus einem weiteren Programmierer und Grafiker, der die Blätter und die Rinde der Bäume entwarf. Benutzer können in dem Tooltip die Anzahl der Ast-Abspaltungen, die Ausrichtungsstärke gen Himmel und den Radi us einstellen. Auch rekursive Parameter eines jeden Astes zu seinem auswachsenden Ast sind einstellbar, Verkürzung der Länge und des Radius', Änderung der Verkürzung der Winkel und Zufallsabweichung. Nach Import der "Addon.py"-Datei finden Sie einen "Generate Tree"-Button im Scene-Tab des Property-Windows.  
    Bei der objektorientierten Programmierung lernte ich die Rodrigues-Rotationsformel kennen und wandte andere Vektorrechnung wie das Kreuzprodukt an. Auch mit Blender-eigenen Umgebungsvariablen und Python machte ich mich vertraut. Die Instanzierung der Astaustriebe ähnelt dem Projekt [Fraktal](#fraktal)  
    Die Programmierung erfolgte im fünften Semester im Rahmen des Kurses "Datenverarbeitung in der Medienproduktion". -->
    </div>
    <div class = "flex-item excess">
      <h2 id="discombobulated-space-station">Discombobulated Space Station</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
          <a href="https://calvindo.github.io/PRIMA/"  target = "_blank">
              <video width="100%" poster = "DiscombobulatedSpaceStationThumbnail.jpg" controls loop>
                  <source src="DiscombobulatedSpaceStation.mp4" alt="DiscombobulatedSpaceStation" type="video/mp4"/>
                  Ihr Browser unterstützt den Video-Tag nicht
              </video>
          </a>
          <div class = "klicken-indicator">Klicken zum Spielen</div>
          <div class = "primary-info-container">
            <div class="team-size-container">
              <i class="material-icons">person</i>1
            </div>
            <div class = "context-awards">
              <i class="fa fa-university"></i>
            </div>
            <div class = "tags">
              <span class="tag">FUDGE</span>
              <span class="tag">Blender</span>
            </div>
            <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3m</span>
          </div>
      </div>  
      <h4>
          Prototyping Interaktiver Medien-Apps & Games<br>
          Solo-Projekt<br>
          Herbst 2022<br>
          3D-Labyrinth-Spiel
      </h4>
      <br>
      <div class="skills">
          <strong>TypeScript, FUDGE, Blender</strong><br>
          <em>Innovativ – Inkubierend – Kreativ</em><br>
          <strong>Designdokument, Git</strong>
      </div>
      <br>
      <ul class="task-list">
          <li><strong>Konzeption und Prototyping</strong><br>
              <span>Labyrinth-Spiel mit drehbarer Raumstation</span>
              <ul>
                  <li>Bewegung zum Ziel durch Rotation der Raumstation</li>
              </ul>
          </li>
          <li><strong>Technische Umsetzung</strong><br>
              <span>Einsatz der Pre-Alpha-Engine FUDGE</span>
              <ul>
                <li>Entwicklung mit didaktischem Framework</li>
              </ul>
              <span>Entwicklung eines eigenen Blender-Map-Importers</span>
              <ul>
                <li>Import von Objektpositionen und Rotationen aus Collada-Dateien</li>
              </ul>
          </li>
      </ul>
      <div class="controls">
        Bewegung: W A S D<br>
        Rotation: Q, E, Shift, Control<br>
        Hopsen: Leertaste
      </div>
      <!-- Dieses 3D-Labyrinth Spiel habe ich mit TypeScript und <a href = "https://github.com/hs-furtwangen/FUDGE">FUDGE</a> programmiert, einer Node-basierten didaktischen Engine und Editor für webbasierte Spiele.  
      Der Spieler kann mit dem Character nicht fliegen und nur minimal springen, allerdings die gesamte Raumstation um seine Position herum auf verschiedenen Achsen drehen, um bei konstanter Schwerkraft einen Weg (oder Fall) durch das Labyrinth zu ermöglichen.  
      Als das Projekt im vierten Semester innerhalb des Kurses "Prototyping Interaktiver Medien-Apps und Games" entstand, war FUDGE noch nicht ausgereift genug, um die Labyrinth-Elemente effizient im nativen Editor anzuordnen. Dieses Problem löste ich, indem ich einen eigenen Blender-Map-Importer entwickelte, Der die Objektpositionen und Rotationen aus einer Collada-Datei ausliest.  
      Laufen erfolgt mit W A S D. Gedreht wird die Raumstation durch Shift, Control, Q und E. -->
      </div>
    <div class = "flex-item excess">
      <h2 id="eisladen">Eisladen</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <a href="https://calvindo.github.io/GiS/Eisladen/"  target = "_blank">
          <video width="100%" poster = "EisladenThumbnail.png" controls loop>
              <source src="Eisladen.mp4" alt="Eisladen" type="video/mp4"/>
              Ihr Browser unterstützt den Video-Tag nicht
          </video>
        </a>
        <div class = "klicken-indicator">Klicken zum Spielen</div>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
              <i class="fa fa-university"></i>
            </div>
          <div class = "tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JSON</span>
            <span class="tag">MongoDB</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3m</span>
        </div>
      </div>
      <h4>
        Grundlagen Interaktiver Systeme<br>
        Solo-Projekt<br>
        Herbst 2020<br>
        Spielerischer Web-Shop
      </h4>
      <br>
      <div class="skills">
        <strong>HTML, CSS, JSON, TypeScript, LocalStorage, Node.js, MongoDB</strong><br>
        <em>Interaktiv – Kreativ – Progressiv</em><br>
        <strong>Wireframe, Git</strong>
      </div>
      <br>
      <ul class="task-list">
        <li><strong>Spielerische Umsetzung einer Web-Shop Aufgabe</strong><br>
          <span>Arcade-Greifer</span>
          <ul>
            <li>
              Eisbehälter, aus denen Eis entnommen wird
            </li>
          </ul>
          <span>Toppings hinzufügen</span>
          <ul>
            <li>
              Interaktive Toppings können aus Behältern auf die Eiskugeln über Förderbänder gestreut werden
            </li>
          </ul>
        </li>
        <li><strong>Backend</strong><br>
          <span>Verkäuferi kann in eigenem Bereich Bestellungen bearbeiten</span>
          <ul>
            <li>
             MongoDB-Server mit Atlas (Wartungsarbeiten eingestellt)
            </li>
          </ul>
        </li>
        <li><strong>Ohne Game-Engine oder Editor</strong><br>
          <span>Grafiken mit HTML-CanvasRenderingContext2D</span>
          <ul>
            <li>
              Komposition von Zeichenbefehlen zu Rädern, Boxen, Werkzeugen
            </li>
          </ul>
          <span>Logiken mit TypeScript</span>
          <ul>
            <li>
              Programmierung von Physik, Animation und Spielmechanik
            </li>
          </ul>
        </li>
      </ul>
      <div class="controls">
        Greifer Bewegen: Pfeiltasten<br>
        Greifer Öffnen/Schließen: Leertaste<br>
        Toppings Öffnen/Schließen: Klicken
      </div>
        <!-- Der Eisladen ist eine spielerische Lösung der Aufgabe, eine Website zu entwickeln, auf der Nutzer Eislieferungen aufgeben können --und der Verkäufer sie über einen Server bearbeiten kann--. Als letzte Prüfung des Kurses "Grundlagen interaktiver Systeme" im zweiten Semester ging ich weit über die Fragestellung hinaus und realisierte die Zusammenstellung der Delikatessen mit einem Arcade-Greifer, gesteuert über Pfeiltasten und der Leertaste. Auch Toppings können durch Klicken interaktiv aus Behältern über ein Förderband auf die Eiskugeln gestreut werden.  
        Außer der Eisbehälter ist jede Grafik und Logik selbstgemacht, mit Zeichenmethoden des HTML-CanvasRenderingContext2Ds. -->
    </div>
    <div class = "flex-item excess">
      <h2 id="dischoverhfu">DiscHoverHFU</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <a href="https://calvindo.github.io/DiscHoverHFU/Code/DiscHoverHFU.html"  target = "_blank">
          <video width="100%" poster = "DiscHoverHFUThumbnail.png" controls loop>
              <source src="DiscHoverHFU.mp4" alt="DiscHoverHFU" type="video/mp4"/>
              Ihr Browser unterstützt den Video-Tag nicht
          </video>
        </a>
        <div class = "klicken-indicator">Klicken zum Spielen</div>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <span><i class='fas fa-users'></i>&nbsp;&nbsp;2</span>
          </div>
          <div class = "context-awards">
              <i class="fa fa-university"></i>
              <i class="fa-solid fa-360-degrees"></i>
            </div>
          <div class = "tags">
            <span class="tag">360°</span>
            <span class="tag">WebXR</span>
            <span class="tag">AdobeXD</span>
            <span class="tag">OpenStreetMap</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3m</span>
        </div>
      </div>
      <h4>
        User Experience Design<br>
        Duo-Team<br>
        Herbst 2020<br>
        360° Point-and-Click
      </h4>
      <br>
      <div class="skills">
        <strong>TypeScript, HTML, CSS, LocalStorage, OpenStreetMap, JSON, WebXR, AdobeXD</strong><br>
        <em>Interdisziplinär – Innovativ – Wegweisend</em><br>
        <strong>Wireframes, Sitemaps, User Journey, Visuelle Guides, Git</strong>
      </div>
      <br>
      <ul class="task-list">
        <li><strong>Interaktive Schnitzeljagd</strong><br>
          <span>Erstie-Rallye der Hochschule als 360-Point-and-Click Adventure</span>
          <ul>
            <li>
              Leiten der Nutzeris durch die Anwendung
            </li>
          </ul>
        </li>
        <li><strong>Panorama-Touren</strong><br>
          <span>Erstellung interaktiver Panorama-Touren durch die Hochschule</span>
          <ul>
            <li>
              Programmierung mit WebXR und eigenen Methoden
            </li>
          </ul>
        </li>
        <li><strong>Datenstruktur & Interaktionen</strong><br>
          <span>Verwendung von JSON für 104 Collectibles in 27 Räumen</span>
          <ul>
            <li>
              Name, Position, Interaktionsgeräusch
            </li>
          </ul>
        </li>
      </ul>
      <div class="controls">
        Drehen & Entdecken: Maus gedrückthalten & Bewegen<br>
        Menü öffnen/schließen: E
      </div>
        <!-- Ziel dieses 360°-Point-And-Click Adventures ist die spielerische Umsetzung der "Erstie-Rallye" - einer Schnitzeljagd an der HFU für Neulinge. Im Rahmen des Kurses "User Experience Design" im zweiten Semester entwickelt, sahen wir die Notwendigkeit einer digitalen Version der Rallye wegen den Einschränkungen durch die Corona-Pandemie. Zu zweit planten wir mit Sitemaps, Wireframes, Visuellen- und Soundstyleguides, entwickelten mit TypeScript, HTML und CSS.  
        Durch Gedrückthalten und Bewegung der Maus kann der Spieler sich in den Räumen der HFU drehen und somit Ausrüstung der Hochschule entdecken. Mit der "E"-Taste öffnet sich das Menü, in dem auf die OpenStreetMap-Karte gewechselt und in dieser zu den Räumen navigiert werden kann.  
        Die Umsetzung erfolgte mit zweidimensionalen Panorama-Bildern, die durch WebXR-Polyfill und eigene Programmierung zu interaktiven Panorama-Touren wurden. Als Datenstruktur für Winkelkoordinaten der 104 Gegenstände, sowie deren Namen und Geräusch der Interaktion, wurde JSON verwendet. -->
    </div>
    <div class = "flex-item excess">
      <h2 id="fraktal-animation">Fraktal Animation</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <a href="Code/FraktalAnimation/start.html" target = "_blank">
          <video width="100%" controls loop poster="FraktalAnimation.PNG">
                  <source src="FraktalAnimation.mp4" alt="Morbus-Animi" type="video/mp4"/>
                  Ihr Browser unterstützt den Video-Tag nicht
          </video>
        </a>
        <div class = "klicken-indicator">Klicken zum Anwenden</div>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
            <i class='fas fa-umbrella-beach'></i>
          </div>
          <div class = "tags">
            <span class="tag">Animation</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;2d</span>
        </div>
      </div>
      <h4>
        Erweiterung von Fraktal<br>
        Solo-Projekt<br>
        Sommer 2019<br>
        Animierte <a href ="#fraktal">Fraktale</a>
      </h4>
      <br>
      <div class="skills">
        <strong>TypeScript, CanvasRenderingContext2D, Rekursion, Animation</strong><br>
        <em>Erweiternd – Aufbauend – Mathematisch</em><br>
        <strong>Git</strong>
      </div>
      <br>
      <ul class="task-list">
        <li><strong>Zusätzliche Dimension durch Bewegung</strong><br>
          <span>Erforschung der zeitlichen Modulation von Parametern</span>
          <ul>
            <li>
              Farbwinkel und Kreispositionen werden dynamisch verändert
            </li>
            <li>
              Einfluss des Divisors eines Vollkreises auf Musterbildung
            </li>
          </ul>
        </li>
        <li><strong>Neue Beobachtungen und Experimente</strong><br>
          <span>Unvorhersehbare visuelle Effekte durch kontinuierliche Transformation</span>
          <ul>
            <li>
              Übergänge von Farbkonstellationen und Strukturen im kleinsten Detail erkennbar
            </li>
          </ul>
        </li>
      </ul>
      <div class="controls">
        Parameter können verändert werden, um die Animation zu beeinflussen
      </div>
      <!-- Zugrunde liegt das zuvor beschriebene Projekt [Fraktal](#fraktal). Diesmal mit dem Ziel, einige Parameter der Berechnung, die sich als Dezimalbrüche darstellen lassen, wie beispielsweise der Farbwinkel, zeitlich zu modulieren, um eine zusätzliche Dimension zu schaffen, die ebenso zu etlichen neuen Beobachtungen und weiteren Experimenten führen sollte.  
      Bemerkenswert ist unter anderem der Zusammenhang, wie sich die Veränderung des Divisors eines Vollkreises, der die Positionierung der "children" eines jeden Balls bestimmt, auf die Bewegung und das Muster der Anordnung bis hin zu den kleinsten Bällen auswirkt, ebenso wie die entstehende Farbkonstellation -->
    </div>
    <div class = "flex-item excess">
      <h2 id="fraktal">Fraktal</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <a href="Code/Fraktal/start.html" target = "_blank">
          <img src="Fraktal.PNG" alt="Fraktal" width="100%">
        </a>
        <div class = "klicken-indicator">Klicken zum Anwenden</div>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
            <i class='fas fa-umbrella-beach'></i>
          </div>
          <div class = "tags">
            <span class="tag">Rekursion</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;2d</span>
        </div>
      </div>
      <h4>
        Akademische Vorbereitung<br>
        Solo-Projekt<br>
        Sommer 2019<br>
        Mathematik-Visualisierung
      </h4>
      <br>
      <div class="skills">
        <strong>TypeScript, CanvasRenderingContext2D, Rekursion</strong><br>
        <em>Experimentell – Mathematisch – Selbstständig</em><br>
        <strong>Git</strong>
      </div>
      <br>
      <ul class="task-list">
        <li><strong>Ohne konkrete Vorstellung</strong><br>
          <span>Experimentelle Entwicklung einer Applikation zur Visualisierung von rekursiven Strukturen in Fraktalen</span>
            <ul>
              <li>
                Bälle mit rekursiven "create-children"-Objektmethoden
              </li>
            </ul>
        </li>
        <li><strong>Farbwinkelberechnung</strong><br>
          <span>Kolorierung abhängig von Iterationsstufe und Ordnung der Fraktalstrukturen berechnet</span>
          <ul>
            <li>
              Ästhetik durch prozedurale Algorithmen
            </li>
          </ul>
        </li>
        <li><strong>Technische Experimente</strong><br>
          <span>Experimente mit maximaler Browserauflösung und verschiedenen Iterationsparametern</span>
            <ul>
              <li>
                Zoom eines 10.000 x 10.000 Pixel Bild, um repetitive Strukturen nahtlos entdecken zu können
              </li>
              <li>
                Veränderung der Winkel und Anzahl Kinder pro Ball
              </li>
            </ul>
        </li>
      </ul>
      <div class="controls">
        Parameter können verändert werden, um die Darstellung zu beeinflussen
      </div>
      <!-- Die Idee für diese Applikation kam mir auf, als ich die Möglichkeiten der grafischen Visualisierung durch Rekursion begriff. Das klare Endergebnis konnte ich mir, je nach Anzahl von Iteratifonen, noch nicht vorstellen, weshalb ich es sofort ausprobierte, mit dem Ziel, mich von meinem eigenen Programm zum Staunen zu bewegen.  
      Instanzierte Bälle mit "create-children" Objektmethoden schafften dies bereits. Es folgten einige Experimente mit der maximal umsetzbaren Auflösung verschiedener Browser, um ein fertig gerendertes Bild von 10000 mal 10000 Pixeln zu erhalten, welches sich stark vergrößern lässt, um die repetitiven Strukturen nahtlos entdecken zu können.  
      Daraufhin, ebenfalls ohne eine konkrete Vorstellung des Ergebnisses, begann ich den Farbwinkel abhängig von der Iterationsstufe und der Ordnung der zirkular positionierten Kreise sowohl relativ, als auch absolut zu berechnen. Auch hier war ich von der Ästhetik der visualisierten Mathematik überrascht und begeistert.  
        Auf der Seite können Sie einige Parameter der Berechnung verändern. -->
    </div>
    <div class = "flex-item excess">
      <h2 id="cardioids">Cardioids</h2>
      <div  class = "visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <a href="Code/Cardioids/start.html" target = "_blank">
        <video width="100%" controls loop poster="cardioids.PNG">
                  <source src="Cardioids.mp4" alt="Cardioids" type="video/mp4"/>
                  Ihr Browser unterstützt den Video-Tag nicht
          </video>
        </a>
        <div class = "klicken-indicator">Klicken zum Anwenden</div>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
           <i class ="fa-solid fa-person-chalkboard"></i>
          </div>
          <div class = "tags">
            <span class="tag">Kreisberechnung</span>
            <span class="tag">Algebra</span>
          </div>
          <span class ="duration"><i class="far fa-clock"></i>&nbsp;&nbsp;3h</span>
        </div>
      </div>
      <h4>
        Schulvortrag<br>
        Solo-Projekt<br>
        Frühling 2019<br>
        Herzkurve-Playground
      </h4>
      <br>
      <div class="skills">
        <strong>TypeScript, CanvasRenderingContext2D, Kreisberechnung, Algebra</strong><br>
        <em>Präsentativ – Mathematisch – Selbstständig</em><br>
        <strong>Git</strong>
      </div>
      <br>
      <ul class="task-list">
        <li><strong>Fortgeschrittene <a href ="#cardoids-tutorial">Präsentation</a> im Mathematikunterricht</strong><br>
          <span>Muster durch zirkulare Multiplikationstabellen</span>
            <ul>
              <li>
                Physikalischer Zusammenhang mit Lichtreflexionen
              </li>
              <li>
                Ähnlichkeit zum Mandelbrot-Fraktal
              </li>
              <li>
                Erklärung in meinem vertonten Video
              </li>
            </ul>
        </li>
        <li><strong>Programmiertechnische Umsetzung</strong><br>
          <span>Interaktive Anwendung zur Parametrisierung der Epizykloide </span>
          <ul>
            <li>
              Einstellung von Faktor, Auflösung, Linienstärke
            </li>
            <li>
              Fließender Übergang vom Kardioid zum Nephroid zum Trefoil zu beliebigen k-blättrigen Epizykloiden
            </li>
          </ul>
        </li>
        <li><strong>Erforschen von Mustern durch Zahlen</strong><br>
          <span>Experimentelles Entdecken weiterer mathematischer Phänome</span>
            <ul>
              <li>
                Große Faktoren führen zu visuellen Überraschungen
              </li>
              <li>
                Epizykloide mit gebrochen-zahligen Faktoren
              </li>
              <li>
                Mandala-ähnliche Ästhetik durch Formeln der Mathematik
              </li>
            </ul>
        </li>
      </ul>
      <div class="controls">
        Parameter können verändert werden, um die Darstellung zu beeinflussen
      </div> 
      <!-- Dieses Projekt ist durch eine Präsentationsarbeit im Fach Mathematik der 13. Klasse entstanden. Meine Mitschüler und ich durften uns entweder aus vorgegebenen, oder eigens ausgesuchten fortgeschrittenen Themen der Mathematik widmen. Für letzteres wählte ich aus meiner schon bestehenden Kenntnis einiger mathematischer/physikalischer Phänomene die der Kardioide aus.  
      Um die Beschreibung der dahinter liegenden Mathematik zu vermeiden, verweise ich an dieser Stelle auf das Endresultat innerhalb des Mathematik-Projekts, welches aus diesem vertonten [Video](#video) bestand.   
      Um den Mitschülern die Thematik näher zu bringen und dafür zu faszinieren, programmierte ich diese Anwendung. Bei höheren Werten des in der Applikation auch von Ihnen einstellbaren Parameters "Faktor", sowie dem ab dann interressanten Parameter "Lines", ist für mich bis heute der eindeutige Zusammenhang der eingestellten Werte mit den entstehenden Mustern zugegebenermaßen nicht eindeutig erklärbar. -->
    </div>
    <div class = "flex-item excess">
      <h2 id="rubber-band">Rubber Band</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <a href="Code/RubberBand/start.html" target = "_blank">
        <video width="100%" controls loop poster="Rubber.PNG">
                  <source src="RubberBand.mp4" alt="RubberBand" type="video/mp4"/>
                  Ihr Browser unterstützt den Video-Tag nicht
          </video>
        </a>
        <div class = "klicken-indicator">Klicken zum Spielen</div>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
            <i class='fas fa-umbrella-beach'></i>
          </div>
          <div class = "tags">
            <span class="tag">Vektoraddition</span>
          </div>
          <span class ="duration"><i class="far fa-clock"></i>&nbsp;&nbsp;1h</span>
        </div>
      </div>
      <h4>
        Freizeit-Experiment<br>
        Solo-Projekt<br>
        Frühling 2019<br>
        Physik-Simulation
      </h4>
      <br>
      <div class="skills">
        <strong>TypeScript, CanvasRenderingContext2D, Vektoraddition</strong><br>
        <em>Experimentell – Physikalisch – Selbstständig</em><br>
        <strong>Git</strong>
      </div>
      <br>
      <ul class="task-list">
        <li><strong>Dynamische Physik-Interaktion</strong><br>
          <span>Simulation von Massen mit Krafteinwirkung</span>
          <ul>
            <li>
              Koppelung durch einfache Vektoraddition
            </li>
            <li>
              Mausgesteuerte Kinematische Masse beeinflusst die Bewegung
            </li>
          </ul>
        </li>
        <li><strong>Gummiband-ähnliche Bewegung</strong><br>
          <span>Verknüpfte Massen reagieren auf Veränderungen</span>
          <ul>
            <li>
              Elastizität    
            </li>
          </ul>
        </li>
        <li><strong>Erweiterbarkeit zur Stoff-Simulation</strong><br>
          <span>Grundlage für eine zukünftige Simulation von flexiblen Stoffen</span>
          <ul>
            <li>
              Planung eines Rastersystems für realistische Materialverformung
            </li>
          </ul>
        </li>
      </ul>
      <div class="controls">
        Kinematische Masse steuern: Mausbewegung
      </div>
      <!-- Grundlage für diese Physik-Simulation war die in Echtzeit stattfindende Anwendung physikalischem Verhaltens auf Körper, die von dem Mauszeiger beeinflusst werden. Durch simple Vektoradition erschuf ich damit schon ein System dreier gekoppelter Massen, deren Verhalten annähernd Gummibändern ähneln.  
      Hieraus wird sich in naher Zukunft noch eine Simulation eines ganzen Rasters dieser Massen entwickeln, um Stoff zu simulieren (Cloth-Simulation). -->
    </div>
</div>

<div class="section-header">
<i class="fa-solid fa-dice-d6"></i>
<h1 id="modelling">Modelling</h1>
</div>
  
  
<div class = "flex-container" id = "modelling-container">
  <div class = "flex-item excess">
    <h2 id="schild">Schild</h2>
    <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <video width="100%" poster ="SchildThumbnail.png" controls loop>
            <source src="SchildWater.mp4" alt="SchildWater">
            Ihr Browser unterstützt das Videoformat nicht.
        </video>
        <div class = "primary-info-container">
        <div class="team-size-container">
          <i class="material-icons">person</i>1
        </div>
        <div class = "context-awards">
          <i class='fas fa-umbrella-beach'></i>
        </div>
        <div class="tags">
          <span class="tag">Blender</span>
          <span class="tag">Bézierkurven</span>
          <span class="tag">Mantaflow</span>
        </div>
        <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3d</span>
      </div>
    </div>
    <h4>
        Private Kursaufgabe<br>
        Solo-Projekt<br>
        Frühling 2020<br>
        Individuelle Verzierung
    </h4>
    <br>
    <div class="skills">
        <strong>Blender, Boolean-Modifier, Bézierkurven, Mantaflow-Fluidsimulation, Shader-Nodes</strong><br>
        <em>Expressionistisch – Physikbasiert – Selbstständig</em><br>
        <!-- <strong></strong> -->
    </div>
    <br>
    <ul class="task-list">
        <li><strong>Detailverliebt</strong><br>
            <span>Modellierung mit dem Boolean-Modifier</span>
            <ul>
                <li>
                    Zusätzliche Verzierung durch Bézierkurven für feinere Details
                </li>
            </ul>
        </li>
        <li><strong>Erweiterte Materialgestaltung</strong><br>
            <span>Kombination aus Noise-Texturen für prozedurale Shader</span>
            <ul>
              <li>
                  Mischung aus Diffuse, Glossy, Glass und Fresnel-Shader für realistische Wasseroptik
              </li>
              <li>
                  Separate Nodes für Wasser, Schaum, Sprühnebel und Blasen
              </li>
            </ul>
        </li>
        <li><strong>Physikbasierte Animation</strong><br>
            <span>Eigenmotivierte Flüssigkeitssimulation mit Mantaflow</span>
            <ul>
                <li>
                  Technisch versierte Nutzung von Domain und Flow
                </li>
            </ul>
        </li>
    </ul>
    <!-- Die Grundidee für diesen Schild ist der Vorarbeitung eines Computergrafik-Vorlesungsskriptes, welches nun allerdings ersetzt wurde, zu verdanken. Hier hätte die Anforderung aus dem Modellieren eines Schildes, und dem Ausschneiden von Bereichen mit dem Boolean-Modifier bestanden.  
    Ich ging durch die Modellierung komplexerer Details, sowie frei gestaltete Verzierungen durch Bézierkurven darüber hinaus. Auch hier verwendete ich Kombinationen aus Noise-Texturen, um detaillierte Shader zu erreichen. Die Animation ermöglichte mir die Mantaflow-Fluidsimulation. Hier benutze ich ebenso für das Wasser, als auch für die Schaum, Sprüh, Blasen und Fluid-Partikel einzelne Shader, die ich durch Node-Setups erreichte. Für das Wasser bestimmte ich die Mischung von einem "Diffuse"- und "Glossy"-Shader mit dem "Fresnel"-Linseneffekt, mischte dies mit einem "Glass"-Shader, und dies wiederrum mit mit einem "Transparent"-Shader. Für die anderen Partikel wurden die Mischungsverhältnisse der Shader verändert, oder mit dem zuvor genannten "Blasen-Node-Setup" kombiniert. -->
  </div>
  <div class = "flex-item excess">
    <h2 id="uboot">Das verrückte U-Boot</h2>
    <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <video width="100%" poster ="submarineThumbnail.jpg" controls loop>
          <source src="submarine.mp4" alt="submarine" type="video/mp4">
          Ihr Browser unterstützt den Video-Tag nicht.
      </video>
      <div class = "primary-info-container">
        <div class="team-size-container">
          <i class="material-icons">person</i>1
        </div>
        <div class = "context-awards">
          <i class='fa fa-university'></i>
        </div>
        <div class="tags">
          <span class="tag">Object-Mode</span>
          <span class="tag">Keyframes</span>
          <span class="tag">Volumetrics</span>
        </div>
        <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3d</span>
      </div>
    </div>
    <h4>
        Computergrafik<br>
        Solo-Projekt<br>
        Sommer 2020<br>
        Lebhafte Unterwassermaschine
    </h4>
    <br>
    <div class="skills">
        <strong>Blender, Object-Mode-Only, Keyframe-Animation, Volumetrische Shader</strong><br>
        <em>Expressionistisch – Engagiert – Selbstständig</em><br>
        <!-- <strong></strong> -->
    </div>
    <br>
    <ul class="task-list">
        <li><strong>Modellierung aus Grundformen</strong><br>
            <span>Zusammensetzung eines U-Boots aus Skalierung, Rotation und Verschiebung primitiver Körper</span>
            <ul>
                <li>
                    Herausforderungen durch Einschränkungen als kreativen Anreiz genutzt
                </li>
                <li>
                    Anordnung durch Rotationen und proportionale Bearbeitung
                </li>
            </ul>
        </li>
        <li><strong>Unterwasser-Atmosphäre</strong><br>
            <span>Volumetrische Beleuchtung mit Lichtstreuung und Absorption</span>
            <ul>
                <li>
                    Kombination verschiedener Shader für Tiefeneffekte
                </li>
                <li>
                    Mischung aus Noise-Textur und Transparenz für Blasen
                </li>
            </ul>
        </li>
        <li><strong>Animation</strong><br>
            <span>Keyframes und Interpolation</span>
            <ul>
                <li>
                    Sanfte, geschwungene Bewegungen durch Kurvenpfade
                </li>
            </ul>
        </li>
    </ul>
    <!-- Die Anforderungen der Computergrafik-Aufgabe, die mich zu dieser Animation inspirierte, bestand darin, rein durch Skalierung, Rotation und Verschiebung von Objekten, sowie die Anwendung einfacher Materialien ein U-Boot zusammenzustellen. Der Anforderung, nur mit der Komposition primitiver Körper zu arbeiten, widersetzte ich mich nicht sondern nahm sie als Herausforderung an.  
    Die Positionierung der Spirale aus Blasen erreichte ich durch Rotation langer Blasenreihen unter proportionalem Bearbeiten. Ähnlich erschuf ich auch die Greifarme des U-Boots. Die Textur der Blasen gestaltete ich durch die Mischung einer Noise-Textur und Transparenz. Die volumetrische Beleuchtung erreichte ich durch die Addition eines lichtstreuenden, und eines licht-Absorbierenden Shaders mit unterschiedlicher Dichte. Die Bewegungsabläufe erreichte ich durch Keyframes und interpolierten Kurven. Dies war mein erstes Modellierungsprojekt mit einer zeitlich beschränkten Vorgabe. -->
  </div>
  <div class = "flex-item excess">
    <h2 id="truhe">Truhe</h2>
    <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <img src="Truhe.png" alt="Truhe" width="100%"/>
      <div class = "primary-info-container">
        <div class="team-size-container">
          <i class="material-icons">person</i>1
        </div>
        <div class = "context-awards">
          <i class='fas fa-umbrella-beach'></i>
        </div>
        <div class="tags">
          <span class="tag">Hard-Surface</span>
          <span class="tag">Prozedural</span>
        </div>
        <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3d</span>
      </div>
    </div>
    <h4>
      Private Kursaufgabe<br>
      Solo-Projekt<br>
      Frühling 2020<br>
      Spielerische Gestaltung
    </h4>
    <br>
    <div class="skills">
      <strong>Blender, Hard-Surface-Modeling, Prozedurale Texturen</strong><br>
      <em>Dekorativ – Lernfreudig – Selbstständig</em><br>
      <!-- <strong></strong> -->
    </div>
    <br>
    <ul class="task-list">
      <li><strong>Mesh ohne Material als Aufgabe</strong><br>
        <span>Symetrische Truhe mit Deckel und Rahmen</span>
        <ul>
          <li>
            Weit darüber hinausgegangen
          </li>
        </ul>
      </li>
      <li><strong>Eigene Idee von Material, Edelsteinen und Hörnern</strong><br>
        <span>Erzeugen von Details aus der primitiven Geometrie</span>
        <ul>
          <li>
            Durch Loop-Cuts, Extrudes und Insets
          </li>
        </ul>
        <span>Marmor- und Holztextur</span>
        <ul>
          <li>
            Noise-, Musgrave-, Voronoi-, Color-Burn-Nodes und  Vektorkurven .
          </li>
        </ul>
      </li>
    </ul>
    <!-- Dieses Projekt geht aus einer Computergrafik-Aufgabe hervor, deren Anforderung die Modellierung (Mesh ohne Material) einer symmetrischen Truhe, mitsamt eines Deckels und eines Rahmens war.  
    Ich ging darüber hinaus, in dem ich aus der primitiven Geometrie Details wie Edelsteine durch Loop-Cuts, Extrudes und Insets erzeugte. Die Marmortexturen erzeugte ich prozedural über Noise-Nodes, die Holztextur ebenso über Noise, Musgrave und Voronoi Nodes, sowie Vektorkurven und Color-Burn-Nodes. -->
  </div>

   <div class = "flex-item excess">
      <h2 id="deren-schloss">Schloss der Truhe</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <img src="Schloss.png" alt="Schloss" width="100%"/> 
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
            <i class='fas fa-umbrella-beach'></i>
          </div>
          <div class="tags">
            <span class="tag">Boolean-Modifier</span>
            <span class="tag">Bézierkurven</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3d</span>
        </div>
      </div>
      <h4>
        Private Kursaufgabe<br>
        Solo-Projekt<br>
        Frühling 2020<br>
        Verzierung der Truhe
      </h4>
      <br>
      <div class="skills">
        <strong>Blender, Boolean-Modifier, Bézierkurven, Prozedurale Texturen</strong><br>
        <em>Erweiternd – Kreativ – Selbstständig</em><br>
        <!-- <strong></strong> -->
      </div>
      <br>
      <ul class="task-list">
        <li><strong>Erlernen neuer Modelliertechniken</strong><br>
          <span>Ausstanzen aus einem Würfel mit Boolean-Modifier</span>
          <ul>
            <li>
              Kombinieren von Inset-Techniken für optimierte Geometrie
            </li>
          </ul>
        </li>
        <li><strong>Erweiterte Detailgestaltung</strong><br>
          <span>Verwendung von Bézierkurven zur Modellierung komplexer Formen</span>
          <ul>
            <li>
              Gesteigerte Präzision durch parametrische Kontrolle
            </li>
          </ul>
        </li>
        <li><strong>Prozedurale Texturierung</strong><br>
          <span>Normalenlänge als Basis für realistische Materialstruktur</span>
          <ul>
            <li>
              Bump-Nodes mit Noise-Texturen zur Steuerung von Displacements
            </li>
          </ul>
        </li>
      </ul>
      <!-- Die Anforderung für das Schloss war, aus einem größeren Würfel einen kleineren durch Insets oder dem boolean-Modifier auszustanzen.  
      Um einen höheren Detailgrad zu erreichen, modellierte ich mit Bézierkurven eine etwas aufwendigere Ausstanzform für ein Schloss. Hier generierte ich die prozedurale Textur ebenfalls über die Steuerung der Normalenlänge auf der Oberfläche mittels eines mit Noise-Texturen angesteuerten Bump-Nodes (Displacements) -->
    </div>
    <div class = "flex-item excess">
      <h2 id="wackelpudding-simulation">Wackelpudding-Simulation</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
          <video width="100%" poster ="JellyThumbnail.png" controls loop>
              <source src="Jelly.mp4" alt="Jelly" type="video/mp4"/>
              Ihr Browser unterstützt den Video-Tag nicht.
          </video>
          <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
            <i class='fas fa-umbrella-beach'></i>
          </div>
          <div class="tags">
            <span class="tag">Softbody Physics</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3d</span>
        </div>
      </div>
      <h4>
          Freizeit-Experiment<br>
          Solo-Projekt<br>
          Frühling 2020<br>
          Softbody Simulation
      </h4>
      <br>
      <div class="skills">
          <strong>Blender, Softbody Physics, Animation</strong><br>
          <em>Experimentell – Lernfreudig – Selbstständig</em><br>
          <!-- <strong></strong> -->
      </div>
      <br>
      <ul class="task-list">
          <li><strong>Softbody-Kollisionssystem</strong><br>
              <span>Simulation physikalisch realistischer Verformungen</span>
              <ul>
                  <li>
                      Anpassung von Federkräften und Dämpfung
                  </li>
                  <li>
                      Rendering mit Materialeigenschaften für eine geleeartige Optik
                  </li>
              </ul>
          </li>
      </ul>
      <!-- Hier habe ich weniger gemodelt, sondern eher aus freien Stücken die Möglichkeiten der "Softbody & Collision"-Physiksimulation ausprobiert, und eine kleine Animation gerendert, um ein Verhalten zu simulieren, das Wackelpudding ähnelt. -->
    </div>
    <div class = "flex-item excess">
      <h2 id="korallenriff">Korallenriff</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <video width="100%" poster ="CoralReef.png" controls loop>
            <source src="CoralReef.mp4" alt="CoralReef">
            Ihr Browser unterstützt das Videoformat nicht.
        </video>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
            <i class='fa fa-university'></i>
          </div>
          <div class="tags">
            <span class="tag">Catmull-Clark</span>
            <span class="tag">Displacement</span>
            <span class="tag">Noise</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3d</span>
        </div>
      </div>
      <h4>
          Computergrafik<br>
          Solo-Projekt<br>
          Sommer 2020<br>
          Animierte Nesseltiere
      </h4>
      <br>
      <div class="skills">
          <strong>Blender, Catmull-Clark-Subdivision, Displacement-Nodes, Noise-Texturen</strong><br>
          <em>Ästhetisch – Engagiert – Selbstständig</em><br>
      </div>
      <br>
      <ul class="task-list">
          <li><strong>Organische Modellierung</strong><br>
              <span>Extrusion eines Control-Cages</span>
              <ul>
                  <li>
                      Glättung und Detailsteigerung durch Catmull-Clark-Subdivision
                  </li>
              </ul>
          </li>
          <li><strong>Dynamische Oberflächengestaltung</strong><br>
              <span>Node-basiertes Displacement</span>
              <ul>
                  <li>
                      Anpassung von Farben und Rauigkeitswerten für realistischere Texturen
                  </li>
                  <li>
                      Kombination mit Noise-Nodes für zusätzliche Steuerungsmöglichkeiten
                  </li>
              </ul>
          </li>
      </ul>
      <!-- Dieses Projekt geht aus der aktuellsten Computergrafik-Aufgabe hervor. Das Modeling erfolgte über die Extrusion eines "Control-Cage", auf dem der Catmull-Clark-Algorithmus angewendet wurde Allerdings wurden auch hier keine Materialien gefordert, sondern es sollte der Umgang mit dem Displacement-Modifier verinnerlicht werden.  
      Diesen ersetzte ich durch einen entsprechenden Displacement-Node, durch den ich nicht nur Oberflächenberechnungen der versetzten Stellen verändern kann, um beispielsweise unterschiedliche Farben oder Rauigkeitswerte zu erreichen, sondern auch generell mehr Kombinations- und Steuerungsmöglichkeiten durch weitere Nodes, wie beispielsweise Noise-Nodes, hatte. -->
    </div>
    <div class = "flex-item excess">
      <h2 id="turret">Tower Defense - Turret</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <img src="Turret.jpg" width="100%">
        <!-- <iframe width="100%" height="300em" src="https://www.youtube.com/embed/VAOCARtbn54"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>   -->
        <div class = "primary-info-container">
          <div class="team-size-container">
            <span><i class='fas fa-users'></i>&nbsp;&nbsp;2</span>
          </div>
          <div class = "context-awards">
            <i class='fas fa-umbrella-beach'></i>
          </div>
          <div class="tags">
            <span class="tag">Spielmodell</span>
            <span class="tag">Realismus</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3d</span>
        </div>
      </div>
      <h4>
        Freizeitgestaltung<br>
        Duo-Team<br>
        Herbst 2019<br>
        Asset für Tower-Defense-Game
      </h4>
      <br>
      <div class="skills">
        <strong>Blender, Hard-Surface-Modeling</strong><br>
        <em>Kollaborativ – Autodidaktisch – Individualisiert</em><br>
        <!-- <strong></strong> -->
      </div>
      <br>
      <ul class="task-list">
        <li><strong>Erstes Blender 3D-Modellierungsprojekt</strong><br>
          <span>Entwicklung eines Geschützturms für ein Tower-Defense-Game</span>
          <ul>
            <li>
              Keine vorgefertigten Tutorials für Kernstrukturen genutzt
            </li>
          </ul>
        </li>
        <li><strong>Hard-Surface-Techniken</strong><br>
          <span>Verwendung aller elementaren Edit-Mode-Tools in Blender</span>
          <ul>
            <li>
              Fokus auf detaillierte Geometrie und saubere Topologie
            </li>
          </ul>
        </li>
        <li><strong>Integration ins Spiel</strong><br>
          <span>Einbinden des Modells in das Spiel eines Kollegis</span>
          <ul>
            <li>
              Optimierung für Performance und In-Game-Nutzung
            </li>
          </ul>
        </li>
      </ul>
      <!-- Dies ist mein erstes 3D-Mesh-Modellierungsprojekt, daher wird in diesem Video teilweise unerfahrener Workflow wiedergegeben. Die Idee dazu kam mir, als ich einem Kollegen beim Programmieren eines 3D-Tower-Defense Spiels zuschaute.  
      Abgesehen von dem Kugellager und den Läufen, bediente ich mich keines Tutorials, um die Modelliertechniken herauszufinden, da ich ein möglichst individualisiertes Gatling-Geschütz erschaffen wollte. Ich verwendete hier alle elementaren Tools, die der Edit-Mode von Blender für Hard-Surface-Modeling zu bieten hat.  
      Das Endresultat ist in dem Tower-Defense-Game meines Kollegen integriert -->
    </div>
    <div class = "flex-item excess">
      <h2 id="donut">Donut</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
          <img src="Donut.png" alt="Donut" width="100%">
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
            <i class='fas fa-umbrella-beach'></i>
          </div>
          <div class="tags">
            <span class="tag">Skulpting</span>
            <span class="tag">Texture-Painting</span>
            <span class="tag">Partikel</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3d</span>
        </div>
      </div>
      <h4>
          Private Fortbildung<br>
          Solo-Projekt<br>
          Herbst 2019<br>
          <a href="https://www.youtube.com/watch?v=TPrnSACiTJ4" target = "_blank">Tutorial</a>-Ergebnis
      </h4>
      <br>
      <div class="skills">
          <strong>Blender, Sculpting, Texture Painting, Partikelsystem</strong><br>
          <em>Lernbegeistert – Strukturiert – Detailiert</em><br>
      </div>
      <br>
      <ul class="task-list">
          <li><strong>Prozedurale Texturierung</strong><br>
              <span>Modellierung des Teigs mit Sculpting und proportionalem Editing</span>
              <ul>
                  <li>
                      Oberflächenverfeinerung durch Noise-Texturen und Bump-Overlays
                  </li>
                  <li>
                      Anpassung von Glanz- und Rauigkeitseffekten für realistische Materialien
                  </li>
              </ul>
          </li>
          <li><strong>Individuelle Materialgestaltung</strong><br>
              <span>Ersetzung der Zuckerglasur durch eine individuell entwickelte Schokoladenglasur</span>
              <ul>
                  <li>
                      Mischung von Glossy- und Diffuse-Shadern für realistischen Glanzeffekt
                  </li>
                  <li>
                      Zusätzliche Displacement-Anpassungen mit Noise-Texturen
                  </li>
              </ul>
          </li>
          <li><strong>Streusel mit Partikelsystem</strong><br>
              <span>Platzierung variierender Instanz-Objekte auf der Glasur</span>
              <ul>
                  <li>
                      Zufällige Verteilung für natürliche Anordnung
                  </li>
              </ul>
          </li>
      </ul>
      <!-- Dies ist mein Ergebnis des zweiten Levels der Blender-Tutorialreihe des <a href="https://www.youtube.com/watch?v=TPrnSACiTJ4">Blender Guru</a>s. Das durch proportionales Editing und Scultping erreichte Mesh des Teigs wurde durch Noise-Texturen und Overlay-Variation mit Bump versehen und geshaded, sowie Texture-Painting angewandt, um leicht verbrannte Stellen zu malen.  
      In der Tutorial Reihe wird eine Zuckerglasur verwendet, ich jedoch wünschte mir eine Schokoladenglasur, die ich durch ein Node-Setup, in dem ein Glossy- und Diffuse Shader gemischt werden, erreichte. Auch hier ist etwas Displacement durch eine Noise-Textur meinerseits verwendet worden. Die Streusel wurden mit einem Partikelsystem mittels "Instance-Objects" variierender Häufigkeit auf der Glasur platziert. -->
    </div>
    <div class = "flex-item excess">
      <h2 id="burning-monkey">Brennender Affenkopf</h2>
      <div class="visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
        <video width="100%" poster ="Monkey.png" controls loop>
            <source src="Monkey.mp4" alt="Monkey">
            Ihr Browser unterstützt das Videoformat nicht.
        </video>
        <div class = "primary-info-container">
          <div class="team-size-container">
            <i class="material-icons">person</i>1
          </div>
          <div class = "context-awards">
            <i class="fa-solid fa-head-side-gear"></i>
            <i class='fas fa-umbrella-beach'></i>
          </div>
          <div class="tags">
            <span class="tag">Feuersimulation</span>
            <span class="tag">Mantaflow</span>
          </div>
          <span class ="duration"><i class="fa fa-calendar"></i>&nbsp;&nbsp;3d</span>
        </div> 
      </div>
      <h4>
          Private Fortbildung<br>
          Solo-Projekt<br>
          Herbst 2019<br>
          Erste Simulation mit Blender
      </h4>
      <br>
      <div class="skills">
          <strong>Blender, Mantaflow, Rauch- & Feuersimulation, Shader-Nodes</strong><br>
          <em>Neugierig – Experimentell – Zielstrebig</em><br>
      </div>
      <br>
      <ul class="task-list">
          <li><strong>Erste Simulationserfahrung</strong><br>
              <span>Erprobung der Mantaflow-Engine für Feuer und Rauch</span>
              <ul>
                  <li>
                      Anpassung von Dichte, Temperatur und Vorticity für realistisches Flammenverhalten
                  </li>
              </ul>
          </li>
          <li><strong>Prozedurale Feueranimation</strong><br>
              <span>Steuerung der Flammenbewegung durch eine Wolken-Textur</span>
              <ul>
                  <li>
                      Erzeugung zufälliger, dynamischer Feuerverläufe
                  </li>
                  <li>
                      Kombination mit Shader-Nodes für intensivere Leuchteffekte
                  </li>
              </ul>
          </li>
          <li><strong>Eigenständige Problemlösung</strong><br>
              <span>Weiterentwicklung eines ursprünglichen Tutorials</span>
              <ul>
                  <li>
                      Anpassung an neue Mantaflow-Technologie
                  </li>
                  <li>
                      Eigenständiges Experimentieren für ein verbessertes Endergebnis
                  </li>
              </ul>
          </li>
      </ul>
      <!-- Dies war mein erstes Blender Projekt überhaupt. Auf diesem Stand hatte ich noch nie Topologie verändert, und somit für eine Mantaflow Feuer&Rauch-Simulation den vorgefertigten Affenkopf "Suzanne" verwendet, und eine Animation gerendert. Die Position der einzelnen Flammen wird durch eine Wolken-Textur über das Objekt bewegt, um einen höheren Grad an Zufall zu erreichen.  
      Ein brennender Affenkopf kommt in dem Donut-Tutorial des <a href="https://www.youtube.com/watch?v=TPrnSACiTJ4">Blender Guru</a>s ganz zu Beginn vor, allerdings gab es zu dessen Entstehungszeit Mantaflow noch nicht. Er demonstrierte das Feuer, um Motivation für Blender zu schaffen. Dieser Teil der ersten Folge war mit Mantaflow allerdings nicht nachahmbar, was mich nicht zur Aufgabe, sondern zur eigenständigen Nachforschung und zum Ausprobieren ermutigte, bis ich einen brennenden Affenkopf erhielt. -->
    </div>
</div>

<div class="section-header">
<i class="fa-solid fa-film"></i>
<h1 id="video">Video</h1>
</div>

<div class = "flex-container" id = "video-flex-container">
  <div class = "flex-item excess">
    <h2 id="cardioids-tutorial">Cardioids - Tutorial</h2>
    <div  class = "visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <iframe width="100%" height="400lvh" src="https://www.youtube.com/embed/A68-juE2ves"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"                allowfullscreen>
      </iframe>
      <div class = "primary-info-container">
        <div class="team-size-container">
          <i class="material-icons">person</i>1
        </div>
        <div class = "context-awards">
         <i class ="fa-solid fa-person-chalkboard"></i>
        </div>
        <div class = "tags">
          <span class="tag">Overwolf</span>
          <span class="tag">AVS Editor</span>
        </div>
        <span class ="duration"><i class="far fa-clock"></i>&nbsp;&nbsp;3h</span>
      </div>
    </div>
    <h4>
      Schulvortrag<br>
      Solo-Projekt<br>
      Frühling 2019<br>
      <a href="#cardioids">Herzkurve</a>-Erklärvideo
    </h4>
    <br>
    <div class="skills">
      <strong>Overwolf, AVS Editor</strong><br>
      <em>Präsentativ – Didaktisch – Selbstständig</em><br>
      <!-- <strong>Git</strong> -->
    </div>
    <br>
    <ul class="task-list">
      <li><strong>Vertontes Erklärvideo für Mathematikunterricht</strong><br>
        <span>Entstanden unter Auswahl eigener Themen</span>
          <ul>
            <li>
              Präsentative Aufbereitung
            </li>
          </ul>
      </li>
      <li><strong>Komplexes mathematisches Thema</strong><br>
        <span>Erklärung von Grundlagen und Programmcode</span>
        <ul>
          <li>
            Analogien zur alltäglichen Welt
          </li>
          <li>
            Erläuterung des Programms ähnlich Pseudocode
          </li>
        </ul>
      </li>
    </ul>
    <!-- Dies ist das unter [Cardioids](#cardioids) angedeutete Lernvideo, welches im Rahmen einer Projektarbeit unter Auswahl eines eigenen Themas entstand. Hier wird ebenso die Funktionsweise meines dazu verfassten Programms ähnlich zu Pseudocode erklärt. -->
  </div>
 
</div>

<style>

.visual-presentation-container audio {
  height: 115px;
  width: 96.18%;
}

.expanded audio {
    z-index: 12 !important;
    position: relative;
}

.context-awards img {
  width: 34px !important;
  height: auto !important;
}

</style>

<div class="section-header">
<i class="fa-solid fa-music"></i>
<h1 id="musik">Musik</h1>
</div>

<div class = "flex-container" id = "music-flex-container">
  <div class = "flex-item excess">
    <h2 id="fuwashima">Fuwashima - Game Jam</h2>
    <div class = "visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <audio controls>
        <source src="Musik/Fuwashima.mp3" type="audio/mp3">
        Ihr Browser unterstützt den Audio-Tag nicht
      </audio>
      <div class = "primary-info-container">
        <div class="team-size-container">
          <i class="material-icons">person</i>3
        </div>
        <div class = "context-awards">
         <img src = "GGJ_Logo.png">
         <i class="fas fa-umbrella-beach"></i>
        </div>
        <div class = "tags">
          <span class="tag">FL Studio</span>
          <span class="tag">Delay & Echo</span>
          <span class="tag">Arpeggio</span>
        </div>
        <span class ="duration"><i class="far fa-clock"></i>&nbsp;&nbsp;20h</span>
      </div>
    </div>
    <h4>
      Global Game Jam<br>
      Trio-Team<br>
      Frühling 2020<br>
      Nuklearer Supergau
    </h4>
    <br>
    <div class="skills">
      <strong>FL Studio, Delay & Echo, Arpeggio, GGJ</strong><br>
      <em>Schnell – Intensiv – Kooperativ</em><br>
      <!-- <strong>Git</strong> -->
    </div>
    <br>
    <ul class="task-list">
      <li><strong>Titelsong für Atomkraftwerk-Simulator zu dritt</strong><br>
        <span>Unterstützung des Themas durch auditive Stimmung</span>
          <ul>
            <li>
              Aggressiver Klang und spannender Aufbau
            </li>
            <li>
              Tonverzerrungen durch radioaktive Strahlung 
            </li>
            <li>
              Zeitliche Automation von Delay- und Echo-Plugins
            </li>
          </ul>
        <span>Versehen mit origineller Note</span>
          <ul>
            <li>
                Zurückhaltende Drum-Sounds mit "Amen-Break"
            </li>
            <li>
                "Gegenläufiger" Rythmus, vertraut aus eigener Schlagzeugpraxis
            </li>
          </ul>
      </li>
      <li><strong>Mitwirken am Gamedesign</strong><br>
        <span>Verhindern des Supergaus</span>
        <ul>
          <li>
            Lösen von Rätseln unter Stress
          </li>
        </ul>
      </li>
    </ul>
    <!-- Dieses Stück komponierte ich als Titelsong im Rahmen des Global-Game-Jams 2020, bei dem ich in einem Team innerhalb von 48 Stunden bei der Entwicklung eines VR-Games mitwirkte. In erster Linie versuchte ich, das Thema des umgesetzten Atomkraftwerk-Supergau-Simulators, in dem der Spieler unter Stress Rätsel lösen muss, durch einen spannenden Aufbau und aggressivem Klang mit entsprechender Stimmung zu unterstützen. Auch versuchte ich, den Effekt von Tonverzerrungen, verursacht durch enorme radioaktive Strahlung, mit der zeitlichen Automation der Delay-Time eines Echo-Delay-Plugins annähernd zu simulieren. Um Originalität zu schaffen, versah ich zurückhaltende Drum-Sounds mit dem prägnanten "Amen-Break", der mir aus der eigenen Schlagzeugpraxis wohl vertraut ist und einen scheinbar gegenläufigen Rhythmus erzeugt. -->
  </div>
  <div class = "flex-item excess">
    <h2 id="pisong">PiSong</h2>
    <div class = "visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <audio controls>
        <source src="Musik/PiSong.mp3" type="audio/mp3">
        Ihr Browser unterstützt den Audio-Tag nicht
      </audio>
      <div class = "primary-info-container">
        <div class="team-size-container">
          <i class="material-icons">person</i>1
        </div>
        <div class = "context-awards">
         <i class="fas fa-pi"></i>
         <i class="fas fa-umbrella-beach"></i>
        </div>
        <div class = "tags">
          <span class="tag">Dubstep</span>
          <span class="tag">Speech-Synthese</span>
          <span class="tag">Audio-Watermark</span>
        </div>
        <span class ="duration"><i class="far fa-clock"></i>&nbsp;&nbsp;3h</span>
      </div>
    </div>
    <h4>
      Pi-Tag<br>
      Solo-Projekt<br>
      Frühling 2013<br>
      Tribut für die Kreiszahl
    </h4>
    <br>
    <div class="skills">
      <strong>Dubstep, Speech-Synthese, Audio-Watermark</strong><br>
      <em>Experimentell – Mathematisch – Explorativ</em><br>
      <!-- <strong>Git</strong> -->
    </div>
    <br>
    <ul class="task-list">
      <li><strong>Gimmick für internationalen Pi-Day</strong><br>
        <span>Musikalische Verkörperung der Kreiszahl</span>
          <ul>
            <li>
              Dubstep durch Cutoff-Modulation
            </li>
            <li>
              Sprachsynthese durch Roboterstimme für Rap
            </li>
          </ul>
        <span>Implementierung eines auditiven Wasserzeichens</span>
          <ul>
            <li>
                Tonspur als Spektrogramm in DAW zeigt "π"-Symbol
            </li>
          </ul>
      </li>
    </ul>
    <!-- Bei diesem Audio handelt es sich um ein Gimmick, entworfen für den internationalen "Pi-Day", welches ebenso mein erstes außerhalb der Familie im Alter von 11 Jahren präsentierte Audio-Projekt darstellt. Ich überlegte mir die Idee, einige Nachkommastellen der Kreiszahl Pi musikalisch umzusetzen, ohne Töne und Aufbau nach der Konstante zu gestalten. Dies gelang mir durch das Aufsagen der Stellen von Roboterstimmen. Nach einem "Wobble-Bass", umgesetzt durch zeitliche Modulation des "Cutoffs", folgt eine rein akustisch nicht entzifferbare Sequenz, die das Stück beendet. Es handelt sich hierbei um die auditive Wiedergabe einer Grafik des griechischem Symbols für "Pi". Wenn Sie meinen "Pi-Song" in eine DAW, beispielsweise Audacity, importieren, und sich die Tonspur als Spektrogramm anzeigen lassen, wird es sichtbar. -->
  </div>
  <div class = "flex-item excess">
    <h2 id="vocalremixtrap">Vocal-Remix</h2>
    <div class = "visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <audio controls>
        <source src="Musik/VocalRemixTrap.mp3" type="audio/mp3">
        Ihr Browser unterstützt den Audio-Tag nicht
      </audio>
      <div class = "primary-info-container">
        <div class="team-size-container">
          <i class="material-icons">person</i>2
        </div>
        <div class = "context-awards">
         <i class="fas fa-umbrella-beach"></i>
        </div>
        <div class = "tags">
          <span class="tag">Trap</span>
          <span class="tag">Granulizer</span>
          <span class="tag">EQ-ing</span>
          <span class="tag">Kompressor</span>
        </div>
        <span class ="duration"><i class="far fa-clock"></i>&nbsp;&nbsp;5t</span>
      </div>
    </div>
    <h4>
      Gimmick im Freundeskreis<br>
      Duo-Team<br>
      Sommer 2017<br>
      Komische Sprachverzerrung
    </h4>
    <br>
    <div class="skills">
      <strong>Trap, Granulizer, EQ-ing, Kompressor</strong><br>
      <em>Gemeinschaftlich – Lustig – Detailverliebt</em><br>
      <!-- <strong>Git</strong> -->
    </div>
    <br>
    <ul class="task-list">
      <li><strong>Trap aus Meme-Sprachaufnahmen</strong><br>
        <span>Humorvolles Pitching</span>
          <ul>
            <li>
              Tonhöhenverschiebung durch Fruity Granulizer
            </li>
            <li>
              Sprach-Samples als melodisches Instrument
            </li>
          </ul>
        <span>Mixing und Mastering</span>
          <ul>
            <li>
                Beratung von erfahrenem DJ
            </li>
            <li>
                Kompressoren, Normpegel, Audioqualität 
            </li>
          </ul>
      </li>
    </ul>
    <!-- Bei diesem Stück handelt es sich ebenfalls um ein Gimmick, diesmal im Kreis von engen Freunden. Ich versuchte, aus einigen verschiedenen menschlichen Aufnahmen, die bei uns täglich für Lacher sorgten, einen "Remix" zu erstellen, der an der Musikrichtung des Traps anlehnt. Dabei verwendete ich eine Vielzahl von Plugins, wovon sich das wichtigste, welches für die Stimmverzerrungen verantwortlich ist, "Fruity Granulizer" nennt. Dies ist mein erstes Audioprojekt, in dem ich, unterstützt durch meinen als DJ erfahrenen Schwager, auf Audioqualität, Mischungen (EQ-ing), Normpegel achtete, sowie Kompressoren benutzte. -->
  </div>
</div>

<div class="section-header">
<i class="fa-solid fa-palette"></i>
<h1 id="grafik">Grafik</h1>
</div>

<div class = "flex-container" id = "music-flex-container">
  <div class = "flex-item excess">
    <h2 id="donald-trump">Donald Trump - Karikatur</h2>
    <div class = "visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <img src="Zeichnungen/Trump.jpg" alt="Trump" width="100%">
      <div class = "primary-info-container">
        <div class="team-size-container">
          <i class="material-icons">person</i>1
        </div>
        <div class = "context-awards">
         <i class="fas fa-umbrella-beach"></i>
        </div>
        <div class = "tags">
          <span class="tag">Kugelschreiber</span>
        </div>
        <span class ="duration"><i class="far fa-clock"></i>&nbsp;&nbsp;3h</span>
      </div>
    </div>
    <h4>
      Ablenkung bei Klausurvorbereitung<br>
      Solo-Projekt<br>
      Winter 2017<br>
      Karikatur eines Prominentis
    </h4>
    <br>
    <div class="skills">
      <strong>Kugelschreiber</strong><br>
      <em>Satirisch – Herausfordernd – Minimalistisch</em><br>
      <!-- <strong>Git</strong> -->
    </div>
    <br>
    <ul class="task-list">
      <li><strong>Erste gelungene Zeichnung organischer Objekte</strong><br>
        <span>Herausforderung wegen Abneigung gegen Zeichnung von Lebewesen</span>
          <ul>
            <li>
              Freies Abzeichnen aus Fotografie des Präsidentis
            </li>
          </ul>
      </li>
    </ul>
    <!-- Vor dem Erstellen dieses Bildes pflegte ich eine starke Abgneigung gegen das Zeichnen organischer Objekte und Lebewesen. Dies ist darauf zurück zu führen, dass es mir sonst, leider nicht nur meiner Einschätzung nach, in außerordentlichem Maße misslang. Eines Tages, im Alter von 16 Jahren, als ich mich vom Lernen für eine Klausur ablenkte, verspürte ich die Lust, genau dies zu ändern. Es stellte für mich eine gewisse Art der Herausforderung an mich selbst dar, besonders in Anbetracht des Versäumnisses der Lernzeit.  
    Ein Bild dieses Präsidenten auf meinem Bildschirm vorgelegt, versuchte ich die Konturen frei auf das Papier zu übertragen. Das Ergebnis überraschte mich sehr. -->
  </div>
  <div class = "flex-item excess">
    <h2 id="schlafend-im-bus">Schlafend im Bus</h2>
    <div class = "visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <img src="Zeichnungen/Sleep.jpg" alt="Sleep" width="100%"/>
      <div class = "primary-info-container">
        <div class="team-size-container">
          <i class="material-icons">person</i>1
        </div>
        <div class = "context-awards">
         <i class="fas fa-umbrella-beach"></i>
        </div>
        <div class = "tags">
          <span class="tag">Kugelschreiber</span>
        </div>
        <span class ="duration"><i class="far fa-clock"></i>&nbsp;&nbsp;2h</span>
      </div>
    </div>
    <h4>
      Beschäftigung im Bus<br>
      Solo-Projekt<br>
      Winter 2017<br>
      Schoßzeichnung
    </h4>
    <br>
    <div class="skills">
      <strong>Kugelschreiber</strong><br>
      <em>Realistisch – Herausfordernd – Provokant</em><br>
      <!-- <strong>Git</strong> -->
    </div>
    <br>
    <ul class="task-list">
      <li><strong>Zweite Zeichnung nach Entdeckung des Talents</strong><br>
        <span>Klassenkameradi wollte nicht fotografiert werden</span>
          <ul>
            <li>
              Als Provokation zeichnete ich ihn
            </li>
          </ul>
      </li>
      <li><strong>Reiz durch Herausforderung</strong><br>
        <span>Bedingungen erschwerten die Vollbringung des Werks</span>
          <ul>
            <li>
              Unruhige Fahrt
            </li>
            <li>
              Temporärer Ruhezustand
            </li>
            <li>
              Zeichnen auf Oberschenkeln
            </li>
          </ul>
      </li>
    </ul>
    <!-- Mit dem Wissen, auch hier etwas Talent zeigen zu können, zeichnete ich wenige Wochen später einen Klassenkameraden, der im Reisebus zur Klassenfahrt in den Schlaf fiel. Hier reizte mich noch mehr die Herausforderung, in Anbetracht der unruhigen Fahrt, des temporären Ruhezustands des Kollegen, des Zeichnens auf den Oberschenkeln, sowie seinen Abneigung, photografiert zu werden. -->
  </div>
  <div class = "flex-item excess">
    <h2 id="schlafend-im-bus">Tribal</h2>
    <div class = "visual-presentation-container" style="position: relative; display: inline-block; cursor: pointer;">
      <img src="Zeichnungen/Tribal.jpg" alt="Tribal" width="100%">
      <div class = "primary-info-container">
        <div class="team-size-container">
          <i class="material-icons">person</i>1
        </div>
        <div class = "context-awards">
         <i class="fas fa-umbrella-beach"></i>
        </div>
        <div class = "tags">
          <span class="tag">Fine-Liner</span>
        </div>
        <span class ="duration"><i class="far fa-clock"></i>&nbsp;&nbsp;2h</span>
      </div>
    </div>
    <h4>
      Kreative Zeichentechnik<br>
      Solo-Projekt<br>
      Winter 2017<br>
      Tribal-Tattoo
    </h4>
    <br>
    <div class="skills">
      <strong>Fine-Liner</strong><br>
      <em>Kreativ – Herausfordernd – Expressionistisch</em><br>
      <!-- <strong>Git</strong> -->
    </div>
    <br>
    <ul class="task-list">
      <li><strong>Eigene kreative Zeichentechnik mit Fine-Liner</strong><br>
        <span>Spitze durfte nie das Papier berühren</span>
          <ul>
            <li>
              Schwebender Tintenkanal durch Oberflächenspannung
            </li>
          </ul>
      </li>
    </ul>
    <!-- Mit dieser, sich von Kugelschreiberzeichnungen stark unterscheidenden Art des Zeichnens experimentiert ich schon früher, im Alter von etwa 13 Jahren, was allerdings auch auf eine Art der Herausforderung meiner Selbstdisziplin zurückzuführen ist, da ich meine Werkzeuge hierbei stark einschränkte.  
    Anstatt einen Pinsel oder Kaligrafiestift zu verwenden, benutzte ich konsequent eine Art eines Fine-Liners, dessen Spitze ich nie das Papier berühren lies, und somit über einen durch die Oberflächenspannung entstehenden winzigen Tintenkanal äußerst vorsichtig über dem Blatt schweben lassen musste, da direkter Kontakt sofort zu unansehnlichen Färbungen führte.  
    Die Motive lehnten ausschließlich an Tribal-Tattoos an. -->
  </div>
</div>

<style>

.copyright, .copyright + p {
  /*display: none !important;*/
}

.documents-wrapper {
  display: flex;
  justify-content: center; /* Zentriert den gesamten Inhalt horizontal */
  margin-bottom: 55px;
}

.documents-list {
  list-style-type: none;
  padding: 0;
  text-align: left; /* Listenelemente linksbündig ausrichten */
}

.documents-wrapper, .documents-wrapper *{
  color: #F8F9FA !important;
  font-size: large;
}

#dokumente{
  color: #F8F9FA !important;
}

#footer_wrap {
  position: relative;
  z-index: 0;
}

footer .section-header {
    margin-top: 120px;
    margin-bottom: 55px;
}

</style>

<div class="section-header">
<h1 id = "dokumente">Dokumente</h1>
</div>
<div class ="documents-wrapper">
  <ul class = "documents-list">
    <li><a href="Lebenslauf.pdf" target = "_blank">Daten und Lebenslauf</a></li>
    <li><a href="EmpfehlungsschreibenVonProfChristophMueller.pdf" target = "_blank">Empfehlungsschreiben Prof. Christoph Müller</a></li>
    <li><a href="EmpfehlungsschreibenVonProfDrThomasSchneider.pdf" target = "_blank">Empfehlungsschreiben Prof. Dr. Thomas Schneider</a></li>
    <li><a href="BachelorOfScience.pdf" target = "_blank">Bachelorzeugnis</a></li>
    <li><a href="StudiumNotenspiegel.pdf" target = "_blank">Bachelor Notenspiegel</a></li>
    <li><a href="Exmatrikulationsbescheinigung.pdf" target = "_blank">Exmatrikulationsbescheinigung</a></li>
    <li><a href="PraktikumsbestätigungCalvinDellOro.pdf" target = "_blank">Praktikumsbestätigung</a></li>
    <li><a href="CCF18022020_0001.jpg" target = "_blank">Abiturzeugnis</a></li>
    <li><a href="CCF18022020_0003.jpg" target = "_blank">Auszeichnung des Gymnasiums für kulturelles Engagement</a></li>
    <li><a href="CCF18022020_0002.jpg" target = "_blank">Hackathon-Urkunde</a></li>
    <li><a href="https://jirkadelloro.github.io/Neutrum" target = "_blank">Das geschlechtergerechte Neutrum nach Prof. Dell'Oro-Friedl</a></li>
  </ul>
</div>

<script src = "Code/FooterInserter.js"></script>

<br><br><br><br><br>
