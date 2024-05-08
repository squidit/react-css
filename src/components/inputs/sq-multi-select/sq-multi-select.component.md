# MultiSelect Component

## Props

### 1. options

- description: List of available options to choose from
- type: `Option[]`

### 2. label

- description: Label Input
- type: `string`

### 3. externalError

- description: An external Error pass to te component
- type: `string`

### 4. leftLabel

- description: leftLabel input style
- type: `string`

### 5. rightLabel

- description: rightLabel input style
- type: `string`

### 6. id

- description: id HTML
- type: `string`

### 7. name

- description: name HTML
- type: `string`

### 8. placeholder

- description: Placeholder Input
- type: `string`

### 9. autoComplete

- description: autocomplete HTML atribute
- type: `string`

### 10. loading

- description: Add a class `.loading` and add a loader icon, also add `.readonly` class
- type: `boolean`

### 11. externalIcon

- description: An icon to add on right side
- type: `any`

### 12. errorSpan

- description: Show the erroSpan after the input
- type: `boolean`
- default: `true`

### 13. required

- description: Add a atribute `required`
- type: `boolean`

### 14. requiredOnLoad

- description: Shows the alert message when loading the component stating that filling is mandatory
- type: `boolean`

### 15. errorIcon

- description: Sets the error icon
- type: `any`

### 16. disabled

- description: Add a class `.disabled` and the atribute `disabled`
- type: `boolean`

### 17. backgroundColor

- description: Change background input color
- type: `string`

### 18. maxSelectedOptions

- description: Defines the amount of options the user can select
- type: `string`

### 19. value

- description: Value Input
- type: `number | string`

### 20. onChange

- description: A function that returns the value state
- type: `(event: any) => any`

### 21. onValidate

- description: A function that returns if the input is valid
- type: `(event: any) => any`

## Example

```jsx
<MultiSelect
  label={'Se você possui filhos, selecione as faixas de idade dos seus filhos?'}
  options={[
    { id: 1, label: '0 a 1 anos de idade' },
    { id: 2, label: '2 a 3 anos de idade' },
    { id: 3, label: '4 a 7 anos de idade' },
    { id: 4, label: '8 a 11 anos de idade' },
    { id: 5, label: '12 a 14 anos de idade' },
    { id: 6, label: '15 a 17 anos de idade' },
    { id: 7, label: 'Acima de 18 anos de idade' },
  ]}
  value={selectWithTags}
  onChange={(value) => setSelectWithTags(value)}
  maxSelectedOptions={2}
  required
  requiredOnLoad
/>
```
