var tanya = true;
while ( tanya) {

//menangkap pilihan palyer
var p = prompt('pilih : gajah,semut, orang');

//menangkap pilihan computer
var comp = Math.random();

if (comp < 0.34){
    comp = 'gajah';
}else if(comp >= 0.34 && comp < 0,67){
    comp = 'orang';
}else{
    comp = 'semut';
}

var hasil = '';
//menentukan rules
if(p == comp){
    alert('hasilnya seri!')
}else if( p=='gajah'){
    // if(comp == 'orang'){
    // hasil = 'MENANG!';
    // }else{
    // hasil = 'KALAH!';
    // }
    hasil = (comp == 'orang') ? 'MENANG' : 'KALAH!';    
}else if(p == 'orang'){
   hasil = ( comp == 'gajah') ? 'KALAH' : 'MENANG!';
}else if(p == 'semut'){
    hasil = ( comp == 'orang') ? 'KALAH' : 'MENANG!';
}else{
    hasil = 'memasukkan pilihan yang salah!!';
}

//tampilkan hasilnya
alert('Kamu memilih : ' + p +'dan komputer memilih : ' + comp + '\Maka hasilnya : Kamu ' + hasil); 


tanya = confirm('lagi?');
}
alert('teimakasih sudah bermain.')