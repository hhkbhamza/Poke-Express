const React = require("react");

const myStyle = {
    color: "#FFFFFF",
    backgroundColor: "green",
    textAlign: "center"
};

class Index extends React.Component {
    render() {
        const {pokemon} = this.props
        return (
            <div>
                <h1 style = {myStyle}>All Pokemon</h1>
                <nav>
                    <a href='/pokemon/new'>Create New Pokemon</a>
                </nav>
                <ul>
                    {pokemon.map((poke,i)=> {
                        return (
                            <li>
                                The {' '}
                                <a href = {`/pokemon/${poke._id}`}>
                                    {poke.name.charAt(0).toUpperCase()+poke.name.substring(1)}
                                </a> 
                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}

module.exports = Index