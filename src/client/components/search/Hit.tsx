import * as moment from 'moment';
import * as React from 'react';
import MediaQuery from 'react-responsive';
import { Icon, Item, Label } from 'semantic-ui-react';

import { IHit } from '../../../types/search';
import * as s from './hit/Hit.css';

const Hit: React.FunctionComponent<{ data: IHit }> = ({ data }) => (
    <Item>
        <Item.Content>
            <Item.Header
                as={data.url || data.story_url ? 'a' : null}
                href={data.url || data.story_url}
            >
                <p
                    dangerouslySetInnerHTML={{ // Assume the response is sanitised
                        __html: (data._highlightResult.title
                                && data._highlightResult.title.value)
                            || (data._highlightResult.story_title
                                && data._highlightResult.story_title.value)
                            || 'Title not found',
                    }}
                />
            </Item.Header>
            <MediaQuery maxWidth={768}>
                {(matches) => {
                    const size = matches ? 'mini' : 'medium';
                    return (
                        <Item.Meta>
                            <Label className={s.marginTop} size={size}>
                                {data.points || 0} points
                            </Label>
                            <Label className={s.marginTop} size={size}>
                                <Icon name="user" />
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: data._highlightResult.author
                                            && data._highlightResult.author.value,
                                    }}
                                />
                            </Label>
                            <Label className={s.marginTop} size={size}>
                                {moment(data.created_at).fromNow()}
                            </Label>
                            <Label className={s.marginTop} size={size}>
                                {data.num_comments ? `${data.num_comments} comments` : 'comment'}
                            </Label>
                            {
                                data.url && !matches
                                    ? (
                                        <Label
                                            as="a"
                                            className={s.marginTop}
                                            href={data.url}
                                            size={size}
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: data._highlightResult.url
                                                        && data._highlightResult.url.value,
                                                }}
                                            />
                                        </Label>
                                    )
                                    : null
                            }
                        </Item.Meta>
                    );
                }}
            </MediaQuery>
            <Item.Description>
                {
                    data._highlightResult.comment_text || data._highlightResult.story_text
                        ? (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: (data._highlightResult.comment_text
                                            && data._highlightResult.comment_text.value)
                                        || (data._highlightResult.story_text
                                            && data._highlightResult.story_text.value),
                                }}
                            />
                        )
                        : null
                }
            </Item.Description>
        </Item.Content>
    </Item>
);

export default Hit;
