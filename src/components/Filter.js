import React from 'react'

const Filter = ({ isGreased, greaseToggle, sortHogs, sortBy }) => {
  return (
    <div>
      <label>
        Show Only Greased? <br />
        <input type="checkbox" value={isGreased} onClick={greaseToggle} />
      </label>
      <br />
      <select value={sortBy} onChange={(e) => sortHogs(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>

      </select>
    </div>
  )
}

export default Filter





























// import React from 'react'

// const Filter = ({ isGreased, greasedToggle, sortedHogs, sortBy, HandleUpdateSort }) => {
//   return (
//     <div>
//       <label>
//         <input type="checkbox" checked={isGreased} onChange={greasedToggle} />
//       </label>
//       <br />
//       <select value={sortBy} onChange={(e) => HandleUpdateSort(e.target.value)} >
//         <option value="name">Sort by Name</option>
//         <option value="weight">Sort by Weight</option>
//       </select>

//     </div>
//   )
// }

// export default Filter













// import React from 'react'

// const Filter = ({ isShowingOnlyGreased, handleGreaseToggle }) => {
//   return (
//     <div >
//       <label>
//         Show Only Greased <br />
//         <input
//           type="checkbox"
//           checked={isShowingOnlyGreased}
//           onChange={() => handleGreaseToggle}
//         />
//       </label>
//     </div>
//   )
// }

// export default Filter
