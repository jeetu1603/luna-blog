**auth Route**
| Endpoint | Method | Description |
|--------------------|--------|---------------|
| /api/auth/register | POST | create a user |
| /api/auth/login | POST | login a user |
| /api/auth/logout | POST | logout a user |

**posts Route**
| Endpoint | Method | Description |
|----------------------------------|--------|----------------------------------------------|
| /api/posts/<br>/api/posts?cat=[] | GET | get all posts<br>get all posts of a category |
| /api/posts/:postId | GET | get a single post |
| /api/posts/ | POST | create a post |
| /api/posts/:postId | DELETE | delete a post |
| /api/posts/:postId | PUT | update a post |
