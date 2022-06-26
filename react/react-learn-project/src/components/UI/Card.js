import React from 'react';
import './Card.css'

function Card(props) {
    const cardsClass = 'card ' + props.className;
    return ( 
        <div className = {cardsClass}>{props.children}</div>
     );
}

export default Card;

/*

------------------------------------------------IMPORTANT----------------------------------------------------

WHY USE THE CARDS CUSTOM COMPONENT INSTEAD OF DIV AS ENCLOSING TAG FOR EACH COMPONENT?

We are using Cards to replace the div elements that we use as an enclosure
shell around all the jsx/html content for each component, that acts as the
parent tag.

Reason:

1. It reduces the redundant CSS property we have to write for the parent
   enclosing shell div element everytime we create a new component

2. Right now it may appear that we are replacing one div element but when the
   enclosing shell becomes complex then this concept will aid reducing redundant
   code severely.


This concept that we are using right now is called Composition and we are also using
children props in the process.

Line 5: const cardsClass = 'card ' + props.className; allows us to make CSS class assigned dynamic, How?

    props.className will supply the CSS class of the elements which will be enclosed by this
    shell element cards and store in cardsClass variable (class names will append after 'card ')
    and we use cardsClass as the variable supplying the CSS class names for Cards shell element

Line 7: <div className = {cardsClass}>{props.children}</div>, Why use props.children?

    If we use without the {props.children}, Cards will not function same as the default enclosing
    div element that HTML provides and consequently only card will render without the contents.

    During render time props.children is replaced with the HTML/JSX element that is enclosed by
    Cards component.

    Example:

    function ExpenseItem(props) {
    return ( 
        <Cards className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div  className='expense-item__price'>${props.amount}</div>
            </div>
        </Cards>
    );

    Here at Line 54, Cards is the enclosing element instead of usual div tag.
    
    During render {props.children} is replaced by:
        
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div  className='expense-item__price'>${props.amount}</div>
        </div>

    which is basically the HTML/JSX content that card was enclosing i.e the children elements
    to the parent Cards element.

    This replacement does not occur unless we provide props.children and thereby without it,
    Cards renders similar to a div element without a content in it even though we have kept HTML/JSX
    elements enclosed in it.

    'children' in props.children is a reserved keyword

    Whenever we use props, 'children' property is always present whether we need it or not.
    In this case we are using the children property.

    The enclosed content is always supplied to the enclosing element by the children property of props.

}

------------------------------------------------------------------------------------------------------------

*/