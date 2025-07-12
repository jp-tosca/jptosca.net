import { Stack, Button, IconButton, ButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function MuiButton() {
    
    
    return (
        <Stack spacing={2} >
        <Stack spacing={2} direction="column">
            <Button variant="text">Text Button</Button>
            <Button variant="outlined">Outlined Button</Button>
            <Button variant="contained">Contained Button</Button>
        </Stack>
        
        <Stack display="" spacing={2} direction="row" >
            <Button variant="contained" color="primary" disableRipple >Primary Button</Button>
            <Button variant="contained" color="secondary" disableElevation>Secondary Button</Button>
            <Button variant="contained" color="error">Secondary Button</Button>
            <Button variant="contained" color="warning">Secondary Button</Button>
            <Button variant="contained" color="info">Secondary Button</Button>
            <Button variant="contained" color="success" startIcon={<SendIcon />} endIcon={<SendIcon />}>Secondary Button</Button>
            
        </Stack>
        <Stack spacing={4} direction="row">
            <IconButton color="primary" aria-label="send">
                <SendIcon />
            </IconButton>
        </Stack>

        <Stack spacing={2} direction="row">
            <ButtonGroup>
                <Button variant="contained" color="primary" size="small">Left</Button>
                <Button variant="contained" color="primary" size="small">Center</Button>
                <Button variant="contained" color="primary" size="small">Right</Button>
            </ButtonGroup>
        </Stack>


        </Stack>
        
    );
}