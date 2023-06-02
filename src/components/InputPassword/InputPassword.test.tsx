import React, { useState } from "react";
import { fireEvent, render } from "@testing-library/react";
import InputPassword from "./InputPassword";

function InputPasswordTest() {
    const [password, set_password] = useState('')

    return <InputPassword className="form-control" value={password} id="password"
        onChange={(e) => set_password(e.target.value)} />
}

const setup = () => {
    const utils = render(<InputPasswordTest />)
    const input = document.getElementById('password') as HTMLInputElement
    return {
        input,
        ...utils,
    }
}

describe("Input Password", () => {
    test("renders the Input Password component and on change", () => {

        const { input } = setup()
        fireEvent.change(input, { target: { value: 'password after changed' } })
        expect(input.value).toBe('password after changed')
    });
});