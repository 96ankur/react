import React from 'react';

class ImageCard extends React.Component{

    constructor(){
        super();

        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({spans})
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    render() {
        const {descirption, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={descirption} src={urls.regular}/>
            </div>
        )
    }
}

export default ImageCard;