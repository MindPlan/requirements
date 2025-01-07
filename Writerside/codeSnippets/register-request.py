class RegisterRequest:
  def __init__(self, name: str, surname: str, email: str, password: str, repeat_password: str):
      self.name = name
      self.surname = surname
      self.email = email
      self.password = password
      self.repeat_password = repeat_password