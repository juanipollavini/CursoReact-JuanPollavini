import {Container,Row,Col} from 'react-bootstrap';
import { ProductCard } from '../ProductCard/ProductCard';
const ItemListContainer = ({Bienvenida}) =>{
    return(
        <Container className="my-5">
            <Row>
                <Col xl={12}>
                    <h2>{Bienvenida}</h2>
                    <hr/>
                    <ProductCard stock="5"/>
                </Col>
            </Row>
        </Container>

        
    );

}

export default ItemListContainer;