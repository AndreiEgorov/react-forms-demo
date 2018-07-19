import React from 'react'
import ReactDOM from "react-dom";
import { Form, Field } from 'react-final-form'


const validate = values => { };
const onSubmit = values => { };

class App extends React.Component {

    getData(cats) {

        console.log(cats.controlled)
        console.log(cats.uncontrolled)
    }

    render() {
        return (
            <div>
                <h3>React Form Basis by Andrei</h3>

                <Form
                    onSubmit={this.getData.bind(this)}
                    validate={validate}
                    render={({ handleSubmit, pristine, invalid }) => (
                        <form onSubmit={handleSubmit}>

                            <Field
                                name="controlled"
                                render={({ input, meta }) => (

                                    // console.log(input)
                                    <div>
                                        <label>Controlled Input</label>
                                        <input
                                            {...input}
                                            placeholder="First Name"
                                        />
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </div>
                                )}
                            />
                            <Field
                                name="uncontrolled"
                                render={({ input, meta }) => (
                                    <div>
                                        <label>Uncontrolled Input</label>
                                        <input
                                            {...input}

                                            placeholder="Last Name"

                                        />
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </div>
                                )}
                            />

                            <button> Get Data</button>
                        </form>
                    )}

                />
            </div>
        )

    }

}







ReactDOM.render(<App />, document.getElementById('root'))
