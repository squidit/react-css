# InputPhone

## Props

### 1. value

- description: Value Phone Input
- type: `string`

### 2. externalError

- description: An external Error pass to te component
- type: `string`

### 3. required

- description: Add a atribute `required`
- type: `boolean`

### 4. type

- description: Input HTML Type.
- type: `'tel'`

### 5. className

- description: Component Class
- type: `string`

### 6. label

- description: Label Phone
- type: `string`

### 7. id

- description: id HTML
- type: `string`

### 8. leftLabel

- description: leftLabel input style
- type: `string`

### 9. rightLabel

- description: rightLabel input style
- type: `string`

### 10. loading

- description: Add a class `.loading` and add a loader icon, also add `.readonly` class
- type: `boolean`

### 11. externalIcon

- description: An icon to add on right side
- type: `any`

### 12. errorSpan

- description: Show the erroSpan after the input phone
- type: `boolean`
- default: `true`

### 13. maxLength

- description: Add a atribute `maxLenght` and add a counter on input phone
- type: `number`

### 14. placeholder

- description: Placeholder Input Phone
- type: `string`

### 15. disabled

- description: Add a class `.disabled` and the atribute `disabled`
- type: `boolean`

### 16. backgroundColor

- description: Change background input color
- type: `string`

### 17. onChange

- description: A function that returns the value state
- type: `(event: any) => any`

### 18. onValidate

- description: A function that returns if the input is valid
- type: `(event: any) => any`

### 19. onTimeout

- description: Adds a time for the action to run
- type: `Function`

## Example

```jsx
<InputPhone
  label="Phone Number"
  value={register.phone}
  name="register-phone"
  id="register-phone"
  className="mb-3"
  placeholder="XX XXXX - XXXX"
  onChange={(phone: string) => setRegister((prevRegister) => ({ ...prevRegister, phone }))}
  onValidate={(phone: boolean) => setValidation((prevValidation) => ({ ...prevValidation, phone }))}
  required
/>
```
