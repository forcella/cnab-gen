import CampoRegistro from './CampoRegistro'

const geraRegistroA = () => (
  {
    type: 'A',
    text: 'HEADER - DÉBITO AUTOMÁTICO E FOLHA DE PAGAMENTO',
    data: [
      new CampoRegistro({ id: 'A01', inicio: 1, fim: 1, valor: 'A', tipo: 'title', label: 'Código do Registro' }),
      new CampoRegistro({ id: 'A02', inicio: 2, fim: 2, valor: '', tipo: 'number', label: 'Código Remessa' }),
      new CampoRegistro({ id: 'A03', inicio: 3, fim: 22, valor: '', tipo: 'number', label: 'Código Convênio' }),
      new CampoRegistro({ id: 'A04', inicio: 23, fim: 42, valor: '', tipo: 'text', label: 'Nome Destinatário' }),
      new CampoRegistro({ id: 'A05', inicio: 43, fim: 45, valor: '', tipo: 'number', label: 'Código Depositaria' }),
      new CampoRegistro({ id: 'A06', inicio: 46, fim: 65, valor: '', tipo: 'text', label: 'Nome Depositaria' }),
      new CampoRegistro({ id: 'A07', inicio: 66, fim: 73, valor: '', tipo: 'date', label: 'Data de Geração' }),
      new CampoRegistro({ id: 'A08', inicio: 74, fim: 79, valor: '', tipo: 'number', label: 'Número NSA' }),
      new CampoRegistro({ id: 'A09', inicio: 80, fim: 81, valor: '', tipo: 'text', label: 'Versão Layout' }),
      new CampoRegistro({ id: 'A10', inicio: 82, fim: 98, valor: 'DÉBITO AUTOMÁTICO', tipo: 'text', label: 'ID Serviço', disabled: true })
    ]
  }
)

const geraRegistroB = () => (
  {
    type: 'B',
    text: 'DÉBITO AUTOMÁTICO',
    data: [
      new CampoRegistro({ id: 'B01', inicio: 1, fim: 1, valor: 'B', tipo: 'title', label: 'Código do Registro' }),
      new CampoRegistro({ id: 'B02', inicio: 2, fim: 26, valor: '', tipo: 'text', label: 'ID cliente Empresa' }),
      new CampoRegistro({ id: 'B03', inicio: 27, fim: 30, valor: '', tipo: 'number', label: 'Agência para Débito' }),
      new CampoRegistro({ id: 'B04', inicio: 31, fim: 50, valor: '', tipo: 'text', label: 'ID cliente Banco' }),
      new CampoRegistro({ id: 'B05', inicio: 51, fim: 58, valor: '', tipo: 'date', label: 'Data da Opção/Exclusão' }),
      new CampoRegistro({ id: 'B06', inicio: 59, fim: 149, valor: '', tipo: 'text', label: 'Futuro', disabled: true }),
      new CampoRegistro({ id: 'B07', inicio: 150, fim: 150, valor: '', tipo: 'text', label: 'Código do mov' })
    ]
  }
)

const geraRegistroC = () => (
  {
    type: 'C',
    text: 'OCORRÊNCIA NO CADASTRAMENTO DO DÉBITO AUTOMÁTICO',
    data: [
      new CampoRegistro({ id: 'C01', inicio: 1, fim: 1, valor: 'C', tipo: 'title', label: 'Código do registro = "C"' }),
      new CampoRegistro({ id: 'C02', inicio: 2, fim: 26, valor: '', tipo: 'text', label: 'ID Cliente Empresa' }),
      new CampoRegistro({ id: 'C03', inicio: 27, fim: 30, valor: '', tipo: 'number', label: 'Agência para Débito' }),
      new CampoRegistro({ id: 'C04', inicio: 31, fim: 44, valor: '', tipo: 'text', label: 'ID Cliente Banco' }),
      new CampoRegistro({ id: 'C05', inicio: 45, fim: 84, valor: '', tipo: 'text', label: 'Ocorrência 1' }),
      new CampoRegistro({ id: 'C06', inicio: 85, fim: 124, valor: '', tipo: 'text', label: 'Ocorrência 2' }),
      new CampoRegistro({ id: 'C07', inicio: 125, fim: 143, valor: '', tipo: 'text', label: 'Futuro', disabled: true }),
      new CampoRegistro({ id: 'C08', inicio: 144, fim: 149, valor: '', tipo: 'number', label: 'NSA' }),
      new CampoRegistro({ id: 'C09', inicio: 150, fim: 150, valor: '', tipo: 'text', label: 'Código do mov' })
    ]
  }
)

const geraRegistroD = () => (
  {
    type: 'D',
    text: 'ALTERAÇÃO DE CONTROLE PELA EMPRESA - DÉBITO AUTOMATICO',
    data: [
      new CampoRegistro({ id: 'D01', inicio: 1, fim: 1, valor: 'D', tipo: 'title', label: 'Código do registro = "D"' }),
      new CampoRegistro({ id: 'D02', inicio: 2, fim: 26, valor: '', tipo: 'text', label: 'ID Cli Emp Anterior' }),
      new CampoRegistro({ id: 'D03', inicio: 27, fim: 30, valor: '', tipo: 'number', label: 'Agência para Débito' }),
      new CampoRegistro({ id: 'D04', inicio: 31, fim: 44, valor: '', tipo: 'text', label: 'ID Cliente banco' }),
      new CampoRegistro({ id: 'D05', inicio: 45, fim: 69, valor: '', tipo: 'text', label: 'ID Cli Emp Atual' }),
      new CampoRegistro({ id: 'D06', inicio: 70, fim: 129, valor: '', tipo: 'text', label: 'Ocorrência' }),
      new CampoRegistro({ id: 'D07', inicio: 130, fim: 143, valor: '', tipo: 'text', label: 'Futuro', disabled: true }),
      new CampoRegistro({ id: 'D08', inicio: 144, fim: 149, valor: '', tipo: 'text', label: 'NSA' }),
      new CampoRegistro({ id: 'D09', inicio: 150, fim: 150, valor: '', tipo: 'text', label: 'Código do mov' })
    ]
  }
)

const geraRegistroZ = () => (
  {
    type: 'Z',
    text: 'TRAILLER',
    data: [
      new CampoRegistro({ id: 'Z01', inicio: 1, fim: 1, valor: 'Z', tipo: 'title', label: 'Código do registro = "Z"' }),
      new CampoRegistro({ id: 'Z02', inicio: 2, fim: 7, valor: '', tipo: 'number', label: 'Registros' }),
      new CampoRegistro({ id: 'Z03', inicio: 8, fim: 24, valor: '', tipo: 'text', label: 'Valor Total' }),
      new CampoRegistro({ id: 'Z04', inicio: 25, fim: 143, valor: '', tipo: 'text', label: 'Futuro', disabled: true }),
      new CampoRegistro({ id: 'Z05', inicio: 45, fim: 69, valor: '', tipo: 'text', label: 'NSA' }),
      new CampoRegistro({ id: 'Z06', inicio: 70, fim: 129, valor: '', tipo: 'text', label: 'Futuro', disabled: true })
    ]
  }
)

export function geraRegistro (tipo) {
  return {
    A: geraRegistroA(),
    B: geraRegistroB(),
    C: geraRegistroC(),
    D: geraRegistroD(),
    Z: geraRegistroZ()
  }[tipo]
}

export const opcoesCnab150 = [
  { value: 'B', label: 'Débito Automático', disabled: false },
  { value: 'C', label: 'Ocorrências no Cancelamento do Débito Automático', disabled: false },
  { value: 'D', label: 'Alterar / Cancelar Débito Automático<', disabled: false },
  { value: 'E', label: 'Débito ou Crédito em Conta Corrente ', disabled: true },
  { value: 'F', label: 'Retorno Débito Automatico e Folha de Pagamento ', disabled: true },
  { value: 'J', label: 'Confirmação de Processamento de Arquivo', disabled: true },
  { value: 'T', label: 'Total de clientes debitados', disabled: true },
  { value: 'X', label: 'Relação de Agências', disabled: true }
]
