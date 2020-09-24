<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>StartPage - Gaegu</title>
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/theme.css" />
</head>
<body>
    <div class="container">
        <div class="inner">
            <nav>
                <div class="esquerda">
                    <span id="weather">clima</span>
                </div>
                <div class="centro">
                    <span id="hora">hora</span>
                </div>
                <div class="direita">
                    <img id="icon" src="img/moon.svg">
                </div>
            </nav>

            <main>
                <img id="logo" src="img/mountain.png" />
                <form id="searchform" method="get" action="edit.php" method="post">
                    <input id="search" type="text" name="link1" placeholder="Link1" />
                    <input id="search" type="text" name="link1" placeholder="Link2" />
                    <input id="search" type="text" name="link1" placeholder="Link3" />
                </form>
            </main>

            <footer>
                <div class="cat">
                    <ul class="devel">
                        <li><h4>devel</h4></li>
                        <li><a class="effect" href="https://localhost">localhost</a></li>
                        <li><a class="effect" href="https://stackoverflow.com/">stackoverflow</a></li>
                    </ul>
                </div>
                <div class="cat">
                    <ul>
                        <li><h4>info</h4></li>
                        <li><a class="effect" href="https://developer.mozilla.org/en-US/">mdn</a></li>
                        <li><a class="effect" href="https://www.taniarascia.com/how-to-use-json-data-with-php-or-javascript/">json</a></li>
                    </ul>
                </div>
                <div class="cat">
                    <ul>
                        <li><h4>video</h4></li>
                        <li><a class="effect" href="https://youtube.com">youtube</a></li>
                        <li><a class="effect" href="https://dailymotion.com">dailymotion</a></li>
                    </ul>
                </div>
                <div class="cat">
                    <ul>
                        <li><h4>social</h4></li>
                        <li><a class="effect" href="https://facebook.com">facebook</a></li>
                        <li><a class="effect" href="https://reddit.com">reddit</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    </div>
    <script src="js/links.js"></script>
    <script src="js/theme.js"></script>
    <script src="js/weather.js"></script>
    <script src="js/search.js"></script>
    <script src="js/time.js"></script>
</body>
</html>