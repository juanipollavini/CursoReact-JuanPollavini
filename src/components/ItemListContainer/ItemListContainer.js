import {Container,Row,Col} from 'react-bootstrap';

const ItemListContainer = ({Bienvenida}) =>{
    return(
        <Container className="my-5">
            <Row>
                <Col xl={12}>
                    <h2>{Bienvenida}</h2>
                    <hr/>
                </Col>
            </Row>
        </Container>

        
    );

}

export default ItemListContainer;