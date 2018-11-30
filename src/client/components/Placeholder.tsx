import * as React from 'react';
import { Placeholder } from 'semantic-ui-react';

const PlaceholderComponent: React.FunctionComponent = () => (
    <Placeholder>
        <Placeholder.Header>
            <Placeholder.Line />
            <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
        </Placeholder.Paragraph>
    </Placeholder>
);

export default PlaceholderComponent;
