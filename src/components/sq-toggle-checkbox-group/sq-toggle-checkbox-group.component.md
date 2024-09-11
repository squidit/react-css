# Toggle Checkbox Group


## Props

### 1. defaultValue

- description: Value selected
- type: `string`

### 2. contentList

- description: List options group
- type: `OptionList`

### 3. colorSelector

- description: Background color for button active
- type: `string`

### 4. name

- description: Input name
- type: `string`

### 4. onChange

- description: Function action change toggle options
- type: `function`

## Exemple

```html
<ToggleCheckboxGroup
  defaultValue="posts"
  contentList={[
  {
    id: '1',
    value: 'posts',
    label: 'Posts',
  }
  ]}
  name={'toggle-checkbox-group'}
  colorSelector="var(--aqua-40)"
  onChange={() => {}}
```
