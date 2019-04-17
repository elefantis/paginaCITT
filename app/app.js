const pages = {
    "home": {
        template: "../app/templates/subjects.html",
    },
    "feed": {
        template: "../app/templates/feed.html",
    },
    "team": {
        template: "../app/templates/team.html",
    },
    "about": {
        template: "../app/templates/about.html",
    }
};

Llama.init( pages );
Llama.setDefault( "home" );