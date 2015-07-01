var React = require('react');
var NotesList = require('./NotesList');

var Notes = React.createClass({
        render: function () {
            var notes = this.props.notes;
            return (
                <div>
                    <h3> Notes </h3>
                    <NotesList notes={notes}/>
                </div>
            );
        }
    }
);

module.exports = Notes;