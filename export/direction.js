const route = {
    root: ['https://sd-conference.github.io', false],
    forum: ['https://sd-conference.github.io/forum-publish/index.html', true],
    ebl: ['https://ebl.sdok.ga', true],
    books: ['https://books.sdok.ga', false],
    fcs: ['https://sd-conference.github.io/fcs-publish/index.html', false],
    fix: ['', false]
}

function call (target) {
    if (route[target][1]) {
        window.location.href = route[target][0]
    }
}