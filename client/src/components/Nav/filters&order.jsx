import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  orderByAz,
  orderByZa,
  orderByMayToMen,
  orderByMenToMay,
  getAll,
  filterByContinent,
  filterByActivity,
  getAct,
} from "../../actions/actions";
import s from "./nav.module.css";

export default function FiltersOrder() {
  const dispatch = useDispatch();

  const allAct = useSelector((state) => state.actLoaded);

  const [order, setOrder] = useState("");
  const [continent, setContinent] = useState("");
  const [activities, setActivities] = useState("");

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handleFilterChange = (e) => {
    setContinent(e.target.value);
  };

  const handleFilterActChange = (e) => {
    setActivities(e.target.value);
  };

  useEffect(() => {
    if (order === "A-Z") dispatch(orderByAz());
    else if (order === "Z-A") dispatch(orderByZa());
    else if (order === "MayToMen") dispatch(orderByMayToMen());
    else if (order === "MenToMAy") dispatch(orderByMenToMay());
  }, [dispatch, order]);

  useEffect(() => {
    if (continent === "-") dispatch(getAll());
    else if (continent !== "-") dispatch(filterByContinent(continent));
  }, [dispatch, continent]);

  useEffect(() => {
    if (activities === "-") dispatch(getAll());
    else if (activities !== "-") dispatch(filterByActivity(activities));
  }, [dispatch, activities]);

  useEffect(() => {
    dispatch(getAct());
  }, [dispatch, activities]);

  return (
    <div className={s.FiltersContainer}>
      <div>
        <select onChange={(e) => handleOrderChange(e)}>
          <option> Alphabetical order </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleOrderChange(e)}>
          <option> Order by population </option>
          <option value="MayToMen">MayToMen</option>
          <option value="MenToMAy">MenToMAy</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleFilterChange(e)}>
          <option value="-"> Continent</option>
          <option value="Americas"> Americas</option>
          <option value="Europe"> Europe</option>
          <option value="Africa"> Africa</option>
          <option value="Oceania"> Oceania</option>
          <option value="Asia"> Asia</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleFilterActChange(e)}>
          <option value="-"> Activities</option>
          {allAct &&
            allAct.map((activity) => {
              return (
                <option key={activity.name} value={activity.name}>
                  {activity.name}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}
