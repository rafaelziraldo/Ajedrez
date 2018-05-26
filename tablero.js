function Tablero(){
  this.contenedor=document.querySelector('#contenedor');
  this.piezaSeleccionada=null;
var self=this;
  this.casillas=[];
  this.movimiento=new Movimiento(this.casillas)
this.piezas=[];
  Tablero.prototype.armarTablero=function(){
    for(var i=0;i<64;i++){
    this.casillas.push(new Casilla());
      if(i<8){
        this.casillas[i].fila='1';
        this.casillas[i].div.style.top=0+'px'
        this.casillas[i].div.style.left=(i%8)*50+'px'


      }
      if(i>=8&&i<16){
        this.casillas[i].fila='2';
        this.casillas[i].div.style.top=50+'px'
        this.casillas[i].div.style.left=(i%8)*50+'px'

      }
      if(i>=16&&i<24){
        this.casillas[i].fila='3';
        this.casillas[i].div.style.top=100+'px'
        this.casillas[i].div.style.left=(i%8)*50+'px'

      }
      if(i>=24&&i<32){
        this.casillas[i].fila='4';
        this.casillas[i].div.style.top=150+'px'
        this.casillas[i].div.style.left=(i%8)*50+'px'

      }
      if(i>=32&&i<40){
        this.casillas[i].fila='5';
        this.casillas[i].div.style.top=200+'px'
        this.casillas[i].div.style.left=(i%8)*50+'px'

      }
      if(i>=40&&i<48){
        this.casillas[i].fila='6';
        this.casillas[i].div.style.top=250+'px'
        this.casillas[i].div.style.left=(i%8)*50+'px'

      }
      if(i>=48&&i<56){
        this.casillas[i].fila='7';
        this.casillas[i].div.style.top=300+'px'
        this.casillas[i].div.style.left=(i%8)*50+'px'

      }
      if(i>=56&&i<64){
        this.casillas[i].fila='8';
        this.casillas[i].div.style.top=350+'px'
        this.casillas[i].div.style.left=(i%8)*50+'px'

      }
      if(i==0||i==8||i==16||i==24||i==32||i==40||i==48||i==56){
        this.casillas[i].columna='a';
      }
      if(i==1||i==9||i==17||i==25||i==33||i==41||i==49||i==57){
        this.casillas[i].columna='b';
      }
      if(i==2||i==10||i==18||i==26||i==34||i==42||i==50||i==58){
        this.casillas[i].columna='c';
      }
      if(i==3||i==11||i==19||i==27||i==35||i==43||i==51||i==59){
        this.casillas[i].columna='d';
      }
      if(i==4||i==12||i==20||i==28||i==36||i==44||i==52||i==60){
        this.casillas[i].columna='e';
      }
      if(i==5||i==13||i==21||i==29||i==37||i==45||i==53||i==61){
        this.casillas[i].columna='f';
      }
      if(i==6||i==14||i==22||i==30||i==38||i==46||i==54||i==62){
        this.casillas[i].columna='g';
      }
      if(i==7||i==15||i==23||i==31||i==39||i==47||i==55||i==63){
        this.casillas[i].columna='h';
      }
      if((parseInt(this.casillas[i].fila) + this.casillas[i].columna.charCodeAt(0))%2!=0){
        this.casillas[i].color='gray';
        this.casillas[i].div.style.backgroundColor='gray'
      }else{
          this.casillas[i].color='blanca';
          this.casillas[i].div.style.backgroundColor='#FFFF00'
      }
      this.casillas[i].div.addEventListener('click',this.ponerUnaPieza)
      document.body.appendChild(this.casillas[i].div)

  }
}
  Tablero.prototype.ordenarPieza=function(){
    for(var i=8;i<16;i++){
      this.casillas[i].recibirPieza(new Pieza('peon','white'))


    }
    for(var i=48;i<56;i++){
      this.casillas[i].recibirPieza(new Pieza('peon','black'))

    }
  this.casillas[0].recibirPieza(new Pieza('torre','white'))

  this.casillas[7].recibirPieza(new Pieza('torre','white'))

  this.casillas[56].recibirPieza(new Pieza('torre','black'))

  this.casillas[63].recibirPieza(new Pieza('torre','black'))

  this.casillas[1].recibirPieza(new Pieza('caballo','white'))

  this.casillas[6].recibirPieza(new Pieza('caballo','white'))

  this.casillas[57].recibirPieza(new Pieza('caballo','black'))

  this.casillas[62].recibirPieza(new Pieza('caballo','black'))

  this.casillas[2].recibirPieza(new Pieza('alfil','white'))

  this.casillas[5].recibirPieza(new Pieza('alfil','white'))

  this.casillas[58].recibirPieza(new Pieza('alfil','black'))

  this.casillas[61].recibirPieza(new Pieza('alfil','black'))

  this.casillas[3].recibirPieza(new Pieza('dama','white'))

  this.casillas[59].recibirPieza(new Pieza('dama','black'))

  this.casillas[4].recibirPieza(new Pieza('rey','white'))

  this.casillas[60].recibirPieza(new Pieza('rey','black'))


  }

Tablero.prototype.limpiarTablero=function(){
  for(var i=0;i<this.casillas.length;i++){
    if(this.casillas[i].pieza!=null){

    this.casillas[i].div.removeChild(this.casillas[i].pieza.div);
    this.piezas.push(this.casillas[i].sacarPieza())
    this.casillas[i].pieza.div.addEventListener('click',this.seleccionarPieza)
    this.casillas[i].pieza=null;

}
  }
}
Tablero.prototype.seleccionarPieza=function(e){
  for(var i=0;i<self.piezas.length;i++){
    if(self.piezas[i].div=== e.target){
      alert('pieza seleccionada')
      self.piezaSeleccionada = self.piezas[i];
    }
  }

}
Tablero.prototype.ponerUnaPieza=function(e){

  for(var i=0;i<self.casillas.length;i++){
    if(self.casillas[i].div===e.target){
      self.casillas[i].recibirPieza(self.piezaSeleccionada)
    }
  }

//  e.target.appendChild(new Pieza('torre','white').div);

}
Tablero.prototype.crearTablero=function(){
  this.armarTablero()

  this.ordenarPieza()

}
}
