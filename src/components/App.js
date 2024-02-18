import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogContainer from "./HogContainer";


function App() {



	return (
		<div className="App">
			<Nav />
			<HogContainer hogs={hogs} />

		</div>
	);
}

export default App;






// import React from "react";
// import Nav from "./Nav";
// import HogContainer from "./HogContainer";
// import hogs from "../porkers_data";

// function App() {
// 	return (
// 		<div className="App">
// 			<Nav />
// 			<HogContainer hogs={hogs} name={hogs.name} image={hogs.image} />
// 		</div>
// 	);
// }

// export default App;








// import React from "react";
// import Nav from "./Nav";
// import HogContainer from "./HogContainer";
// import hogs from "../porkers_data";

// function App() {
// 	return (
// 		<div className="App">
// 			<Nav />
// 			<HogContainer hogs={hogs} />
// 		</div>
// 	);
// }

// export default App;


