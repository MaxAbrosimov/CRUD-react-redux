import React from 'react'

import Drawer from 'components/Drawer'
import Footer from 'components/Footer'


export class PageWithLeftBarLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Drawer/>
            <div className="main-panel">
                <div>
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

