import { Component } from "react";

class UserCardData extends Component {
    constructor(props) {
        super(props);
    }
    
    state = { 
        user:""
     }
componentDidMount(){
    let current_user = this.props.match.params.username
    console.log(current_user);
    this.setState({
        user: current_user
    })
}

    render() { 
        return ( 
            <div className="ui raised very padded text container segment">
                <div className="content">
                    <h1 className="header">{this.state.user}</h1>
                    <div className="meta">
                    <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="extra content">
                    <a><i className="user icon"></i>22 Friends</a>
                </div>
                </div>
         );
    }
}
 
export default UserCardData;