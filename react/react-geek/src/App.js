import React from 'react';
import logo from './logo.svg';
import Hello from "./hello";
import ChatApp from "./c01/ChatApp";
import CommentBox from "./c02/CommentBox";
import { TabSelectorSample } from "./c02/TabSelector";
import { StatefulTabSelectSample } from "./c02/StatefulTabSelector";
import SnapshotSample from "./c04/SnapshotSample";
// import ListSample from "./c31/App";
// import WizardSample from "./c35/App";
import './App.css';


const styles = {
  fontFamily:"sans-serif",
  paddingLeft:"250px"
};
const routerMap = {
  'chat':ChatApp,
  'commentbox':CommentBox,
  'tab-selector':TabSelectorSample,
  'stateful-tab-selectSample':StatefulTabSelectSample,
  'snapshot-sample':SnapshotSample
}

class App extends React.PureComponent {
  handleLinkClick = key => {
    window.history.pushState(null,"",`/#/${key}`);
    this.forceUpdate();
  }
  render(){
    const currentPage = document.location.hash.replace(/#\/?/,"");
    let CurrentPage = routerMap[currentPage]||Hello;
    if(currentPage.match(/\/user\/\w+|\/list-page/)){
      // currentPage = ListSample;
    }

    if(currentPage.match(/\/wizard\/step\/\w+/)){
      // currentPage = WizardSample
    }
    return(
      <div style={styles}>
        <ul className="menu-list">
          {
            Object.keys(routerMap).map(key=>(
              <li 
                key={key}
                className = {key==currentPage?"is-active":""}
                style = {{listStyle:"none"}}
              >
                <span className="link" onClick={()=>this.handleLinkClick(key)}>
                  {key}
                </span>
              </li>
            ))
          }
        </ul>
        <div style={{padding:"30px 0"}}>
        <CurrentPage />
      </div>
      </div>
    )
  }
}

// 除了为你提供了一个具有浅比较的shouldComponentUpdate方法，PureComponent和Component基本上完全相同。当props或者state改变时，PureComponent将对props和state进行浅比较。另一方面，Component不会比较当前和下个状态的props和state。因此，每当shouldComponentUpdate被调用时，组件默认的会重新渲染。

export default App;
