import react from 'react';
import {Accordion, Card, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function CollapseForm(props){
    
    return(
        <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <FontAwesomeIcon icon={props.icon} />
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{props.contain}</Card.Body>
                        </Accordion.Collapse>
            </Card>
        </Accordion>
        
    );
}