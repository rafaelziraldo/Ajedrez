function Movimiento(casillasM){
 this.casillasM=casillasM;
   this.casillasAux=[];
   this.diff;
  Movimiento.prototype.buscarOrigen=function(filaO,columnaO){
    for(var i=0;i<this.casillasM.length;i++){
      if(this.casillasM[i].fila==filaO&&this.casillasM[i].columna==columnaO){
        return this.casillasM[i];
      }
    }
  }

Movimiento.prototype.buscarDestino=function(filaD,columnaD){
  for(var i=0;i<casillasM.length;i++){
if(this.casillasM[i].fila==filaD&&this.casillasM[i].columna==columnaD){
return this.casillasM[i];
      }
    }
  }
Movimiento.prototype.hayPiezaTorre=function(filaO,columnaO,filaD,columnaD){
this.diff=Math.abs(filaO-filaD);
  if(columnaO==columnaD){
  for(var i=0;i<this.diff;i++){
    filaO++;
    for(var j=0;j<this.casillasM.length;j++){

      if(this.casillasM[j].fila==filaO&(this.casillasM[j].columna==columnaO)){
        this.casillasAux.push(this.casillasM[j]);
      }
    }
  }
}
if(filaO==filaD){
for(var i=0;i<=Math.abs(columnaO.charCodeAt(0)-columnaD.charCodeAt(0));i++){
  for(var j=0;j<this.casillasM.length;j++){
    if(this.casillasM[j].fila==filaO&(this.casillasM[j].columna==columnaO)){
      this.casillasAux.push(this.casillasM[j]);
    }
  }
}
}
for(var i=0;i<this.casillasAux.length;i++){
  this.casillasAux=null;
  if(this.casillasAux[i].pieza!=null){
    return true;
  }
}
  return false
}
}
Movimiento.prototype.moverTorre=function(filaO,columnaO,filaD,columnaD){
var origen=this.buscarOrigen(filaO,columnaO);
var destino=this.buscarDestino(filaD,columnaD);
  if(this.hayPiezaTorre(filaO,columnaO,filaD,columnaD)){
    alert('hay piezas')
  }else{
    destino.recibirPieza(origen.sacarPieza())
    origen.pieza=null;
  }

}
Movimiento.prototype.moverAlfil=function(){
  var origen=this.buscarOrigen(filaO,columnaO);
  var destino=this.buscarDestino(filaD,columnaD);

}
