import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Form = () => {
    const [type, setType] = useState("people")
    const [id, setId] = useState(1);

    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        navigate(`/${type}/${id}`)
    }

    return (
        <div>
            <form onSubmit={search}>
                <label>Search for: </label>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option value = "people">people</option>
                    <option value = "planets">planets</option>
                </select>
                <label>  ID: </label>
                <input type="number" min={1} onChange={e => setId(e.target.value)} value={id} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Form