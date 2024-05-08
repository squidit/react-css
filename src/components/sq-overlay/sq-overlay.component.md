# Overlay

## Props

### 1. overlayClass

- description: Add class to Overlay window
- type: `string`

### 4. buttonClose

- description: Show or hidden button close
- type: `boolean`

### 5. backdrop

- description: enable click on backdrop to close Overlay
- type: `'static' | 'cliclable'`

### 6. open

- description: Open Overlay
- type: `boolean`

### 7. header

- description: HTML or JSX to header render
- type: `any`

### 8. footer

- description: HTML or JSX to footer render
- type: `any`

### 9. onCloseChange

- description: Functon when Overlay is close
- type: `() => any | void`

### 10. onOpenChange

- description: Function to toggle Open variable
- type: `open: boolean) => any | void`

### 11. onLeftPress

- description: Function on left keyboard press
- type: `() => any | void`

### 12. onRightPress

- description: Function on right keyboard press
- type: `() => any | void`

### 13. width

- description: Overlay width rule
- type: `string`

### 14. maxWidth

- description: Overlay maxWidth rule
- type: `string`

### 15. headerColor

- description: Change header color
- type: `string`

### 16. footerColor

- description: Change footer color
- type: `string`

### 17. bodyColor

- description: Change body color
- type: `string`

### 18. backdropColor

- description: Change backdrop color
- type: `string`

### 19. borderless

- description: Remove border from footer and header
- type: `boolean`

### 20. overlayDirection

- description: Direction to open overlay
- type: type: `'right' | 'left'`

### 21. headerHeight

- description: Header height rule
- type: type: `string`

## Exemple

```jsx
<Overlay open={open} onOpenChange={(open: boolean) => setOpen(open)}>
  Body
</Overlay>
```
