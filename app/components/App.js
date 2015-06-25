var React = require('react')
var showdown = require('showdown')
var converter = new showdown.Converter()
var Result = require('./result')


module.exports = React.createClass({
    getInitialState: function() {
        return {count: converter.makeHtml('')}
    },
    marked: function (e) {
        e.stopPropagation()
        var el = e.target,
            resultHtml = converter.makeHtml(el.value)

        this.setState({resultHtml: resultHtml})
    },
    render: function () {
        return (
            <div>
                <textarea onChange={this.marked} />
                <Result htmlString={this.state.resultHtml} />
            </div>
        )
    }
})