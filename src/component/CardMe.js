import react,{ Component } from 'react';
import {Card, Button} from 'react-bootstrap'; 

class CardMe extends Component {
    
    render(){
        return(
            <Card className="bg-whitefor shadow mb-5 h-100">
                <Card.Img className="img-card" Variant="top" src={this.props.src} alt={this.props.alt} />
                <Card.Body>
                    <Card.Title className={this.props.dtitle + " bg-bluesky py-2 text-uppercase"}>{this.props.title}</Card.Title>
                    <Card.Text  className="text-left">
                        {this.props.name}
                    </Card.Text>
                    {this.props.desc.length > 0 &&
                    <Card.Text className="text-left">
                        {this.props.desc}
                    </Card.Text>}
                    <Button className={this.props.dbutton+' mt-4 rounded-pill w-50'}>More</Button>
                </Card.Body>
            </Card>
        )
    }
}
CardMe.defaultProps = {
    classMe:'',
    dbutton:'',
    desc:''
}
export default CardMe;