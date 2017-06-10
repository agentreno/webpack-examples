import drawComponent from './component/component.js'
import styles from './styles.scss'

var d3 = require('d3-selection')

var mydiv = d3.select('body').append('div')
    .classed(styles.root, true)

mydiv.append('p')
    .text('hello world')

drawComponent()
