const route = {
    root: ['https://sd-conference.github.io', false],
    forum: ['https://forum.sdok.ga', false],
    ebl: ['https://ebl.sdok.ga', true],
    books: ['https://books.sdok.ga', false],
    fcs: ['https://fcs.sdok.ga', false],
    fix: ['', false]
}

function call (target) {
    if (route[target][1]) {
        window.location.href = route[target][0]
    }
}