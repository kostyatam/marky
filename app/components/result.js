var React = require('react')
var showdown = require('showdown')
var converter = new showdown.Converter()


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
                <textarea onKeyUp={this.marked} />
                <div dangerouslySetInnerHTML={{__html: this.state.resultHtml}}></div>
            </div>
        )
    }
})

