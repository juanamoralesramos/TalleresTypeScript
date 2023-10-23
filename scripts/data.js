import { Serie } from './serie.js';
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5),
    new Serie(2, "Orange Is the New Black", "Netflix", 6),
    new Serie(3, "Game of Thrones", "HBO", 7),
    new Serie(4, "The Big Bang Theory", "CBS", 12),
    new Serie(5, "Sherlock", "BBC", 4),
    new Serie(6, "A Very English Scandal", "BBC", 2),
];
var serieTable = document.getElementById("series");
var promedioTemporadasTable = document.getElementById("estadísticas");
mostrarDatosSerie(series);
function mostrarDatosSerie(series) {
    var tbodySerie = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>");
        tbodySerie.appendChild(trElement);
    }
    serieTable.appendChild(tbodySerie);
}
