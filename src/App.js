// src/App.js
import React from 'react';
import Header from './Header/Header';
import './Styles/App.css';
import Info1 from "./Info1";
import Info2 from "./Info2";
import Info3 from "./Info3";
import Table from "./Table";
import Info5 from "./Info5";


const App = () => {
    return (
        <div className="app">
            <Header />
            <Info1 />
            <Info2 />
            <Info3 />
            <Table />
            <Info5 />
        </div>
    );
};

export default App;

// function App() {
//   return (
//       Header
//   );
// }

// const App = () => {
//     return (
//         <div>
//             <Header /> {/* Используем компонент Header */}
//             {/*<h1>Наши Велосипеды</h1>*/}
//             {/* Остальной контент вашего приложения */}
//         </div>
//     );
// };
//
// export default App;


// class App extends Component {
//   render() {
//     return (
//         <div className={App}>
//           <Header />
//         </div>
//     )
//   }
// }
//
// export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
