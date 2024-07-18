// membuat game tebak angka

let start = true;

while (start) {

    let pc = Math.floor(Math.random()*10) + 1;
                    

     let hp = 5;
    let jumlah = 10;
    while (hp != 0 || hp != hp) {
                            let user = prompt(`Masukkan angka 1 - ${jumlah} \nAnda punya : ${hp} Kesempatan`);
                            if (user > jumlah) {
                                alert(`Eiittss...angka tidak boleh lebih dari ${jumlah} atuh...`)
                                continue;
                            }
                            let hasil = '';
                                if (pc == user) {
                                hasil = "Tepat sekali 100 buat kamuuu";
                                hp = hp;
                                alert(`Angka yang anda masukkan ${hasil}`);
                                break;                            
                            }
                                else if (pc < user) {
                                hasil = " Terlalu besar";
                                hp = hp-1;
                            }
                                else if (pc > user) {
                                hasil = "Terlalu kecil"
                                hp = hp-1;
                            }

    
                                else {
                                alert('Tolong jangan masukkan selain angka..')
                                break;
                            }
                            if (hp == 0 ) {
                                alert(`Kesempatan anda habis angka yang dipilih komputer \nadalah ${pc}.`)
                                break;
                            }

                            else {alert(`Angka yang anda masukkan ${hasil}`);
                                        }


                }
                

                start = confirm('mau main lagi ?')


            }
            alert ('oke terimakasih ..')

