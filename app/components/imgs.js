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

        body.replaceChild(img, container)
    }

});
var body = document.getElementsByTagName('body')[0]
var imgs = document.getElementsByTagName('img')
var node
console.log('bar')
for (var i = 0;i<imgs.length;i+=1) {
    node = document.createElement("div")
    body.replaceChild(node, imgs[i])
    React.render(<Example src={imgs[i]} />, node);
}

