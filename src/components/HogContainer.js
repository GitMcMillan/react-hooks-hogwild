import React, { useState } from 'react'
import HogTile from './HogTile'
import Filter from './Filter'


const HogContainer = ({ hogs }) => {

  const [isGreased, setIsGreased] = useState(false)
  const [sortBy, setSortby] = useState("name")

  function sortHogs(newSort) {
    setSortby(newSort)
  }

  function greaseToggle() {
    setIsGreased(!isGreased)
  }

  const greasedHogs = hogs.filter(hog => {
    if (isGreased) {
      return hog.greased
    } else {
      return true
    }
  })

  const sortedHogs = greasedHogs.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    } else {
      return a.weight - b.weight
    }
  })


  const mappedHogs = sortedHogs.map(hog => {
    return <HogTile key={hog.name} {...hog} />
  })

  return (
    <div className="ui eight wide column">
      <Filter isGreased={isGreased} greaseToggle={greaseToggle}
        sortHogs={sortHogs}
        sortBy={sortBy} />
      {mappedHogs}
    </div>
  )
}

export default HogContainer

























// import React, { useState } from 'react'
// import HogTile from './HogTile'
// import Filter from './Filter'

// const HogContainer = ({ hogs }) => {

//   const [isGreased, setIsGreased] = useState(false)
//   const [sortBy, setSortBy] = useState("name") //by name or weight

//   const filteredHogs = hogs.filter(hog => {
//     if (isGreased) {
//       return hog.greased
//     } else {
//       return true
//     }
//   })

//   function greasedToggle() {
//     setIsGreased(!isGreased)
//   }

//   const sortedHogs = filteredHogs.sort((hogA, hogB) => {
//     if (sortBy === "name") {
//       return hogA.name.localeCompare(hogB.name)
//     } else {
//       return hogA.weight - hogB.weight
//     }
//   })

//   const mappedHogs = sortedHogs.map(hog =>
//     <HogTile key={hog.name} {...hog} />)



//   function HandleUpdateSort(newSort) {
//     console.log(newSort);

//     setSortBy(newSort)
//   }


//   return (
//     <div className="ui eight wide column">
//       Show Only Greased
//       <Filter isGreased={isGreased} greasedToggle={greasedToggle}
//         sortBy={sortBy} HandleUpdateSort={HandleUpdateSort} />
//       {mappedHogs}
//     </div>
//   )
// }

// export default HogContainer




















// import React, { useState } from 'react'
// import HogTile from './HogTile'
// import Filter from './Filter'

// const HogContainer = ({ hogs }) => {

//   const [isShowingOnlyGreased, setIsShowingOnlyGreased] = useState(false)



//   const filteredHogs = hogs.filter(hog => {
//     if (isShowingOnlyGreased) {
//       // if isShowingOnlyGreased == true, return only hogs that are greased
//       return hog.greased
//     } else {
//       //otherwise, return all hogs
//       return true
//     }
//   })
//   const mappedHogs = filteredHogs.map(hog => {
//     return <HogTile key={hog.name} {...hog} />
//   })

//   function handleGreaseToggle() {
//     setIsShowingOnlyGreased(!isShowingOnlyGreased)
//   }

//   return (
//     <div className="ui grid container">
//       <Filter isShowingOnlyGreased={isShowingOnlyGreased} handleGreaseToggle={handleGreaseToggle} />
//       {mappedHogs}
//     </div>
//   )
// }

// export default HogContainer
