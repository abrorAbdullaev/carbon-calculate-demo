import React, { useContext } from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

import './datePicker.scss';
import { AppActionType, AppContext } from 'src/Store';
import { UsageForm } from 'src/Components';
import { getDayName, getMonthName } from 'src/Utils/Date';
import { UserElectricityMetrics } from 'src/Models';

export const DatePicker: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleUserDataChange: (date: Date, field: keyof UserElectricityMetrics, value: string | number) => any = (date, field, value) => {
    dispatch({
      type: AppActionType.UpdateUserData,
      payload: {date, field, value}
    })
  }

  const customDotsRenderer: (i: number) => JSX.Element = (i) => <button className={`${!state.data[i].location || !state.data[i].usage ? 'unfilled' : 'filled'}`}>{i}</button>;

  return (  
    <div className="date-picker-component content">
      <Typography gutterBottom variant="h4" component="h2" >
        Fill Your Electricity Usage Data
      </Typography>
      <div className="slider-container">
        <Slider infinite={false} slidesToShow={1} dots customPaging={customDotsRenderer} >
          {
            state.data.map((userData, ind) => 
            <div className="card-container" key={ind}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h3">
                    {getMonthName(userData.date.getMonth())} {userData.date.getDate()}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h3">
                    {getDayName(userData.date.getDay())}
                  </Typography>
                  <Divider style={{ margin: '20px 0' }} />
                  <UsageForm {...userData} handleFormChange={handleUserDataChange} />
                </CardContent>
              </Card>
            </div>
            )
          }
        </Slider>
      </div>  
    </div>
  );
}
