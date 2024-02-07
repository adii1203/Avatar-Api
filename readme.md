# Avatar Generation Service

Welcome to the Avatar Generation Service! This service allows you to generate avatar images with various styles, including avatars with the first letter of a name and gradient avatars.

## Features

- Generate avatar images with first letter of a name.

- Generate gradient avatar images.

- Customize the `background_color`, `font_color` and `font_weight` of the avatar image.

- API endpoints to easily integrate avatar generation into your applications.

- Support `png`, `jpeg` and `webp` formats.

## Uses

### Generate Avatar with First Letter

![named avatar](./public/withName.png)

```javascript
// Base url
GET v1/avatar/t/d?name=aditya

// with query
v1/avatar/t/d?name=aditya&background_color=0000FF&font_color=000
```

This will return a PNG image with the first letter `A` as the avatar.

### Possiable query

| Queries            | require | Default | expected values            |
| ------------------ | ------- | ------- | -------------------------- |
| `name`             | `true`  |         |                            |
| `background_color` | `false` | `000`   | hex color code without `#` |
| `fornt_color`      | `false` | `fff`   | hex color code without `#` |
| `is_bold`          | `false` | `false` | `true` , `false`           |
| `is_uppercase`     | `false` | `true`  | `true` , `false`           |
| `format`           | `false` | `png`   | `png` , `webp` , `jpeg`    |

### Generate Avatar with gradients

![gradient avatar](./public/gradient.png)

```javascript
// Base url
GET v1/avatar/t/g

// with query
v1/avatar/t/g?index=45&format=webp
```

### Possiable query

| Queries  | require | Default | expected values         |
| -------- | ------- | ------- | ----------------------- |
| `index`  | `false` |         | `0` - `180`             |
| `format` | `false` | `png`   | `png` , `webp` , `jpeg` |

without index it returns random avatar for every subsequent request.
