import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component{
        // constructor(props){
        //     super(props);
        //     // this is the only time we do direct assignment to this.state
        //     this.state = { lat: null, errorMessage: '' };

        // }
    // the above constructor code is equivalent to
    state = { lat: null, errorMessage: '' };
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage: error.message})
        );
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat)
        return  <div>Error: {this.state.errorMessage}</div>;

        if(!this.state.errorMessage && this.state.lat)
        return  <SeasonDisplay lat={this.state.lat}/>

        return  <Spinner message='Please accept location request'/>
    }

    // this render method is must for React
    // Do not use multiple return statement inside a render function
    render(){ // do not initialize in render method
       return (
           <div>{this.renderContent()}</div>
       )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)