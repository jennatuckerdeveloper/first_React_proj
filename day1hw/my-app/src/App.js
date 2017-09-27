import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {

        const data = [
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'}
        ];

        const compare = (recordA, recordB) => {
            if (recordA.category > recordB.category) {
                return -1
            }
            if (recordB.category > recordA.category) {
                return 1
            }
            // a must be equal to b
            return 0
        }

        data.sort(compare)

        const rows = []
        let cat = null 
        for (let i=0; i<data.length; i++) {
            if (data[i]['category'] !== cat) {
                cat = data[i]['category']
                rows.push(<th colspan={2}>{data[i]['category']}</th>)
            }
            rows.push(<tr><td>{data[i]['name']}</td><td>{data[i]['price']}</td></tr>)
        }

        return (
            <div>
                <input type="textbox" placeholder="Search..."/>
                <br/>
                <input type="checkbox"/>
                <label>Only show products in stock</label>
                <br/>
                <br/>
                {rows}
            </div>
        )
    };
}

export default App;
