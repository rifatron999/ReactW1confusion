import React,{ Component} from 'react'; //this will allow to create react components
//import {Media} from 'reactstrap'; //?Media
import {Card , CardImg , CardImgOverlay , CardText , CardBody ,CardTitle } from 'reactstrap'
import DishDetail from './DishdetailComponent';
class Menu extends Component {

    constructor(props){//?what is props
        super(props);//it calls the constructor of the parent class which in the case of a React component is React.Component.

        this.state = {//state stores properties related to this components
             selectedDish: null
        }
        console.log("menu component constructor is invoked");
    }
    componentDidMount(){
        console.log('menu component componentDidMount is invoked');
    }
    onDishSelect(dish) {
        this.setState({ selectedDish:dish })
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
        console.log("menu component render is invoked");
        return(
            <div className="container">
                <div className="row">
                        {menu} {/*no change here*/}
                </div>
                    <DishDetail selectedDish = {this.state.selectedDish}/>
            </div>
        );
        
    } 
}

export default Menu; //exporting the component