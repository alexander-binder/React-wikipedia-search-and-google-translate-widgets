import React, { useState }from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
    {
        title: 'What is react ?',
        content: 'React is a front end javascript framwork!'
    },
    {
        title: 'Why use react ?',
        content: 'React is a favorite JS library among engineers !'
    },
    {
        title: 'How do you use react ?',
        content: 'You use React by creating components!'
    }
];


const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
 
];

function App() {


    
}





export default () => {
    const [selected, setSelected] = useState(options[0]);

    return( <>
        <div>
            <Header></Header>
        </div>
        <div>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/dropdown">
                 <Dropdown 
                    options={options}
                    label="Select a color !"
                    selected={selected}
                    onSelectedChange={setSelected}
                 />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
            <Route path="/list">
                <Search />
            </Route>


       

        </div>
        </>
    );
};