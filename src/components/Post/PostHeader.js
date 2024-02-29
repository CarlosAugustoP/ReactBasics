import React from 'react';
import PropTypes from 'prop-types'; 
import Button from '../Button';

export default function PostHeader(props){
    return (
        <>
        <strong>
            {props.post.read && <s>{props.post.title}</s>}
            {!props.post.read && props.post.title}
        </strong><br />
        <Button
         onClick = {() => props.onRemove(props.post.id)}>
            Remover
        </Button>
            <br />
        </>
    );
    
}

PostHeader.propTypes = {
    // define que a função onRemove é uma função
    onRemove: PropTypes.func.isRequired,
    // define que no post precisa ter um objeto com title e subtitle
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired
    

}