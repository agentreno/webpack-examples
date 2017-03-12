// Only load cats later when it's required
setTimeout(function () {
    import('./cats').then(function(cats) {
        console.log(cats)
    })
}, 3000)
