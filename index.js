class Heroi {
  constructor(nome, idade, tipo){
   this.nome = nome;
   this.idade = idade;
   this.tipo = tipo;
   }
   
   atacar(){
    let ataque
    
     if (this.tipo === "mago"){
      ataque = "magia";
     }
     else if (this.tipo === "guerreiro"){
      ataque = "espada";
     }
     else if (this.tipo === "monge"){
      ataque = "artes marciais";
     }
     else if (this.tipo === "ninja"){
      ataque = "shuriken";
     }
     else {
      ataque = "usou um ataque desconhecido";
     }
     
     console.log(O ${this.tipo} ${this.nome} atacou usando ${ataque});
   }
}
 function criarHerois (listaDeNomes, listaDeIdades, listaDeTipos){
   let herois = [];
   
   for(let i = 0; i < listaDeNomes.length; i++){
       let nome = listaDeNomes[i];
       let idade = listaDeIdades[i];
       let tipo = listaDeTipos[i];
       
       let heroi = new Heroi ( nome, idade, tipo );
       herois.push(heroi);
   }
   return herois;
 }
 
       let nomes = ["William", "Godae", "Shylion", "Brucee"];
       let idades = [30, 150, 45, 20];
       let tipos = ["guerreiro", "mago", "monge", "ninja"]     
       
       let heroisCriados = criarHerois(nomes, idades, tipos);
       
       
       for (let i = 0; i < heroisCriados.length;i++){
            heroisCriados[i].atacar();
       }