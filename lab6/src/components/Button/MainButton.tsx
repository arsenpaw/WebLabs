import {Button} from "@mui/material";

interface MainButtonProps {
    text:string,
    buttonClassName?: string,
    onClick: () => void

}
const MainButton = ({buttonClassName,onClick, text}: MainButtonProps) => {

 return (
        <Button
         className={buttonClassName || ""}
         onClick={onClick}
            variant="contained"
            sx={{
                backgroundColor: '#1f2937',
                '&:hover': { backgroundColor: '#5a5dd8' },
                padding: '12px 24px',
                fontSize: '1.25rem',
            }}
        >
            {text}
        </Button>
    );
}

export default MainButton;