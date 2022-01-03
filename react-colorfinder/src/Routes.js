import { useState } from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

import ColorList from './ColorList'
import NewColorForm from './NewColorForm'
import Color from './Color'

function Routes() {
    const initialColors = {red:'#FF0000', green:'#00FF00', blue:'#0000FF'}

    const [colors, updateColors] = useState(initialColors)

    function handleAdd(newColor) {
        updateColors(oldColors => ({ ...oldColors, ...newColor }))
    }

    function currentColor(props) {
        const { color } = props.match.params
        const hex = colors[color]
        return <Color {...props} hex={hex} color={color} />
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/colors'>
                    <ColorList colors={colors} />
                </Route>
                <Route exact path='/colors/new'>
                    <NewColorForm addColor={handleAdd} />
                </Route>
                <Route path='/colors/:color' render={currentColor} />
                <Redirect to='/colors' />
            </Switch>
        </BrowserRouter>
    )

}



export default Routes;
