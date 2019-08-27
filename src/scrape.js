let request = require("request");
let cheerio = require("cheerio");

request("https://www.ranker.com/crowdranked-list/the-best-board-games-of-all-time", function(err, response, html) {
    if (!err && response.statusCode == 200) {
        let $ = cheerio.load(html);
        $(".listItem").each(function(i, elem) {
            let a = $(this).prev();
            let title = a.children(".listItem__wiki");
            // console.log(a.text());
            console.log(title.text())
        });
    }
});