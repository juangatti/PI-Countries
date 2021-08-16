import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { getAllNames, createActivity } from '../../actions/actions';



export default function ActivityCreate() {




    const detail = useSelector((state) => state.allCountries)

    const [infoForm, setInfoForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        id: []
    });
    const [error, setError] = useState('');
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const stateReset = () => {
        setInfoForm({
            name: "",
            difficulty: '',
            duration: '',
            season: '',
            id: []
        })
        setInput("")
    }

    const sumitInput = (e) => {
        e.preventDefault();
        setInput(e.target.id)
    }

    const setDataHandler = (e) => {
        e.preventDefault();
        setInfoForm({
            ...infoForm,
            [e.target.name]: e.target.value
        })

    }
    const setIdHandler = (e) => {
        e.preventDefault();
        setInfoForm({
            ...infoForm,
            [e.target.id]: e.target.value
        })

    }

    useEffect(() => {
        dispatch(getAllNames(input))
    }, [dispatch, input])



    function validateInput(value) {
        var inputPattern = /^[A-Za-z\s]+$/; // Expresion Regular para validar que sean solo strings.
        if (!inputPattern.test(value)) {
            setError('Please  enter only alphaletical letters.');
        } else {
            setError('')
        }
    }

    function handleChange(e) {
        const { value, name } = e.target;

        if (name === 'name') {
            validateInput(value.name)
        }

        setInfoForm({
            ...infoForm,
            [e.target.name]: e.target.value // Sintaxis ES6 para actualizar la key correspondiente
        });
    }

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(createActivity(input))
    }




    return (
        <div>

            <form onSubmit={(e) => submitForm(e)}>
                <div>
                    <input

                        type="text"
                        autoComplete="off"
                        placeholder="Name your activity"
                        name="name"
                        value={infoForm.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Select difficulty</label>
                    <select
                        name="difficulty"
                        value={infoForm.difficulty}
                        id="difficulty"
                        onChange={setDataHandler}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>

                <div>
                    <label>Duration in hours</label>
                    <select
                        name="duration"
                        value={infoForm.duration}
                        id="duration"
                        onChange={setDataHandler}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                    </select>
                </div>

                <div>
                    <label>Select season</label>
                    <select
                        name="season"
                        value={infoForm.season}
                        id="season"
                        onChange={setDataHandler}
                    >
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                    </select>
                </div>

                <div >
                    <label>Select Countries</label>
                    <input

                        type="text"
                        autoComplete="off"
                        placeholder="find your country..."
                        onChange={setIdHandler}
                    />
                   
                </div>
                {!error ? null : <div>{error}</div>}
                <input type="submit" value="Submit" />
            </form>

        </div>
    );

}