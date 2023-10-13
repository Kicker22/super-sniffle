import React, { Component } from 'react'
import axios from 'axios'
export class Tea extends Component {
      
state = {
    yt :[]
}

    componentDidMount(){
        axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params":{
                'part':'snippet',
                'maxResults':'20',
                'key':'AIzaSyCNDal2v9dMF39_6aQUEPOwpiICQ27IjJs',
                'q': 'Science'
            }
        })
            .then((res) => {
                const yt = res.data.items
                this.setState({yt})
            })
            .catch((error) => {
                console.log(error)
            })
            
        }
        
        render() {

    return (
      <div>
            <ul>
                {
                    // this.state.yt.map(post => (
                    //     <li key={post.id}>{post.kind}</li>
                    // ))
                }
            </ul>
      </div>
    )
  }
}

export default Tea