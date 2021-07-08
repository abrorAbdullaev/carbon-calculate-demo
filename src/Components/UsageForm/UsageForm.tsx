import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Select, Grid } from '@material-ui/core';

import { UserElectricityMetrics } from 'src/Models';
import { supportedCountries } from 'src/Utils/Carbon';

/**
 * @TODO Ignore TAB Key Press as it causes weird behavior of the slick slider
 */
export const UsageForm: React.FC<Props> = ({location, usage, date, handleFormChange}) => {
  return (
    <form>
      <Grid container>
        <Grid item xs={4} spacing={1}>
          <FormControl>
            <InputLabel htmlFor="location">Location</InputLabel>
            <Select aria-describedby="user's location" native value={location} onChange={({ target }) => handleFormChange(date, 'location', target.value as string)}>
              <option aria-label="None" value="" />
              {
                supportedCountries.map((country, ind) => 
                  <option key={ind} value={country.toLowerCase()}>{country}</option>
                )
              }
            </Select>
            <FormHelperText id="Your Location">Your Current Location</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl>
            <InputLabel htmlFor="location">Electricity Usage</InputLabel> 
            <Input 
              aria-describedby="user's location" 
              type="number" 
              value={!!usage ? usage : ''}
              // Using only decimal numbers as per the requirements though would be good to test and enable float values for API requests
              onChange={({ target }) => { handleFormChange(date, 'usage', parseInt(target.value, 10) >= 0 ? Math.round(parseInt(target.value, 10)) : 0)}}
            />
            <FormHelperText id="Your Location">Calcualted in MWH</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}

interface Props extends UserElectricityMetrics {
  handleFormChange: (date: Date, field: keyof UserElectricityMetrics, value: string | number) => void;
}
