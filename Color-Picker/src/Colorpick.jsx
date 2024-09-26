import React, {useState} from 'react'
function Colorpick(){
    const [color, setColor]=useState("#FFFFFF")
    function handleColorChange(event){
        setColor(event.target.value)
    }
    return(<>
    <div className="Color-pick-box">
        <h1>ColorPicker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Selcted color:{color}</p>
        </div>
        <label>Select a color</label>
        <input type="color" value={color} onChange={handleColorChange}/>

    </div>
</>);
}
export default Colorpick