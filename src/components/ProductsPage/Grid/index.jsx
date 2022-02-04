import React from 'react';
import axios from "axios";
import Tile from "../Tile";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { CircularProgress } from "@material-ui/core";
import {Grid as MaterialGrid} from "@material-ui/core" ;

class Grid extends React.Component {

  state = {
        products: [],
        loading: true
    };

    getProducts = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        this.setState({
            products: response.data,
            loading: false,
        });
    };  

    componentDidMount() {
        this.getProducts();
    }

    render() {
        const tiles = this.state.products.map((product, id) => (
            <Col md={3} key={id}>
                <Tile name={product.name} type={product.type} image={product.images[0].src} price={product.price}></Tile>
            </Col>
        ));
        

        if(this.state.loading)
         return <Loader />;
        else
         return <Row>{tiles}</Row>;
    }
}

const Loader = () => (
        <MaterialGrid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "80vh" }}
            >
                <MaterialGrid    item xs={3}>
                    <CircularProgress />
                </MaterialGrid>
            </MaterialGrid> 
        )
export default Grid;