const React = require('react')

function home(){
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href='/places'>
                    <button className="btn-primary"> Caffeine</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home