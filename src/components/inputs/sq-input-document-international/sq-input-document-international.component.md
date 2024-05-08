# Input

## Props

### 1. disabled

- description: Add a class `.disabled` and the atribute `disabled`
- type: `boolean`

### 2. readOnly

- description: Add a class `.readony` and the atribute `readony`
- type: `boolean`

### 3. type

- description: Input HTML Type.
- type: `'date' | 'month'`

### 4. value

- description: Value Input
- type: `number | string`

### 5. placeholder

- description: Placeholder Input
- type: `string`

### 6. label

- description: Label Input
- type: `string`

### 7. leftLabel

- description: leftLabel input style
- type: `string`

### 8. rightLabel

- description: rightLabel input style
- type: `string`

### 9. id

- description: id HTML
- type: `string`

### 10. name

- description: name HTML
- type: `string`

### 11. required

- description: Add a atribute `required`
- type: `boolean`

### 12. backgroundColor

- description: Change background input color
- type: `string`

### 13. externalError

- description: An external Error pass to te component
- type: `string`

### 14. externalIcon

- description: An icon to add on right side
- type: `any`

### 15. errorSpan

- description: Show the erroSpan after the input
- type: `boolean`
- default: `true`

### 16. onChange

- description: A function that returns the value state
- type: `(event: any) => any`

### 17. onValidate

- description: A function that returns if the input is valid
- type: `(event: any) => any`

### 17. country

- description: To pass country value to request
- type: `string`

### 18. onTimeout

- description: Adds a time for the action to run
- type: `Function`

## Example

```jsx
<InputDocumentInternational label="rut" name="input-rut" id="input-rut" onChange={(rut: string) => setRut(setMaskRut(rut))} value={cpf} />
```
