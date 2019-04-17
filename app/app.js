const pages = {
    "home": {
        templates: "../app/templates/subjects.html",
    },
    "feed": {
        templates: "../app/templates/feed.html",
    },
    "team": {
        templates: "../app/templates/team.html",
    },
    "about": {
        templates: "../app/templates/about.html",
    }
}

Llama.init( pages );
Llama.setDefault( "home" );