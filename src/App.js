import { Row, Spin } from 'antd'
import React, { Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'

const Employee = React.lazy(() => import('./features/Employee'))

function App() {
    return (
        <div className="App">
            <Suspense
                fallback={
                    <Row className={''} justify="center" align="middle">
                        <div>
                            <Spin size="large" tip="Loading..." />
                        </div>
                    </Row>
                }
            >
                <BrowserRouter>
                    <Switch>
                        <Redirect exact from="/" to="/employee" />
                        <Route path="/employee" component={Employee} />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    )
}

export default App
