var React = require('react')
module.exports = React.createClass({

    getInitialState: function(){
        return ({
            src: this.props.src || ''
        })
    },
    add: function () {
        this.setState({src: 'https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7VG9DQVluOFJ4Tnc/materialdesign_principles_metaphor.png'})
    },
    ok: function () {
        if (!this.state.src) {return}
        React.unmountComponentAtNode(this.getDOMNode().parentNode);
    },
    render: function() {
        return (
            <div className="image-holder">
                <img src={this.state.src} className="image"/>
                <div className="add" onClick={this.add}>Add image</div>
                <div className="ok"  onClick={this.ok}>Ok</div>
            </div>
        )
    },
    componentWillUnmount: function () {
        var component = this.getDOMNode(),
            container = component.parentNode,
            img = document.createElement('img')

        img.src = this.state.src

        container.parentNode.replaceChild(img, container)
    }

});

