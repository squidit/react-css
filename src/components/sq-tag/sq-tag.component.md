# Tag

## Props

### 1. icon

- description: Icon that should appear in the tag
- type: `any`

### 2. labels

- description: Label or list of labels that should appear in the tag
- type: `any`

### 3. separator

- description: Dash separating labels
- type: `boolean`

## Example

```jsx
<Tag
  icon={<i className="fa-regular fa-camera-retro"></i>}
  labels={['test 1', <span className="text-bold">test 2</span>, 'test 3']}
  separator
/>
```
