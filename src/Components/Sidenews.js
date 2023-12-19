import React, {Component} from 'react';
import SingleSide from './SingleSide';
import Error from './Error';

class Sidenews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidenews:[],
            error:false
        }
    }
    componentDidMount(){
        const url=`https://newsapi.org/v2/everything?q=apple&from=2023-12-17&to=2023-12-17&sortBy=popularity&apiKey=${process.env.REACT_APP_API}`
        console.log(url)
        fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            this.setState({sidenews:data.articles})
        })
        .catch(err=>{
            console.log(err)
            this.setState({error:true})
        }
            )
    }
    renderItems() {
        if (this.state?.error) {
            return <Error/>
        }else{
        return this.state.sidenews.map((item) => (
            <SingleSide key={item.url} item={item}/>
        ));
        }

    }

    render() {
        return (
            <div className='row'>
                {this.renderItems()}
            </div>
        )
    }
}

export default Sidenews

