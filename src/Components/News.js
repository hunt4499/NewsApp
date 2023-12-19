import React, {Component} from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news:[],
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
            this.setState({news:data.articles})
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
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item}/>
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

export default News

