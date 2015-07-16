var React = require('react'),
    Img = require('./imgs')

module.exports = React.createClass({
    getInitialState: function() {
        return {resultHtml: {}}
    },
    render: function () {
        return (
            <div ref="field" dangerouslySetInnerHTML={{__html : this.props.htmlString}}></div>
        )
    },
    componentDidUpdate: function () {
        var wrapper =  React.findDOMNode(this.refs.field),
            imgs, node, src;
        imgs = wrapper.getElementsByTagName('img')

        for (var i = 0;i<imgs.length;i+=1) {
            node = document.createElement("div");
            src = imgs[i].src;
            imgs[i].parentNode.replaceChild(node, imgs[i]);
            React.render(<Img src={src} />, node);
        }
    }
})

