var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var Router = require('react-router');

var Profile = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        return {
            notes: [],
            bio: {},
            repos: []
        }
    },
    render: function () {
        var userName = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={userName} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={userName} repos = {this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes username={userName} notes={this.state.notes}/>
                </div>
            </div>
        )
    }
});

module.exports = Profile;