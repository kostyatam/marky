var React = require('react'),
    Img = require('./imgs')

module.exports = React.createClass({
    getInitialState: function() {
        return {resultHtml: {}}
    },
    render: function () {
        return (
            <div ref="field"></div>
        )
    },
    componentWillReceiveProps: function (nextProps) {
        var wrapper =  document.createElement('section'),
            imgs

        wrapper.innerHTML = nextProps.htmlString
        imgs = wrapper.getElementsByTagName('img')

        for (var i = 0;i<imgs.length;i+=1) {
            var node = document.createElement("div"),
                src = imgs[i].src;
            imgs[i].parentNode.replaceChild(node, imgs[i]);
            React.render(<Img src={src} />, node);
        }
        React.findDOMNode(this.refs.field).innerHTML = wrapper.innerHTML
    }
})

