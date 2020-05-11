import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import classnames from 'classnames'
import {
    Box,
    Grid,
    Breadcrumbs,
} from '@material-ui/core'
import {
    NavigateNext as NavigateNextIcon,
} from '@material-ui/icons'
import httpService from '../api_client/interceptors';
import useStyles from './styles'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Widget from '../Widget'
import { Typography, Button } from '../../components/Wrappers'
import Dashboard from '../../pages/dashboard'
import TestTwo from '../../pages/testTwo'
import TestThree from '../../pages/testThree'
import TestFour from '../../pages/testFour'
import Forms from '../../pages/forms/elements'
import { useLayoutState } from '../../context/LayoutContext'
import structure from '../Sidebar/SidebarStructure'

function Layout(props) {
    const classes = useStyles()

    httpService.useSetupInterceptors(props.history);

    // global
    var layoutState = useLayoutState()

    return (
        <div className={classes.root}>
            <Header history={props.history} />
            <Sidebar structure={structure} />
            <div
                className={classnames(classes.content, {
                    [classes.contentShift]: layoutState.isSidebarOpened,
                })}
            >
                <div className={classes.fakeToolbar} />
                <Widget
                    disableWidgetMenu
                    inheritHeight
                    className={classes.margin}
                    bodyClass={classes.navPadding}
                >
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        wrap={'nowrap'}
                        style={{ overflowX: 'auto' }}
                    >
                        {structure.map(c => {
                            if (
                                !c.children &&
                                window.location.hash.includes(c.link) &&
                                c.link
                            ) {
                                return (
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        key={c.id}
                                    >
                                        <Breadcrumbs aria-label="breadcrumb">
                                            <Typography variant="h4">
                                                {c.label}
                                            </Typography>
                                        </Breadcrumbs>

                                    </Box>
                                )
                            } else if (c.children) {
                                return c.children.map(currentInner => {
                                    if (
                                        window.location.hash.includes(
                                            currentInner.link
                                        )
                                    ) {
                                        return (
                                            <Breadcrumbs
                                                separator={
                                                    <NavigateNextIcon fontSize="small" />
                                                }
                                                aria-label="breadcrumb"
                                                key={c.id}
                                            >
                                                <Typography variant={'h6'}>
                                                    {c.label}
                                                </Typography>
                                                <Typography
                                                    variant={'h6'}
                                                    color="primary"
                                                >
                                                    {currentInner.label}
                                                </Typography>
                                            </Breadcrumbs>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                            } else {
                                return null
                            }
                        })}
                        {window.location.hash.includes('/app/dashboard') && (
                            <Box display="flex" alignItems="center">

                                <Typography className={classes.date}>

                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                >
                                    Test API
                                </Button>
                            </Box>
                        )}
                    </Grid>
                </Widget>
                <Switch>
                    <Route path="/app/dashboard" component={Dashboard} />
                    <Route path="/app/forms" component={Forms} />
                    <Route path="/app/testtwo" component={TestTwo} />
                    <Route path="/app/testthree" component={TestThree} />
                    <Route path="/app/testfour" component={TestFour} />
                </Switch>

            </div>
        </div>
    )
}

export default withRouter(Layout)
