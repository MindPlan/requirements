# Authorization

## Auth flow
<procedure>
<step>Registration</step>
<step>Email confirmation</step>
<step>Login</step>
</procedure>

If user has not confirmed its account and trying to sign in,
then user will see text like:
"You have to confirm you account. Go to your email box and find confirmation link"

### Register Req/Res Types
<tabs>
  <tab title="Request (TypeScript)">
    <code-block lang="typescript" src="../codeSnippets/register-request.type.ts" />
  </tab>

  <tab title="Response (No body - just HTTP status)">
    <code-block lang="http" src="../codeSnippets/register-response.http" />
  </tab>
</tabs>

Then user must activate its account by clicking on confirmation link in a mail from backend.
<br />
I want to propose this url:
<br />
<code>http://backend.com/auth/confirm-account?token=its-access-token-1231123</code>
<br />
This is just GET request to <code>/auth/confirm</code> endpoint with **?token** query.

If confirming was successful, then we need to redirect user to <code>frontend.com/login</code> (just ask Oleksandr Shtonda about some HTML/JS code for redirecting).

### Login Req/Res Types
<tabs>
  <tab title="Request (TypeScript)">
    <code-block lang="typescript" src="../codeSnippets/login-request.type.ts" />
  </tab>

  <tab title="Response (TypeScript)">
    <code-block lang="typescript" src="../codeSnippets/login-response.type.ts" />
  </tab>
</tabs>

The user must be able to sign in ONLY AFTER account confirmation, otherwise we need to send mail to its e-mail again. Frontend must show info about this.
<br />Also, we need GET endpoint <code>backend.com/auth/me</code> to get ability to user to request info about him. <br />
Backend should take accessToken from HTTP header <code>Authorization</code>, decode it, get e-mail from this one, find user in DB and return info.
