import React from 'react';
import { githubUserApi } from '../config';
import Shimmer from './shimmer';

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo: {},
            count:0,
        }
    }

    async componentDidMount(){
        console.log("componentDidMount");

        this.interval = setInterval(() => {
            console.log("hey, from profile class");
        }, 1000);

        const req = await fetch(githubUserApi + this.props.name);
        const data = await req.json();
        this.setState({
            userInfo: data,
        });
    
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log(prevProps, prevState);

        if(prevState.count !== this.state.count) {
            alert("count is updating");
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval(this.interval);
    }

    render() {
        return ( !(this.state.userInfo.name) ? <Shimmer count={1} /> :
            <>
                <img src={this.state.userInfo.avatar_url} alt="profile image" width="300px"/>
                <h2>{this.state.userInfo.name}</h2>
                <h3>{this.state.userInfo.bio}</h3>

                <h2>{this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>+</button>
            </>
        )
    }
}

export default Profile;