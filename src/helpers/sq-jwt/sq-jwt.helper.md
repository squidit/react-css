# JwtHelper Class

A utility class for handling JSON Web Tokens (JWT).

## Description

`JwtHelper` is a utility class that provides methods for decoding and verifying JWT tokens.

## Methods

### `getPayloadToken(token: string): any`

Decodes the payload of a JWT token.

- `token`: The JWT token to decode.
- Returns: The payload of the JWT token as an object.

### `verifyExpirationToken(token: string): boolean`

Verifies if a JWT token has expired.

- `token`: The JWT token to verify.
- Returns: `true` if the token is expired or if no token is provided, `false` otherwise.

## Example Usage

```typescript
import JwtHelper from './JwtHelper'; // Assuming the class is in a file named JwtHelper.js

// Create an instance of JwtHelper
const jwtHelper = new JwtHelper();

// Decode the payload of a JWT token
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyMzkwMjJ9.qVf5bXeqA0kU_bfLFa7aRwGOzcQ5pK7g0iJhOXMpGos';
const payload = jwtHelper.getPayloadToken(token);
console.log('Decoded Payload:', payload);

// Verify if a JWT token has expired
const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyMzkwMjJ9.qVf5bXeqA0kU_bfLFa7aRwGOzcQ5pK7g0iJhOXMpGos';
const isExpired = jwtHelper.verifyExpirationToken(expiredToken);
console.log('Is Token Expired:', isExpired);
```
