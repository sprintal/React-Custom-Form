import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input, Select, Button } from 'antd';
const { Option } = Select;

class PriceInput extends Component {
    state = {
        number: 0,
        currency: 'rmb',
    };
    // const [number, setNumber] = useState(0);
    // const [currency, setCurrency] = useState('rmb');

    triggerChange = (changedValue) => {
        console.log(
            this.state.number,
            this.state.currency,
            this.props.value,
            changedValue
        );
        console.log(this.props);
        if (this.props.onChange) {
            this.props.onChange({
                number: this.state.number,
                currency: this.state.currency,
                ...this.props.value,
                ...changedValue,
            });
        }
    };

    onNumberChange = (e) => {
        const newNumber = parseInt(e.target.value || 0, 10);

        if (Number.isNaN(this.state.number)) {
            return;
        }

        if (!('number' in this.props.value)) {
            this.setNumber(newNumber);
        }

        this.triggerChange({
            number: newNumber,
        });
    };

    onCurrencyChange = (newCurrency) => {
        if (!('currency' in this.props.value)) {
            this.setCurrency(newCurrency);
        }

        this.triggerChange({
            currency: newCurrency,
        });
    };
    render() {
        return (
            <span>
                <Input
                    type='text'
                    value={this.props.value.number || this.state.number}
                    onChange={this.onNumberChange}
                    style={{
                        width: 100,
                    }}
                />
                <Select
                    value={this.props.value.currency || this.state.currency}
                    style={{
                        width: 80,
                        margin: '0 8px',
                    }}
                    onChange={this.onCurrencyChange}
                >
                    <Option value='rmb'>RMB</Option>
                    <Option value='dollar'>Dollar</Option>
                </Select>
                <Button onClick={() => console.log(this.props.onChange)}>
                    123
                </Button>
            </span>
        );
    }
}

export default PriceInput;
