import React, { useState } from 'react'

export default function Dropdownmy({ value, onChange }) {

    const [itemchange, setItemchange] = useState("")

    const onChangecolor = (e) => {
        setItemchange(itemchange)
    }

    return (
        <div>
            <select name="cars" id="cars" onChange={onChange}>
                {value.map((item) => (
                    <>

                        <option value={item.value} onChange={onChangecolor}>{item.label}</option>

                    </>
                ))}

            </select>
        </div>
    )
}
