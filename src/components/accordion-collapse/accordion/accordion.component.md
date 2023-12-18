# Accordion

## Props

### 1. children

- description: List Collapse content
- type: `Array<Collapse>`

### 2. onlyOne

- description: Boolean open one only
- type: `boolean`
- default: `false`

### 3. openFirst

- description: Boolean open first
- type: `boolean`
- default: `false`

### 4. containerCollapseClass

- description: Class style content accordion list
- type: `string`

## Example

```jsx
<Accordion onlyOne={true}>
  <Collapse open={false} title="Title 1">
    Content HTML
  </Collapse>
  <Collapse open={false} title={<span>teste</span>}>
    Content HTML
  </Collapse>
  <Collapse open={false} title="Title 3">
    Content HTML
  </Collapse>
</Accordion>
```
