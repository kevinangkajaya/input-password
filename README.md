# Input Password
### Introduction
Create password input with show/hide button.

### Installing as a package
`npm install @kevinangkajaya/input-password`.

### Usage
```
import { InputPassword } from "@kevinangkajaya/input-password"

return(
    <InputPassword className="form-control" value={password} id="password"
        onChange={(e) => set_password(e.target.value)} />
)
```

### Props 
Refer to <input type="password" /> for the props.

### Return Value
JSX Component