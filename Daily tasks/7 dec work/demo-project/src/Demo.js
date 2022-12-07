import React from 'react'
import { Tab } from 'semantic-ui-react'
import Form from './Form'
import Product from './Product'
function Demo() {
    const panes = [
        {
            menuItem: 'Home',
            render: () => <Tab.Pane attached={false}><Product/></Tab.Pane>,
        },
        {
            menuItem: 'Login',
            render: () => <Tab.Pane attached={false}><Form/></Tab.Pane>,
        },
        {
            menuItem: 'Services',
            render: () => <Tab.Pane attached={false}>Welcome</Tab.Pane>,
        },
        {
            menuItem: 'Contact-Us',
            render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>,
        },
    ]
    return (
        <div>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
    )
}

export default Demo

