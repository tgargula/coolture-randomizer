const sites = {
    theaters: [
        'https://stary.pl/pl/repertuar_kalendarz/kalendarz/',
        'https://ludowy.pl/pl/repertuar',
        'https://teatrwkrakowie.pl/repertuar',
        'https://scenastu.pl/spektakle/',
        'https://www.teatrvariete.pl/repertuar/sprawdz-repertuar',
        'https://bagatela.pl/repertuar-teatru/repertuar-bagateli/',
    ],
    cinemas: [
        'https://www.kinopodbaranami.pl/repertuar.php',
        'https://kinomikro.pl/repertoire/?view=all',
        'https://bilety.kinokika.pl/',
        'https://www.kinoagrafka.pl/',
        'https://kinosfinks.okn.edu.pl/wydarzenia-harmonogram.html',
    ],
    music: [
        'https://filharmoniakrakow.pl/public/',
        'https://opera.krakow.pl/',
        'https://piwnicapodbaranami.pl/nowo%C5%9Bci',
    ],
};

function getRandom(key) {
    console.log(key, sites[key]);
    return sites[key][Math.floor(Math.random() * sites[key].length)];
}

window.addEventListener('load', () => {
    document.getElementById('cinema-tile').addEventListener('click', () => {
        window.open(getRandom('cinemas'), '_blank');
    })

    document.getElementById('theater-tile').addEventListener('click', () => {
        window.open(getRandom('theaters'), '_blank');
    })

    document.getElementById('music-tile').addEventListener('click', () => {
        window.open(getRandom('music'), '_blank');
    })
})

