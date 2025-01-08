// Additionally, must be this HTTP Header:
// { "Authorization": "Bearer access-token" }

type ResetPasswordProvidingCodeRequest = {
  password: string;
}

// password must contain:
// * letters,
// * one capitalized letter
// * one digit
// * one symbol like #, $ and etc.
