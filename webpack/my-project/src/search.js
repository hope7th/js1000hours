import React from 'react';
import ReactDOM from 'react-dom';
import './search.css';
import './search.less';
class Search extends React.Component {
    render(){
        return <div class="search-text">Search Text</div>
    }
}

ReactDOM.render(
    <Search></Search>,
    document.getElementById("root")
)