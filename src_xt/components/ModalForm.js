import React, {Component} from 'react';
import {getData} from "../helpers/storage";

class ModalForm extends Component {
    constructor(props) {
        super(props);
        const data = getData();
        const {activeRow, activeCol} = this.props;
        let name = '';
        let phone = '';
        if (data[activeRow] && data[activeRow][activeCol]) {
            name = data[activeRow][activeCol].name;
            phone = data[activeRow][activeCol].phone;
        }
        this.state = {
            name: name,
            phone: phone,
        }
    }

    handleChange = (ev, key) => {
        this.setState({[key]: ev.target.value})
    };

    handleClick = () => {
        const {name, phone} = this.state;
        const {activeRow, activeCol} = this.props;
        this.props.save({
            name,
            phone,
            row: activeRow,
            col: activeCol,
        })
    };

    render() {
        const {name, phone} = this.state;
        const {activeRow, activeCol} = this.props;

        return (
            <div className="modal">
                <input
                    onChange={(ev) => this.handleChange(ev, 'name')}
                    type="text"
                    value={name}
                    placeholder="Name"/>
                <input
                    onChange={(ev) => {
                        this.handleChange(ev, 'phone')
                    }}
                    type="text"
                    value={phone}
                    placeholder="Phone"/>

                <input type="text" readOnly value={activeRow}/>
                <input type="text" readOnly value={activeCol}/><br/>
                <button onClick={this.handleClick}>Save</button>
                <button onClick={() => this.props.delete(activeRow, activeCol)}>Delete</button>
            </div>
        );
    }
}

export default ModalForm;