import React from 'react';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'

function CountrySelector({ value, handleOnchange, countries }) {
    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="country-selector" shrink >Quốc gia</InputLabel>
                <NativeSelect
                    value={value}
                    onChange={handleOnchange}
                    inputProps={
                        {
                            name: 'country',
                            id: 'country-selector'
                        }
                    }
                >
                    {countries.map(country => 
                        <option key={country.Country} value={country.ISO2.toLowerCase()}>{country.Country}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountrySelector;