const pages = {
    "home": {
        template: "../app/templates/subjects.html",
        controller: SubjectsController,
    },
    "feed": {
        template: "../app/templates/feed.html",
        controller: FeedController
    },
    "team": {
        template: "../app/templates/team.html",
        controller: TeamController,
    },
    "about": {
        template: "../app/templates/about.html",
        controller: AboutController,
    }
};

Llama.init( pages );
Llama.setDefault( "home" );