import React,{ Component} from 'react'; //this will allow to create react components
//import {Media} from 'reactstrap'; //?Media
import {Card , CardImg , CardImgOverlay , CardText , CardBody ,CardTitle } from 'reactstrap'

class Menu extends Component {

    constructor(props){//?what is props
        super(props);//?super()

        this.state = {//state stores properties related to this components
             selectedDish: null
        }
    }
    onDishSelect(dish) {
        this.setState({ selectedDish:dish })
    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    render(){//any component should implement this
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={ () => this.onDishSelect(dish)  }>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle >{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row"> 
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    } 
}

export default Menu; //exporting the component