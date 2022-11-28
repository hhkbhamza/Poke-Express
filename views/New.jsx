const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div>
            <h1>New Pokemon Page</h1>
            <nav>
                <a href='/pokemon'>Home Page</a>
            </nav>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/pokemon" method="POST">
            Name: <input type="text" name="name" /><br />
            Image: <input type = "text" name = "img"/><br/>
            <br />
            <input type="submit" value="Create Pokemon" />
        </form>
      </div>
        )
    }
}

module.exports = New