(() => {

    // Tipos
    const batmanName:string = 'Bruce';
    const supermanName:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batmanName,supermanName];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    enum strenghtHero {
      fuerzaAcuaman = 0,
      fuerzaBatman = 1,
      fuerzaFlash = 5,
      fuerzaSuperman = 100
    }

    //Enumeraciones
    const flash:strenghtHero = strenghtHero.fuerzaFlash;
    const superman:strenghtHero = strenghtHero.fuerzaSuperman;
    const batman:strenghtHero = strenghtHero.fuerzaBatman;
    const acuaman:strenghtHero = strenghtHero.fuerzaAcuaman;

    
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  })()