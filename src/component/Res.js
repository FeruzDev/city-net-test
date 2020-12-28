// import React from 'react'
// import { useMediaQuery } from 'react-responsive'
//
// import NavbarMain from "./Navbar";
// import Home from "./Home";
// import Nimadir from "./Nimadir";
//
// import Company from "./Company";
//
//
//
//
//
// const Responsive = () => {
//
//
//     const isBigScreen = useMediaQuery({ query: '(min-width: 767px)' })
//     // const isMobileScreen = useMediaQuery({ query: '(max-width: 600px)' })
//
//
//     return (
//         <div>
//             {isBigScreen ?
//                <div>
//                     {/*<App></App>*/}
//                    <Home></Home>
//                    <Nimadir></Nimadir>
//
//                    <Company></Company>
//
//                </div>
//
//
//
//                 :
//
//
//     <div>
//
//         <NavbarMain/>
//
//     </div>
//             }
//         </div>
//     )
// }
//
//
//
// export default Responsive

//
// import useMediaQuery from "use-mediaquery";
//
// const Responsive = () => {
//     const matches = useMediaQuery("(min-width: 40em)");
//
//     <p>
//         Matches? <strong>{matches.toString()}</strong>
//     </p>;
// };
import React, {Component} from 'react';
import { useMediaQuery } from 'react-responsive'

class Responsive extends Component {
    render() {
        const matches = useMediaQuery("(min-width: 40em)");

        return (
            <div>

                <p>
                    Matches? <strong>{matches.toString()}</strong>
                </p>;
            </div>
        );
    }
}

export default Responsive;
//
//
//
//
// export default Responsive