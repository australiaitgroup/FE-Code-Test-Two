import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
} from 'semantic-ui-react';

import * as s from '../components/pageNotFound/PageNotFound.css';
import pageNotFoundImage from '../components/pageNotFound/pageNotFound.svg';

export class PageNotFound extends React.PureComponent<any> {
    componentDidMount() {
        document.getElementById('root')!.style.height = '100%';
    }

    componentWillUnmount() {
        document.getElementById('root')!.style.height = null;
    }

    render() {

        return (
            <Container className={s.height}>
                <Grid
                    centered
                    className={s.height}
                    stackable
                    textAlign="center"
                    verticalAlign="middle"
                >
                    <Grid.Column width={7} textAlign="center">
                        <Image src={pageNotFoundImage} />
                    </Grid.Column>
                    <Grid.Column width={7} textAlign="center">
                        <Header
                            as="h1"
                            className={s.headerFontSize}
                            color="grey"
                            textAlign="center"
                        >
                            404
                            <Header.Subheader className={s.contentFontSize}>
                                Sorry, the page could not be found
                            </Header.Subheader>
                        </Header>
                        <Button as={Link} primary to="/">
                            Back to home page
                        </Button>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default PageNotFound;
