import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import {postRequest} from "../utils/axios";
import {toast} from "react-toastify";

const ComponentTextArea = () => {
    const [text, setText] = useState("");

    const handleTextChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setText(event.target.value);
    };

    const handleSave = async () => {
        await postRequest("/mechanic/add-about", {
            about: text,
        });
        toast.success('About Added!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, // Auto close after 3 seconds
            theme:"colored"
        });
        setText("")


    };

    return (
        <div
            style={{
                marginTop: "1em",
            }}
        >
            <TextField
                label="Write about myself"
                multiline
                rows={10}
                variant="outlined"
                fullWidth
                value={text}
                onChange={handleTextChange}
            />
            <Button
                variant="contained"
                color="success"
                sx={{
                    marginTop: "1em",
                }}
                onClick={handleSave}
            >
                Save
            </Button>
        </div>
    );
};

export default ComponentTextArea;
