import React, { Component } from 'react'
import axios from 'axios'
export class Nasa extends Component {
      
state = {
    results :[]
}

    componentDidMount(){
        axios({
            "method": "GET",
            "url": 'https://images-api.nasa.gov/search?q=galaxy&page_size=1'
            // "params":{
            //     'q':'apollo 11'
            // }
        })
            .then((res) => {
                const results = res.data.collection.items
             
                this.setState({results})
                console.log(results)
                
            })
            .catch((error) => {
                console.log(error)
            })
            
        }
        
        render() {
            const item = this.state.results
            console.log(item)
          return (
            <div>
               <ul>
                {
                        item.map(post => (
                            <img width={'200px'} key={post.id} src={post}/>
                        ))
                }
            </ul>
      </div>
    )
  }
}

export default Nasa