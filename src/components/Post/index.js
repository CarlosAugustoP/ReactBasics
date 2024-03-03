import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import styles from './Post.scss';
import {Container, Subtitle, Rate} from './styles'
export default function Post(props){
    return (
        <>
            <Container removed = {
                props.post.removed
                
            }>
                <PostHeader 
                    onRemove = {props.onRemove} 
                    post = {{
                        id: props.post.id,
                        title: props.post.title,
                        read: props.post.read
                    }}
                />
                <Subtitle>{props.post.subtitle}</Subtitle>
                Likes:{props.post.likes}
                Media: {props.post.likes / 2}
            </Container>
            <br />
            <Rate>Media:{props.post.likes/2}</Rate>
            
        </>
    );
} 
Post.propTypes = {
    // define que a função onRemove é uma função
    onRemove: PropTypes.func.isRequired,
    // define que no post precisa ter um objeto com title e subtitle
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired,
        removed: PropTypes.bool.isRequired  
    }).isRequired
    

}