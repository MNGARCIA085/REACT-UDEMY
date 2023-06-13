import React from "react";

class ImageCard extends React.Component{


    constructor(props){
        super(props);

        this.state = { spans: 0};

        //creo la referencia
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        // agrego un eventListener
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10+1);

        this.setState({spans:spans});
    }


    render(){

        const {description, urls} = this.props.image; // desestructuro

        return (
            <div style={ {gridRowEnd: `span ${this.state.spans}`} }>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        )
    }
}

export default ImageCard;