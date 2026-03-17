// Exemplo de verificação de elegibilidade para emprego

// Dados do candidato

var idade = 18;
var experienciaAnos = 5;
var nivelEducacao = "superior";
var possuiCertificado = true

//Critérios de elegibilidade

var idadeMinima = 18;
var experienciaMinimaAnos = 3;
var nivelEducaçaoMinimo = "superior";
var certificadoObtigatorio = true;

//Verificar elegibilidade
var elegivel = (idade >= idadeMinima) &&
                (experienciaAnos >= experienciaMinimaAnos) &&
                (nivelEducacao === nivelEducaçaoMinimo) &&
                (possuiCertificado === certificadoObtigatorio);

                //saida

                if (elegivel) {
                    console.log("O candidato é elegível para o emprego.");
                } else {
                    console.log("O candidato não é elegível para o emprego.");
                }