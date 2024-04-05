
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import '../App.css';


function Showfile() {

    const [userName, setUsername] = useState("")
    const [data, setdata] = useState({});

    const onChangeHandler = (e) => {
        setUsername(e.target.value)
    }

    const onSubmithandler = () => {
        // e.preventDefault();
        fetch('https://api.github.com/users/${userName}')
            .then((result) => {
                return result.json();

            }).then((value) => {
                console.log(value);
                setdata(value)
            })
    }
    return (

        <div >
            <div>
                <div >
                    <h1>GitHub user profile with react js</h1>

                </div>
                <div className='row'>
                    <div className='col-mt-6 mx-auto text-center'>
                        <div className='row mb-5 justify-content-center'>
                            <Form>
                                <Form.Group>
                                    <Form.Label>username</Form.Label>
                                    <Form.Control type='text' value={userName} onChange={onChangeHandler}></Form.Control>
                                </Form.Group>
                                <Card>
                                    <Card.Body>
                                        <Card.Img className='Img' src={`https://api.github.com/users${data.avatar_url}`}></Card.Img>

                                        <Card.Title className='text'><h1>{data.login}</h1></Card.Title>
                                        <Card.Title className='text'><h1>{data.name}</h1></Card.Title>
                                        <Card.Title className='text'><h1>{data.public_repo}</h1></Card.Title>
                                        <Card.Title className='text'><h1>{data.created_at}</h1></Card.Title>

                                    </Card.Body>
                                </Card>

                                <Button onClick={() => onSubmithandler()} variant='success' className='button'>Search</Button>
                            </Form>

                        </div>

                    </div>

                </div>
            </div>
        </div>




    )
}

export default Showfile