import React,{ Component} from 'react'; //this will allow to create react components
import {Media} from 'reactstrap'; //?Media

class Menu extends Component {

    constructor(props){//?what is props
        super(props);//?super()

        this.state = {//state stores properties related to this components
             
        }
    }
    render(){//any component should implement this
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    } 
}

export default Menu; //exporting the component