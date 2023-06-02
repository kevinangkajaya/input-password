import React from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button, Form, FormControlProps, InputGroup } from "react-bootstrap"
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const InputPassword = (props: FormControlProps) => {
    const [type, set_type] = useState('password')

    const getIcon = () => {
        if (type === 'password') return faEyeSlash
        else if (type === 'text') return faEye
    }

    const changeType = () => {
        if (type === 'password') set_type('text')
        else if (type === 'text') set_type('password')
    }

    return (
        <InputGroup>
            <Form.Control {...props} type={type} />
            <Button tabIndex={-1} variant="outline-secondary" onClick={changeType}>
                <FontAwesomeIcon icon={getIcon() as IconProp} />
            </Button>

        </InputGroup>
    )
};

export default InputPassword