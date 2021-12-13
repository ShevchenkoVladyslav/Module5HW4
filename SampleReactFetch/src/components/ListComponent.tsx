import React, { ReactElement, ReactNode } from 'react';
import { Card, CardGroup, Container, Spinner } from 'react-bootstrap';

interface CardProps {
    keyId: number,
    children: ReactNode,
}

const CardsGroup = (props: CardProps): ReactElement => (
    <CardGroup key={props.keyId}>
        {props.children}
    </CardGroup>
)

export interface CardItemProps {
    id?: number | string,
    img?: string,
    title?: string,
    subtitle?: string,
    text?: string,
    cardHeader?: string,
    cardFooter?: string,
}

const cardImg = (props: CardItemProps | undefined): ReactElement => {
    if (props?.img) {
        return <Card.Img src={props?.img} className='avatar' />;
    }
    else {
        return React.createElement('span', { className: 'hidden' }, 'hiddenText');
    }
}

const cardTitle = (props: CardItemProps | undefined): ReactElement => {
    if (props?.title) {
        return (
            <Card.Title>
                {props?.title}
            </Card.Title>
        )
    }
    else {
        return React.createElement('span', { className: 'hidden' }, 'hiddenText');
    }
}

const cardSubtitle = (props: CardItemProps | undefined): ReactElement => {
    if (props?.subtitle) {
        return (
            <Card.Subtitle>
                {props?.subtitle}
            </Card.Subtitle>
        )
    }
    else {
        return React.createElement('span', { className: 'hidden' }, 'hiddenText');
    }
}

const cardText = (props: CardItemProps | undefined): ReactElement => {
    if (props?.text) {
        return (
            <Card.Text>
                {props?.text}
            </Card.Text>
        )
    }
    else {
        return React.createElement('span', { className: 'hidden' }, 'hiddenText');
    }
}

const CardItem = (props: CardItemProps): ReactElement => {
    return (
        <Card key={props?.id ?? props?.title}>
            <Card.Header>
                {props?.cardHeader ?? React.createElement('span', { className: 'hidden' }, 'hiddenText')}
            </Card.Header>
            <Card.Body>
                {cardImg(props)}
                {cardTitle(props)}
                {cardSubtitle(props)}
                {cardText(props)}
            </Card.Body>
            <Card.Footer>
                {props?.cardFooter ?? React.createElement('span', { className: 'hidden' }, 'hiddenText')}
            </Card.Footer>
        </Card>
    )
}

export const LoadingGenerator = (): ReactElement => (
    <Container className="centered">
        <span>Loading... </span>
        <Spinner animation="border" role="status" className="centered"><span className="centered hidden">hiddenText</span></Spinner>
    </Container>
);

const ListComponent = (props: CardItemProps[]): ReactElement => {
    return (
        <Container>
            <CardsGroup key={Math.random() * 975 / 135} keyId={Math.random() * 975 / 135}>
                {props.map(prop =>
                    <CardItem key={Math.random() * 975 / 135} img={prop?.img} text={prop?.text} title={prop?.title}
                        subtitle={prop?.subtitle} id={prop?.id} cardHeader={prop?.cardHeader} cardFooter={prop?.cardFooter} />
                )}
            </CardsGroup>
        </Container>
    );
}

export default ListComponent;
