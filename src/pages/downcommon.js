import React,{Component} from 'react';
import DownloadLink from 'react-download-link';

class Down extends Component {
    render(){
        return(
            <div className="col-6 col-md-4 bg-light">
                <div className="margin-content">
                    <img className="card-img-size" src={this.props.img} />
                </div>
            </div>
            
        );
    }
}

export default Down;