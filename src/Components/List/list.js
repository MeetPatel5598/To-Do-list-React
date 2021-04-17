import React from 'react';
import { Button,Container,Col,ListGroup,InputGroup,FormControl,Card } from 'react-bootstrap';
import './list.css';

var today = new Date(),
        time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : [],
            value : '',
            showA : false,
            currentDateTime: time
        }
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    onSubmitButton(e){
        e.preventDefault();
        let {list, value} =this.state;
        list.push(value);
        this.setState(prevState => {
            return {
                ...prevState,
              list : list,
              value: '',
              showA : true,
              currentDateTime: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }) 
            };
        });
    }

    deleteList= event =>{
        var array = this.state.list;
        var index = array.indexOf(event.target.value); // Let's say it's Bob.
        delete array[index];
        this.setState(prevState => {
            return {
                ...prevState,
              list : array,
            };
        });
    }

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    render(){
        const {list,currentDateTime} = this.state;
        
        return(
            <Container className="list-background">
                <InputGroup className="mb-3">
                    <FormControl type="text" value={this.state.value} onChange={this.onChangeValue} placeholder="Text"/>
                    <InputGroup.Append>
                    <Button variant="primary" onClick={this.onSubmitButton} type="button">Submit</Button>
                    </InputGroup.Append>
                </InputGroup>

                
                <Col style={{marginTop: "20px"}}> 
                <ListGroup>
                {list.map((data,index)=>{
                   return <ListGroup.Item style={{marginTop: "20px" , backgroundColor: "#d9d9d9"}} key={index}><h4>{data}</h4>
                   <hr/>
                   <small><b>{currentDateTime}</b></small>
                   <Button className="float-right" variant="danger" value={data} onClick={this.deleteList}>Delete</Button></ListGroup.Item>
                })}
                </ListGroup>
                </Col>
            </Container>
        )
    }
}

export default List;