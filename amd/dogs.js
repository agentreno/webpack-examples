define('dogs', ['./cats.js'], function (cats) {
    console.log(cats)
    dogs = cats
    return dogs
})
