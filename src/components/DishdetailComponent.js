import React , { Component } from 'react';
import {Card, CardImg , CardImgOverlay , CardText , CardBody , CardTitle } from 'reactstrap';
import {Media} from 'reactstrap';
class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    renderDish(dish){
        
        return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle ><b>{dish.name}</b></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
        );
    }
    renderComments(comments){
        
        if (comments != null){
            const comms = comments.map((comm) => {
                return (
                        <ul key={comm.id} className="list-unstyled">
                            <li className="comment">{comm.comment}</li>
                            <li className="author">-- {comm.author}, {comm.date}</li>
                        </ul>          
                    );
                })

            return (         
                <div className="container">
                    <div className="row">  
                        <h4>Comments</h4>
                          <div>{comms}</div>  
                    </div>
                </div>

            );
        }
        else {
            return(
                <div></div>
            )
        }
        
    }

    render(){
        const selectedDish = this.props.selectedDish;
        if(selectedDish != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 mt-1" >
                        {this.renderDish(selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 mt-1" >
                        {this.renderComments(selectedDish.comments)}
                    </div>
                </div>
                    );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;