import styles from './component.scss'

var d3 = require('d3-selection')

export default function () {
    d3.select('body').append('div')
        .classed(styles.root, true)
        .append('p')
            .text('hello again')
}
