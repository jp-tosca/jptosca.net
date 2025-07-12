import { Typography } from '@mui/material';


export default function MuiTypography() {
    return (
        <div>
            <Typography variant='h1'>H1 Heading</Typography>
            <Typography variant='h2'>H2 Heading</Typography>
            <Typography variant='h3'>H3 Heading</Typography>
            <Typography variant='h4'>H4 Heading</Typography>
            <Typography variant='h5'>H5 Heading</Typography>
            <Typography variant='h6' gutterBottom>H6 Heading</Typography>

            <Typography variant='subtitle1'>S1</Typography>
            <Typography variant='subtitle2'>S2</Typography>

            <Typography variant='body1'>BODY</Typography>
            <Typography variant='body2'>BODY</Typography>
        
        </div>
    );
}