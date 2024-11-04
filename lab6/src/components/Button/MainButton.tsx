import {Button} from "@mui/material";

interface MainButtonProps {
    text:string,
    buttonClassName?: string

}
const MainButton = (props: MainButtonProps) => {

 return (
        <Button
         className={props?.buttonClassName || ""}
            variant="contained"
            href="/"
            sx={{
                backgroundColor: '#1f2937',
                '&:hover': { backgroundColor: '#5a5dd8' },
                padding: '12px 24px',
                fontSize: '1.25rem',
            }}
        >
            {props.text}
        </Button>
    );
}

export default MainButton;