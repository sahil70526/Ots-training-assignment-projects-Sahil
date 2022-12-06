import React from 'react'

export default function List(props) {
  return (
    <div>
        <ul>
                {
                    props.arr.map((i) => <li>{i}</li>)
                }
            </ul>
    </div>
  )
}
