import React, { useState } from 'react'

const HogTile = ({ name, image, specialty, weight, greased, "highest medal achieved": Medal }) => {

  const [displayDetails, setDisplayDetails] = useState(false)

  function detailsToggle() {
    setDisplayDetails(!displayDetails)

  }


  return (
    <div className="pigTile">
      <h3>{name}</h3>
      <img src={image}
        alt={name}
        onClick={detailsToggle}
        className="minPigTile maxPigTile" />
      {displayDetails && <> <br />
        <span>Speicalty: {specialty}</span><br />
        <span>Weight: {weight}lbs</span><br />
        <span>Greased: {greased ? "Yes" : "No"}</span><br />
        <span>Highest Medal: {Medal}</span><br />


      </>}
    </div>
  )
}

export default HogTile






















// import React, { useState } from 'react'




// const HogTile = ({ name, image, specialty, weight, greased, "highest medal achieved": Medal }) => {
//   const [showDetails, setShowDetails] = useState(false)

//   function detailsToggle() {
//     setShowDetails(!showDetails)
//   }


//   return (
//     <div onClick={detailsToggle} className="pigTile">
//       <h2>{name}</h2>
//       <img src={image} alt={name} className="minPigTile maxPigTile" />
//       {showDetails && <> <br />
//         <span>Specialty: {specialty}</span> <br />
//         <span>Weight: {weight}lbs</span> <br />
//         <span>Greased: {greased ? "Yes" : "No"}</span> <br />
//         <span>Highest Medal Earned: {Medal}</span>


//       </>}

//     </div>
//   )
// }
// //When the user clicks on the hog tile, display the other details about the hog (its specialty, weight, greased, and highest medal achieved
// // onclick handler 
// //toggle
// //usestate 
// // toggling the details
// export default HogTile



















// import React, { useState } from 'react'


// const HogTile = ({ name, image, specialty, greased, weight, "highest medal achieved": Medal }) => {

//   const [pigDetails, setPigDetails] = useState(false)

//   function detailsClick() {
//     setPigDetails(!pigDetails)

//   }
//   return (
//     <div className="pigTile">
//       <h3>{name}</h3>
//       <img onClick={detailsClick} src={image} alt={name} className="minPigTile maxPigTile" />
//       {pigDetails && <> <br />
//         <span>Specialty: {specialty}</span> <br />
//         <span>Greased: {greased ? "Yes" : "No"}</span> <br />
//         <span>Weight: {weight} lbs</span> <br />
//         <span>Highest Medal: {Medal}</span>


//       </>}
//     </div>
//   )
// }

// export default HogTile
