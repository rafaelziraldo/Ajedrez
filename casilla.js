function Casilla(){
  this.color='';
  this.fila='';
  this.columna='';
  this.pieza=null;
  this.div=document.createElement('div');
  this.div.id= 'casilla';
  Casilla.prototype.sacarPieza=function(){
    
    return this.pieza;
  }
  Casilla.prototype.recibirPieza=function(pieza){
    this.pieza=pieza;
    this.div.appendChild(this.pieza.div)
    this.pieza.div.style.backgroundColor=this.pieza.color;
  }
}
