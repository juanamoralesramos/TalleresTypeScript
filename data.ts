import {Serie} from './serie.js';

export let serieById = new Map<number, Serie>();

export const series = [
  new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
  "https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg") ,
  
  new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
  "https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg"),
  
  new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
    "https://i.imgur.com/TDCEV1S.jpg"),

  new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
      "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
  
  new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
      "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),

  new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
      "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
];
 
series.forEach(serie =>{
  serieById.set(serie.id, serie)
  });
   

let serieTable: HTMLElement = document.getElementById("series")!;
mostrarDatosSerie(series);

const temporadasArray: number[] = [] = [];
for (const serie of series) {
    temporadasArray.push(serie.seasons);
}

function mostrarDatosSerie(series: Serie[]):void{
  let tbodySerie: HTMLElement = document.createElement("tbody");

  for (const serie of series) 
  {
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>`;
    tbodySerie.appendChild(trElement);
  }
  serieTable.appendChild(tbodySerie);
}

let promedio: HTMLElement = document.getElementById("promedioTemporadas")!;
promedio.innerHTML=`Seasons Average: ${calcularPromedioTemporadas(temporadasArray).toPrecision(2)} `;
function calcularPromedioTemporadas(series: number[]): number {
  const sumaTemporadas = series.reduce((total, temporada) => total + temporada, 0);
  const promedioTemporadas = sumaTemporadas / series.length;
  return promedioTemporadas;
}

serieTable.click();

document.addEventListener("DOMContentLoaded", function() {
  function paginaInteractiva() {
    let tablaSeries: HTMLTableElement = <HTMLTableElement>(document.getElementById("serieTable")!);
    let rows = tablaSeries.getElementsByTagName("tr");

    for (let i = 0; i < tablaSeries.rows.length; i++) {
      rows[i].addEventListener("click", function () {
        let clickedRow = this.rowIndex;
        let serie = serieById.get(clickedRow);
        detalleTarjeta(serie);
      });
    }
  }

paginaInteractiva();

function detalleTarjeta(serie: any) {
  let tarjeta = document.getElementById("detalleTarjeta")!;
  tarjeta.innerHTML = 
  `<img 
        src="${serie.image}" 
        
    > 
  <div class="card-body">
    <p class="card-text" style="text-align: center;">
        <h3>
            ${serie.name}
        </h3>
    </p>
    <p class="card-text" style="text-align: justify;">
        ${serie.description}
    </p>
    <a href=${serie.link}>
    ${serie.link}
    </a>`;
  }
});
