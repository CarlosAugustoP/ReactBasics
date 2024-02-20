import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props){
    return (
        <>
            <article>
                <strong>{props.post.title}</strong><br />
                <small>{props.post.subtitle}</small>
                <br />
                Likes:{props.likes}
                Media: {props.likes / 2}
            </article>
            <br />
            
        </>
    );
} 
Post.propTypes = {
    likes: PropTypes.number.isRequired,
    // define que no post precisa ter um objeto com title e subtitle
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }).isRequired
    

}