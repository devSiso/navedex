import { RgxpBrDate } from '@src/utils/regexes';

export const naverRules = {
  name: {
    required: {
      value: true,
      message: 'Por favor, informe seu nome'
    }
  },
  occupation: {
    required: {
      value: true,
      message: 'Por favor, Informe seu cargo'
    }
  },
  birthdate: {
    required: {
      value: true,
      message: 'Por favor, informe sua data de nascimento'
    },
    pattern: {
      value: RgxpBrDate,
      message: 'Informe uma data válida'
    }
  },
  admission_date: {
    required: {
      value: true,
      message: 'Por favor, informe sua data de admissão'
    },
    pattern: {
      value: RgxpBrDate,
      message: 'Informe uma data válida'
    }
  }
}

export default naverRules;
