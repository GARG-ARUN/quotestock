import React,{Component} from 'react';

class Index extends Component {
    render(){
        return(
            <div className="col-6 col-md-4">
                <div className={this.props.back}>
                    <img className="card-img-size" src={this.props.img} />
                    <div className="card-img-overlay">
                        <div className="card-body card-body-quote-text" >
                            <p>
                                {this.props.description} 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Index;