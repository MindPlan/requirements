// POST request to backend.com/auth/registration

type RegistrationRequest = {
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;
}

// password must contain:
// * letters,
// * one capitalized letter
// * one digit
// * one symbol like #, $ and etc.
// Also, password must be equal repeatPassword

// email must be as email (yeah ahhahahah)
