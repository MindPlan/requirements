# Authorization via Google e-mail

Also, the user must be able to sign in/sign up using Google auth. 
In the [classic auth](authorization.md) we know, that we need to check, that user's e-mail is exist and the e-mail really belongs to the user, but in this situation, Google auth handle these tasks, so we do not need to do it ourselves.

## Registration flow
<procedure>
  <step>The user clicks the Google button</step>
  <step>The modal window by google with e-mails is shown. The user chooses e-mail</step>
  <step>If account with this e-mail is already exists, we need to show info about it</step>
  <step>Otherwise, the account is creating and we redirect user to dashboard page</step>
</procedure>

## Login flow
<procedure>
  <step>The user clicks the Google button</step>
  <step>The modal window by google with e-mails is shown. The user chooses e-mail</step>
  <step>If account with this e-mail does not exist, we need to show info about it</step>
  <step>Otherwise, we redirect user to dashboard page</step>
</procedure>

## Info for devs - auth types (req/res)
Types for registration and login are similar, so:

<tabs>
  <tab title="Request">
    <code-block lang="http request">
      GET /api/user/google HTTP/1.1
      Host: example.com
      Authorization: Bearer abc123xyz1-google-jwt...
    </code-block>
  </tab>

  <tab title="Response">
    If this is registration
    <code-block lang="http">
      HTTP/1.1 201 Created
      Date: Wed, 08 Jan 2025 12:00:00 GMT
    </code-block>
    <br />
    If this is logining
    <code-block lang="http">
      HTTP/1.1 200 Success
      Date: Wed, 08 Jan 2025 12:00:00 GMT
    </code-block>
    <br />
    <code-block lang="typescript" src="auth-via-google-response.type.ts" />
  </tab>
</tabs>

Explanation: the frontend does auth via Google API and gets google-jwt.
Then frontend sends HTTP GET request to the backend, backend decodes google-jwt and extracts info from [payload](https://developers.google.com/identity/gsi/web/reference/js-reference#credential) <br />
The email, name, picture, given_name, family_name fields are needs for auth.

