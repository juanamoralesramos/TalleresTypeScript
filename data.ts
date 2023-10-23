import {Serie} from './serie.js';

export const series = [
    new Serie (1,"Breaking Bad","AMC", 5) ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6),
    
    new Serie (3, "Game of Thrones","HBO", 7),

    new Serie (4, "The Big Bang Theory", "CBS", 12),
    
    new Serie (5, "Sherlock", "BBC",  4),

    new Serie (6, "A Very English Scandal", "BBC", 2),
  ];

let serieTable: HTMLElement = document.getElementById("series")!;
let promedioTemporadasTable: HTMLElement = document.getElementById("estadísticas")!;
mostrarDatosSerie(series);

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


