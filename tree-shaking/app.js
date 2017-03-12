// Tree shaking works at the module level automatically
// But you need to require only the modules you need, so only the d3 submodule
// d3-selection is required here
var d3 = require('d3-selection')
d3.select('body').append('p').text('hello world')
