import React, {Component} from 'react';
import _ from 'lodash';
import ModalForm from "../components/ModalForm";
import {getData, setData} from "../helpers/storage";

const ROWS = 10;
const COLS = 15;


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            activeRow: 0,
            activeCol: 0,
            data: getData(),
        }
    }


    handleClick = (row, col) => {
        this.setState({
            showModal: true,
            activeRow: row,
            activeCol: col
        })
    };

    save = (obj) => {

        const {data} = this.state;
        if (!data[obj.row]) {
            data[obj.row] = {}
        }
        data[obj.row][obj.col] = {
            name: obj.name,
            phone: obj.phone,
        };
        //console.log(data);
        this.setState({
            showModal: false,
            data
        });
        setData(data)
    };

    delete = (row, col) => {
        const {data} = this.state;
        delete data[row][col];
        this.setState({
            showModal: false,
            data
        });
        setData(data)
    };

    render() {
        const {data, showModal, activeRow, activeCol} = this.state;
        return (
            <div>
                <table>
                    <tbody>
                    {_.range(1, ROWS + 1).map((row) => (
                        <tr key={row}>
                            {_.range(1, COLS + 1).map((col) => (
                                <td
                                    key={col}
                                    className={data[row] && data[row][col] ? 'active' : ''}
                                    onClick={() => this.handleClick(row, col)}
                                >
                                    {`${row} / ${col}`}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                {showModal
                    ? <ModalForm save={this.save}
                                 delete={this.delete}
                                 activeCol={activeCol}
                                 activeRow={activeRow}/>
                    : null}
            </div>
        );
    }
}

export default Home;
