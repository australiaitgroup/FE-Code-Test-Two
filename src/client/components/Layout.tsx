import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

import { toggleSidebar } from '../actions/navigation';
import { applySettings } from '../actions/settings';
import { IState } from '../../types/stateAndAction';
import logo from '../../../public/favicon.png';
import Footer from './Footer';
import {
    ILayoutComponentState,
    ILayoutDispatchProps,
    ILayoutProps,
    ILayoutStateProps,
} from './interfaces/layout.interface';
import * as s from './layout/Layout.css';
import Settings from './layout/Settings';

const mapStateToProps = (state: IState): ILayoutStateProps => ({
    dateRange: state.settings.dateRange,
    from: state.settings.from,
    hitsPerPage: state.settings.hitsPerPage,
    searchType: state.settings.searchType,
    showSidebar: state.navigation.showSidebar,
    sortOrder: state.settings.sortOrder,
    to: state.settings.to,
});

const mapDispatchToProps = (dispatch): ILayoutDispatchProps => ({
    apply: settings => dispatch(applySettings(settings)),
    toggle: () => dispatch(toggleSidebar()),
});

export class Layout extends React.Component<ILayoutProps, ILayoutComponentState> {
    constructor(props) {
        super(props);

        this.state = { ...this.getSettings() };
    }

    getSettings() {
        const { dateRange, from, hitsPerPage, searchType, sortOrder, to } = this.props;

        return { dateRange, from, hitsPerPage, searchType, sortOrder, to };
    }

    render() {
        const { apply, children, showSidebar, toggle } = this.props;

        return (
            <Sidebar.Pushable
                as={Segment}
                className={`${s.fullHeight} ${s.flex} ${s.inheritBg}`}
            >
                <Sidebar
                    animation="overlay"
                    as={Menu}
                    direction="right"
                    icon="labeled"
                    inverted
                    vertical
                    visible={showSidebar}
                >
                    <Settings
                        apply={() => apply(this.state)}
                        dateRange={this.state.dateRange}
                        from={this.state.from}
                        hitsPerPage={this.state.hitsPerPage}
                        searchType={this.state.searchType}
                        setState={(...args) => this.setState(...args)}
                        sortOrder={this.state.sortOrder}
                        to={this.state.to}
                        toggle={toggle}
                    />
                </Sidebar>
                <Menu
                    borderless
                    className={s.noMarginTop}
                    color="teal"
                    inverted
                    size="huge"
                >
                    <Menu.Menu widths={2}>
                        <Menu.Item header>
                            <Image size="mini" spaced="right" src={logo} />
                            Hacker news search
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu  position="right">
                        <Button
                            color="teal"
                            onClick={(event) => {
                                this.setState({ ...this.getSettings() });
                                event.stopPropagation();
                                toggle();
                            }}
                        >
                            <Icon name="setting" size="large" />
                        </Button>
                    </Menu.Menu>
                </Menu>
                <Sidebar.Pusher
                    className={`${s.flex} ${s.flexGrow}`}
                    onClick={() => { if (showSidebar) toggle(); }}
                >
                    <Container>
                        {children}
                    </Container>
                    <Footer />
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
