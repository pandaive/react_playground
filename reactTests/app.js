class Channel extends React.Component {
    onClick() {
        console.log("Clicked and it worked", this.props.name);
    }
    render() {
        return (
            <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}

class ChannelList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.channels.map( channel => {
                    return (
                        <Channel name={channel.name} />
                    )
                })}
            </ul>
        )
    }
}

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onChange(e) {
        this.setState({
            channelName: e.target.value
        })
    }
    onSubmit(e) {
        let {channelName} = this.state;
        console.log(channelName);
        this.props.addChannel(channelName);
        this.setState({
            channelName: ''
        });
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type='text' 
                    onChange={this.onChange.bind(this)}
                    value = {this.state.channelName}
                />
            </form>
        )
    }
}

class ChannelSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                {name: 'Panda lovers'},
                {name: 'Java girls'},
                {name: 'Ex-smokers'}
            ]
        }
    }

    addChannel(name) {
        let {channels} = this.state;
        channels.push({
            name: name
        });
        this.setState({
            channels: channels
        });
    }

    render() {
        return (
            <div>
                <ChannelList channels={this.state.channels}/>
                <ChannelForm addChannel={this.addChannel.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(<ChannelSection />, document.getElementById('app'));