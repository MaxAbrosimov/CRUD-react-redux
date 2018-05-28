import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return <footer>
            <div>
                <nav className="pull-left">
                    <ul>
                        <li>
                            <Link to="/app">
                                Home
                            </Link>

                        </li>

                    </ul>
                </nav>
                <p className="copyright pull-right">
                    Example React + spring boot + cassandra
                </p>
            </div>
        </footer>
    }
}
