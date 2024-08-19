import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";

function CardPizza({ pizza }) {
  return (
   <Card className="border border-dark">
        <Card.Img  variant="top" src={pizza.img}/>      
          <Card.Body>          
            <Card.Title className="text-center">
              <h5>{pizza.name}</h5> 
              <h6>{pizza.desc}</h6></Card.Title> 
              <hr/>
              <ul>
                {pizza.ingredients.map((ingredient) => (
                <li key={ingredient}>🍕 {ingredient}</li>))}
              </ul>
              <hr/>
            <Card.Text className="text-center">
            <strong>Precio: </strong>${pizza.price}</Card.Text>           
              <div className="d-flex justify-content-around" >
                <Button variant="outline-dark btn">Ver más</Button>
                <Button className="btn btn-dark">Añadir 🛒</Button> 
              </div>
          </Card.Body>
      </Card>  
  );
}   

CardPizza.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
};

export default CardPizza;