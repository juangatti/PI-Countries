import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useState, } from "react"
import { createActivity, } from '../../actions/actions';
import { Link } from "react-router-dom"
import s from "./activityform.module.css"



export default function ActivityCreate() {




    const countries = useSelector((state) => state.allCountries)

    const [infoForm, setInfoForm] = useState({
        name: '',
        difficulty: '1',
        duration: '1',
        season: 'Autum',
        countryName: []
    });


    const dispatch = useDispatch()

    function handleChange(e) {
        let temp = { ...infoForm }
        temp[e.target.name] = e.target.value
        setInfoForm(temp)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        dispatch(createActivity(infoForm))
    }

    function addCountry(e) {
        let temp = { ...infoForm }
        temp.countryName = [...infoForm.countryName, e.target.value];
        e.target.value = '-'
        setInfoForm(temp)
    }





    return (
        <div>
            <div className={s.NavContainer} > 
        <div>
          <Link to="/countries">
            <img
              src="https://i.pinimg.com/originals/b9/93/02/b99302e5e4d36d7a4af5bf6f17583008.png"
              alt="mundo"
              height="60"
              width="60"
            />
          </Link>
        </div>
            </div>
            <div className={s.formContainer}>
                <h3> Create Your Own Activity</h3>
            <form onSubmit={(e) => handleSubmit(e)} autoComplete="off" className={s.FormGrounds}>
                
                    <label>Name</label>
                    <input

                        type="text"
                        autoComplete="false"
                        placeholder="Name your activity"
                        name="name"
                        value={infoForm.name}
                        onChange={e => handleChange(e)}
                       className={s.inputsFields}
                    />
                

                
                    <label>Select difficulty</label>
                    <select
                        className={s.inputsFields}
                        name="difficulty"
                        value={infoForm.difficulty}
                        id="difficulty"
                        onChange={e => handleChange(e)}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                

                
                    <label>Duration in hours</label>
                    <select
                    className={s.inputsFields}
                        name="duration"
                        value={infoForm.duration}
                        id="duration"
                        onChange={e => handleChange(e)}
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
                

                
                    <label>Select season</label>
                    <select 
                    name="season" 
                    value={infoForm.season} 
                    id="season" onChange={e => handleChange(e)} 
                    className={s.inputsFields}
                    >
                        <option value="Autum">Autum</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                    </select>
                

                
                    <label>Select Countries: </label>
                    <select 
                    onChange={e => addCountry(e)}
                    className={s.inputsFields}>
                        <option> - </option>
                        {
                            countries && countries.map(country => {
                                return (<option key={country.name} value={country.name}>{country.name}</option>)
                            })}
                    </select>
                    <div>
                        {
                            infoForm.countryName?.map(country => {
                                return <input value={country} key={country} className={s.inputsFields} />
                            })
                        }
                    </div>
                

                <input type="submit" value="Submit"  className={s.inputButton}/>
            </form>
            </div>

        </div>
    );

}