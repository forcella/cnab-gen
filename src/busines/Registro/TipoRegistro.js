import CampoRegistro from "./CampoRegistro";

export const registroA = {
    data: [
        new CampoRegistro({ id: "A01", inicio: 1, fim: 1, valor: "A", }),
        new CampoRegistro({ id: "A02", inicio: 2, fim: 2, valor: null }),
        new CampoRegistro({ id: "A03", inicio: 3, fim: 22, valor: null }),
        new CampoRegistro({ id: "A04", inicio: 23, fim: 42, valor: null }),
        new CampoRegistro({ id: "A05", inicio: 43, fim: 45, valor: null }),
        new CampoRegistro({ id: "A06", inicio: 46, fim: 65, valor: null }),
        new CampoRegistro({ id: "A07", inicio: 66, fim: 73, valor: null }),
        new CampoRegistro({ id: "A08", inicio: 74, fim: 79, valor: null }),
        new CampoRegistro({ id: "A09", inicio: 80, fim: 81, valor: null }),
        new CampoRegistro({ id: "A10", inicio: 82, fim: 98, valor: null }),
    ]
}

export const registroB = {
    data: [
        new CampoRegistro({ id: "B01", inicio: 1, fim: 1, valor: "B", tipo: "title", label: "Código do Registro", }),
        new CampoRegistro({ id: "B02", inicio: 2, fim: 26, valor: null, tipo: "text", label: "ID do Cliente" }),
        new CampoRegistro({ id: "B03", inicio: 27, fim: 30, valor: null, tipo: "number", label: "Agência para Débito" }),
        new CampoRegistro({ id: "B04", inicio: 31, fim: 50, valor: null, tipo: "text", label: "ID do Cliente" }),
        new CampoRegistro({ id: "B05", inicio: 51, fim: 58, valor: null, tipo: "date", label: "Data da Opção/Exclusão" }),
        new CampoRegistro({ id: "B06", inicio: 59, fim: 149, valor: null, tipo: "text", label: "Reservado para o futuro" }),
        new CampoRegistro({ id: "B07", inicio: 150, fim: 150, valor: null, tipo: "text", label: "Código do Movimento" }),
    ]
}
