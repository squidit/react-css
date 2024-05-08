# Menu Options

## Props

### 1. placement

- description: Placemente menu
- type: `'left' | 'right'`

### 2. menuArray

- description: Menu Array, optional. Mount a default menu ite,
- type: `{ label: string; icon?: IconName; iconText?: string; action: () => void }[]`

## Exemple

```tsx
<MenuOptions menuArray={menuActions} />
```
