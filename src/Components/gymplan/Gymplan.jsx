import React from 'react'
import "./gymplan.css";
import "../DietPlan/dietplan.css"
import GymplanNavbar from "./gymplanNavbar";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PlanAction } from '../../redux/slices/dietPlanSlice';
const Gymplan = () => {
    const [age, setage] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [gender, setgender] = useState();
    const [goal, setgoal] = useState();
    const [TainingSplit, setTrainingSplit] = useState();
    const [duration, setDuration] = useState();
    const [workout, setWorkout] = useState();
    let isImage;

    const dispatch = useDispatch();

    const ageChangeHandler=(e)=>{
        setage(e.target.value);

    }

    const heightChangeHandler=(e)=>{
        setHeight(e.target.value);
    }

    const weightChangeHandler=(e)=>{
        setWeight(e.target.value);
    }

    const genderChangeHandler=(e)=>{
        setgender(e.target.value);

    }

    const goalChangeHandler=(e)=>{
        setgoal(e.target.value);
    }

    const TainingSplitChangeHandler=(e)=>{
        setTrainingSplit(e.target.value);

    }

    const durationChangeHandler=(e)=>{
        setDuration(e.target.value);
    }

    const workoutChangeHandler=(e)=>{
        setWorkout(e.target.value);
    }

    const onGymPlanSubmit=()=>{
        const message = `Make a Gym Plan for a ${gender} aged ${age} years old. Having weight ${weight}Kgs and height ${height}cms. Want to ${goal} with a training split
                            of ${TainingSplit} with a duration of ${duration} at ${workout}.`
        console.log(message);

        dispatch(PlanAction({message}));

    }

    return (
        <div>
            <GymplanNavbar />
            <div className='gymplan-main'>

                <div className='upper-gymplan'>
                    <div className='gymplan-main-heading'>
                        <h1 className='gymplan-heading-para'>Exercise Plan</h1>
                    </div>
                    <div className='description-gymplan'>
                        <p className='gymplan-description-para'>Our app allows you to customize your gym plan based on your specific preferences, needs, and fitness goals. With a few simple steps our expert trainers will create a personalized workout chart that maximizes your potential and helps you achieve your desired results.</p>
                    </div>
                </div>
                <div className='gymplan-lower'>
                    <div className='gymplan-lower-left'>
                        <h3 className='gymplan-lower-left-heading'>About You ...</h3>
                        <div className='input-fields-dietplan'>
                            <select id="Gender"  value={gender}  onChange={genderChangeHandler}  name="Gender" className='input-fields-dietplan-item'>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className='input-fields-dietplan'>
                            <input type="number" onChange={ageChangeHandler}  value={age} placeholder='Age' className='input-fields-dietplan-item' />
                        </div>
                        <div className='input-fields-dietplan'>
                            <input type="number" onChange={heightChangeHandler} value={height}className='input-fields-dietplan-item' placeholder='Height' />
                        </div>
                        <div className='input-fields-dietplan'>
                            <input type="number" onChange={weightChangeHandler} value={weight}  placeholder='Weight' className='input-fields-dietplan-item' />
                        </div>
                    </div>
                    <div className='gymplan-lower-right'>
                        <h3 className='gymplan-lower-right-heading'>Customize it!</h3>
                        <div className='input-fields-dietplan'>
                            <select name="Your Goals"  onChange={goalChangeHandler} value={goal} className='input-fields-dietplan-item'>
    
                                <option value="Loose Weight">Loose Weight</option>
                                <option value="Maintain Weight">Maintain Weight</option>
                                <option value="Gain Weight">Gain Weight</option>
                            </select>
                        </div>
                        <div className='input-fields-dietplan'>
                            <select name="TainingSplit"onChange={TainingSplitChangeHandler}  value={TainingSplit} className='input-fields-dietplan-item'>

                                <option value="Push-Pull-leg">Push-Pull-leg</option>
                                <option value="Lower-Upper-split">Lower-Upper-split</option>
                                <option value="Body-part-split">Body-part-split</option>
                            </select>
                        </div>
                        <div className='input-fields-dietplan'>
                            <select name="Duration"  onChange={durationChangeHandler} value={duration}className='input-fields-dietplan-item'>
                    
                                <option value="45 min">45 Minutes</option>
                                <option value="1hr+">1 hour+</option>
                                <option value="1.5hr+">1.5hourr+</option>
                            </select>
                        </div>
                        <div className='input-fields-dietplan'>
                            <select name="Workout" onChange={workoutChangeHandler} value={workout} className='input-fields-dietplan-item'>
                    
                                <option value="Gym Workout"> Gym Workout</option>
                                <option value="Home Workout"> Home Workout</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='gymplan-div-button'>
                <button className='gymplan-ac-button' onClick={onGymPlanSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Gymplan