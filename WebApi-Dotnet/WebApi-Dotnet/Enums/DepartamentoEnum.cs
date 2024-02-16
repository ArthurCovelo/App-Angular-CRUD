using System.Text.Json.Serialization;

namespace WebApi_Dotnet.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DepartamentoEnum
    {
        RecursosHumanos,
        Financas,
        TI,
        Vendas,
        Marketing,
        Producao,
        Logistica,
        Juridico,
        RH,
        Compras,
        Qualidade,
        Operacoes,
        Desenvolvimento,
        Suporte,
        PesquisaDesenvolvimento,
        AtendimentoCliente
    }
}
