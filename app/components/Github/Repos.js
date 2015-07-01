var React = require('react');

var Repos = React.createClass({
        render: function () {
            var repos = this.props.repos.map(function (repo, index) {
                return <li className="list-group-item">
                {repo.html_url && <h4>
                    <a href={repo.html_url}>{repo.name}</a>
                </h4>}
                {repo.description && <p> {repo.description} </p> }
                </li>
            });
            return (
                <div>
                    <h3> Repos </h3>
                    <ul className="list-group">{repos} </ul>
                </div>

            );
        }
    }
);

module.exports = Repos;