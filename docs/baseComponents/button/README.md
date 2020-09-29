# Button

### Install

```js
import Vue from 'vue';
import { Button } from 'gwi-vui';

Vue.use(Button);
```

## Usage

### Type

```html
<gwi-button type="default">Default</gwi-button>
<gwi-button type="primary">Primary</gwi-button>
<gwi-button type="info">Info</gwi-button>
<gwi-button type="danger">Danger</gwi-button>
<gwi-button type="warning">Warning</gwi-button>
```

### Plain

```html
<gwi-button plain type="primary">Primary</gwi-button>
<gwi-button plain type="info">Danger</gwi-button>
```

### Hairline

```html
<gwi-button plain hairline type="primary">Hairline</gwi-button>
<gwi-button plain hairline type="info">Hairline</gwi-button>
```

### Disabled

```html
<gwi-button disabled type="primary">Diabled</gwi-button>
<gwi-button disabled type="info">Diabled</gwi-button>
```

### Loading

```html
<gwi-button loading type="primary" />
<gwi-button loading type="primary" loading-type="spinner" />
<gwi-button loading type="info" loading-text="Loading..." />
```

### Shape

```html
<gwi-button square type="primary">Square</gwi-button>
<gwi-button round type="info">Round</gwi-button>
```

### Icon

```html
<gwi-button icon="star-o" type="primary" />
<gwi-button icon="star-o" type="primary">Button</gwi-button>
<gwi-button icon="https://img.yzcdn.cn/gwit/logo.png" type="info"
  >Button</gwi-button
>
```

### Size

```html
<gwi-button type="primary" size="large">Large</gwi-button>
<gwi-button type="primary" size="normal">Normal</gwi-button>
<gwi-button type="primary" size="small">Small</gwi-button>
<gwi-button type="primary" size="mini">Mini</gwi-button>
```

### Block Element

```html
<gwi-button type="primary" block>Block Element</gwi-button>
```

### Route

```html
<gwi-button type="primary" url="/gwit/mobile.html">URL</gwi-button>
<gwi-button type="primary" to="index">Vue Router</gwi-button>
```

### Custom Color

```html
<gwi-button color="#7232dd">Pure</gwi-button>
<gwi-button color="#7232dd" plain>Pure</gwi-button>
<gwi-button color="linear-gradient(to right, #4bb0ff, #6149f6)"
  >Gradient</gwi-button
>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `info` `warning` `danger` | _string_ | `default` |
| size | Can be set to `large` `small` `mini` | _string_ | `normal` |
| text | Text | _string_ | - |
| color `v2.1.8` | Color, support linear-gradient | _string_ | - |
| icon | Left Icon | _string_ | - |
| icon-prefix `v2.6.0` | Icon className prefix | _string_ | `gwi-icon` |
| tag | HTML Tag | _string_ | `button` |
| native-type | Native Type Attribute | _string_ | `''` |
| plain | Whether to be plain button | _boolean_ | `false` |
| block | Whether to set display block | _boolean_ | `false` |
| round | Whether to be round button | _boolean_ | `false` |
| square | Whether to be square button | _boolean_ | `false` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether show loading status | _boolean_ | `false` |
| loading-text | Loading text | _string_ | - |
| loading-type | Loading type, can be set to `spinner` | _string_ | `circular` |
| loading-size | Loading icon size | _string_ | `20px` |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when click button and not disabled or loading | _event: Event_ |
| touchstart | Triggered when touch start | _event: TouchEvent_ |
