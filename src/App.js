import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Button } from 'antd';
import PriceInput from './PriceInput';
import { Component } from 'react';

class App extends Component {
    onFinish = (values) => {
        console.log('Received values from form: ', values);
    };

    checkPrice = (rule, value) => {
        if (value.number > 0) {
            return Promise.resolve();
        }

        return Promise.reject('Price must be greater than zero!');
    };
    render() {
        return (
            <Form
                name='customized_form_controls'
                layout='inline'
                onFinish={this.onFinish}
                initialValues={{
                    price: {
                        number: 0,
                        currency: 'rmb',
                    },
                }}
            >
                <Form.Item
                    name='price'
                    label='Price'
                    rules={[
                        {
                            validator: this.checkPrice,
                        },
                    ]}
                >
                    <PriceInput />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default App;
