import {Button} from "@mui/material";

const MainButton = () => {
 return (
        <Button
            variant="contained"
            href="/"
            sx={{
                backgroundColor: '#1f2937',
                '&:hover': { backgroundColor: '#5a5dd8' },
                padding: '12px 24px',
                fontSize: '1.25rem',
            }}
        >
            Show More
        </Button>
    );
}

export default MainButton;