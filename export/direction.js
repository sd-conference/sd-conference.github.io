const route = {
    root: ['https://sd-conference.github.io', false],
    forum: ['https://sd-conference.github.io/forum-publish/index.html', true],
    ebl: ['https://ebl.ho9.me', true],
    books: ['https://books.sdok.ga', true],
    fcs: ['https://sd-conference.github.io/fcs-publish/index.html', true],
    fix: ['https://sd-conference.github.io/fix.html', true]
}

function call (target) {
    if (route[target][1]) {
        window.location.href = route[target][0]
    }
}
