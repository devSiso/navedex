import { RgxpEmail } from '@src/utils/regexes'

export const loginFormRules = {
  mail: {
    pattern: {
      value: RgxpEmail,
      message: "Insira um e-mail válido"
    },
    required: {
      value: true,
      message: "Por favor, insira seu e-mail"
    }
  },
  password: {
    required: {
      value: true,
      message: "Por favor, insira sua senha"
    }
  }
}

export default loginFormRules;
