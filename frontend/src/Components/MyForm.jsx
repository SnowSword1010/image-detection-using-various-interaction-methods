import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function MyForm(props) {

    const formName = window.location.pathname.split('/')[2];
    let flag = true;
    if (formName == 'object' || formName == 'depth') {
        flag = true;
    }
    else if (formName == 'ocr' || formName == 'speech') {
        flag = false;
    }



    /****** LOADING BUTTON STATE CONFIGURATION ******/

    const [isLoading, setLoading] = useState(false);

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 300));
    }

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = (e) => {
        setLoading(true);
    }

    // handleClick() function is called in the handleSubmit function

    /************************************************/



    const [checked, setChecked] = useState(false);

    function handleRadioClick() {
        setChecked(!checked);
    }

    /********** SLIDER STATE CONFIGURATION **********/

    const [sliderState, setSliderState] = useState(0);
    function setState() {
        setState()
    }

    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    /************************************************/


    /******** SUBMIT CONFIG(BACKEND CONNECT) ********/

    function handleSubmit(e) {
        e.preventDefault();

        const formUserName = e.target[0].value;

        const dummyData = {
            name: e.target[0].value,
            slider: e.target[1].value,
            accent: e.target[2].value
        };


        fetch('/script1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dummyData)
        }).then(
            response => response.json()
        ).then(data => console.log(data));


        if (!isLoading) {
            handleClick();
        }
    }

    /************************************************/


    if (flag == true) {
        return (

            <div>
                <Form onSubmit={handleSubmit}>
                    <TextField name="username" id="standard-basic" label="Name" />
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" marks
                        min={0}
                        max={50}
                        step={5}
                        valueLabelDisplay="auto" />

                    <Form.Label>Accent</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Male English</option>
                        <option>Female English</option>
                        <option>Male Hindi</option>
                        <option>Female Hindi</option>
                    </Form.Control>

                    <Button
                        variant="success"
                        type="submit"
                        disabled={isLoading}
                        // onClick={}
                        className="loading-button"
                    >
                        {isLoading ? 'Loading…' : "Submit"}
                    </Button>
                </Form>
            </div>

        )
    }
    else {
        return (
            <div>
                Not Form
            </div>
        )
    }
}