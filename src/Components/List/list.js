import React from 'react';
import { Button,Form,Container,Col,ListGroup } from 'react-bootstrap';
import './list.css';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : [],
            value : '',
            showA : false
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
              showA : true
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
        const {list} = this.state;
        
        return(
            <Container style={{marginTop: "20px"}}>
                <Form>    
                <Form.Control type="text" value={this.state.value} onChange={this.onChangeValue} placeholder="Text" />
                <br/>
                <Button variant="primary" onClick={this.onSubmitButton} type="button">Submit</Button>
                </Form>
                
                <Col style={{marginTop: "20px"}}> 
                <ListGroup>
                {list.map((data,index)=>{
                   return <ListGroup.Item key={index}>{data}<Button className="float-right" variant="danger" value={data} onClick={this.deleteList}>Delete</Button></ListGroup.Item>
                })}
                </ListGroup>
                </Col>
            </Container>
        )
    }
}

export default List;