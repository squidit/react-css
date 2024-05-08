# Input Media

## Props

### 1. label

- description: JSX label for input
- type: `any`

### 2. disabled

- description: Add a class `.disabled` and the atribute `disabled`
- type: `boolean`

### 3. errorSpan

- description: If false don't show errors messagens
- type: `boolean`

### 4. loading

- description: Add a class `.loading` and the loader
- type: `boolean`

### 5. required

- description: The atribute `required`
- type: `boolean`

### 6. externalError

- description: An custom error message, needs errorSpan false to works
- type: `any`

### 7. errorIcon

- description: Custo error icon
- type: `any`

### 8. value

- description: Html value
- type: `any`

### 9. onChange

- description: OnChange event
- type: `() => any`

### 10. onValidate

- description: Return if the field is valid
- type: `() => any`

### 11. maxFileSize

- description: Max file validation in bytes
- type: `number`

### 12. showFileName

- description: Show an block that show the file name
- type: `boolean`

### 13. resolution

- description: Show an message with recommended resolution
- type: `{ width: number height: number }`

## Exemple

```jsx
<InputMediaComponent resolution={{ width: 1920, height: 1080 }} />
```
