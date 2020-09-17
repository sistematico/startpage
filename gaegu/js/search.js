let search = 'google';
let input = document.getElementById('search');

function chgAction() {
    if (search === 'ddg') {
        search = 'google';
        document.searchform.action = "https://www.google.com/search";
        input.placeholder = 'Pesquise no Google';
    } else if (search === "google") {
        search = 'github';
        document.searchform.action = "https://github.com/";
        input.placeholder = 'Pesquise no Github';
    } else if (search === 'github') {
        search = 'gitlab';
        document.searchform.action = "https://gitlab.com/";
        input.placeholder = 'Pesquise no Gitlab';
    } else if (search === 'gitlab') {
        search = 'arch';
        document.searchform.action = 'https://wiki.archlinux.org/index.php/';
        input.placeholder = 'Pesquise na ArchWiki';
    } else if (search === 'arch') {
        search = 'wikipedia';
        document.searchform.action = 'https://en.wikipedia.org/w/index.php';
        input.placeholder = 'Pesquise na Wikipedia';
    } else if (search === 'wikipedia') {
        search = 'reddit';
        document.searchform.action = 'https://reddit.com/search/';
        input.placeholder = 'Pesquise no Reddit';
    } else {
        search = 'ddg';
        document.searchform.action = 'https://duckduckgo.com/';
        input.placeholder = 'Pesquise no DuckDuckGo';
    }

    if (search === 'wikipedia' || search === 'arch') {
        input.setAttribute('name', 'search');
    } else {
        input.setAttribute('name', 'q');
    }
}

window.onload = function() {
    input.addEventListener('keydown', function (e) {
        if (e.which == 9) {
            e.preventDefault();
            chgAction();
        }
    });
};