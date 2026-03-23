let salario = 3000;
let horasextras = 2;
let diastrabalhados = 20;
let valorextra = 25;
let desconto_inssalariobruto = 0.08

let total_extra = horasextras * diastrabalhados;
console.log(total_extra);

let valortotal_extra = diastrabalhados * horasextras * valorextra;
console.log(valortotal_extra);

let salariobruto = salario + valortotal_extra;
console.log(salariobruto)

let salario_liquido = salariobruto - (salariobruto * desconto_inssalariobruto);
console.log(salario_liquido);
 
let quantidade_de_produtos = 4;
let preçoprodutos = 150;
let taxa_administrativa = 0.05;
let frete_fixo = 40;
let  parcelas = 3;

let valor_total_produtos = quantidade_de_produtos * preçoprodutos;
console.log(valor_total_produtos);
 
let valordataxa = valor_total_produtos * taxa_administrativa;
console.log(valordataxa);

let totaldascompras = valor_total_produtos + valordataxa + frete_fixo;
console.log(totaldascompras);

 let valor_parcelas = totaldascompras * parcelas;
console.log(valor_parcelas);

let comprimento = 30;
let  altura = 2.5;
let preçometro = 120;
let impostosobre_serviço = 0.12;

let area_total_muro = comprimento * altura;
console.log(area_total_muro)

let valor_sem_imposto = area_total_muro * preçometro
console.log(valor_sem_imposto);

let valor_do_imposto = impostosobre_serviço * valor_sem_imposto
console.log(valor_do_imposto);

let valor_final = valor_sem_imposto + valor_do_imposto;
console.log(valor_final)


