var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    getInitialState: function () {
        return {
            notes: [],
            bio: {},
            repos: []
        }
    },
    init: function () {
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(childRef, 'notes');
        helpers.getGithubInfo(this.getParams().username).then(function (data) {
            this.setState({
                bio: data.bio,
                repos: data.repos
            })
        }.bind(this));
    },
    componentDidMount: function () {
        this.ref = new Firebase('https://flickering-heat-7776.firebaseio.com');
        this.init();
    },
    componentWillUnmount: function () {
        this.unbind('notes');
    },
    componentWillReceiveProps: function () {
        this.unbind('notes');
        this.init();
    },
    handleAddNote: function (newNote) {
        this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]))
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
                    <Notes username={userName} notes={this.state.notes} addNote={this.handleAddNote}/>
                </div>
            </div>
        )
    }
});

module.exports = Profile;