/**
 * Created by André Fatia on 13-07-2015.
 */
import React from 'react';

const Profile = React.createClass({

    getInitialState () {
        return {
            title: '',
            body: ''
        };
    },

    componentDidMount () {
        //$.get('http://jsonplaceholder.typicode.com/posts/1', (result) => {
        //    if (this.isMounted()) {
        //        this.setState({
        //            title: data.title,
        //            body: data.body
        //        });
        //    }
        //})
    },

    render () {
        return (
            <div className="mdl-card mdl-shadow--4dp">
                <div className="mdl-card__media">
                    <h3>{this.state.title}</h3>
                </div>
                <div className="mdl-card__supporting-text">
                    Auckland Sky Tower, taken March 24th, 2014
                </div>
                <div className="mdl-card__supporting-text">
                    {this.state.body}
                </div>
            </div>
        );
    }
});

export default Profile;