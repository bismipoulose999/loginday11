
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function First() {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={6}>
                <Typography>LOGIN</Typography>
                <TextField
                type="text"
                variant="outlined"
                fullWidth
                required
                label="User Name"
                margin="normal"
                />
                <TextField
                type="password"
                variant="outlined"
                fullWidth
                required
                label="Password"
                margin="normal"
                />
                <Button
                color="primary"
                variant="contained"
                margin="normal"
                type="submit"
                >LOGIN</Button>


            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <Typography>REGISTRATION</Typography>
                <TextField
                type="text"
                variant="outlined"
                fullWidth
                required
                label="User Name"
                margin="normal"
                />
                <TextField
                type="number"
                variant="outlined"
                fullWidth
                required
                label="Age"
                margin="normal"
                />
                <TextField
                type="email"
                variant="outlined"
                fullWidth
                required
                label="Email Id"
                margin="normal"
                />
                <TextField
                type="date"
                variant="outlined"
                fullWidth
                required
                label="DOB"
                margin="normal"
                />
                <TextField
                type="password"
                variant="outlined"
                fullWidth
                required
                label="Password"
                margin="normal"
                />
                <TextField
                type="password"
                variant="outlined"
                fullWidth
                required
                label="Confirm Password"
                margin="normal"
                />
                <Button
                color="primary"
                variant="contained"
                margin="normal"
                type="submit"
                >REGISTER</Button>

            </Grid>

        </Grid>
    )
}
