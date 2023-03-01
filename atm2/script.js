let user = {
    nama: "Rafi",
    pin: 123456,
    saldo: 5000000,
  };
  
  let newUser;
  
  let packet = {
    seratus: "100000",
    duaratus: "200000",
    tigaratus: "300000",
    limaratus: "500000",
    satujuta: "1000000",
    satusetengah: "1500000",
    duajuta: "2000000",
  };
  
  let formPin = document.getElementById("formPin");
  let pinValue = document.getElementById("pinValue");
  let listPacket = document.getElementById("listPacket");
  let formNominal = document.getElementById("formNominal");
  let nominalValue = document.getElementById("nominalValue");
  
  if (formPin) {
    formPin.addEventListener("submit", (e) => {
      e.preventDefault();
      if (user.pin.toString() === pinValue.value.toString()) {
        window.location.href = "./packet.html";
      } else {
        alert("User Not Found!");
      }
    });
  }
  
  if (listPacket) {
    listPacket.innerHTML = `
      <div class="text-start">
          <p onclick="takeMoney(${packet.seratus})" class="cursor-pointer"><- 100.000</p>
          <p onclick="takeMoney(${packet.duaratus})" class="cursor-pointer"><- 200.000</p>
          <p onclick="takeMoney(${packet.tigaratus})" class="cursor-pointer"><- 300.000</p>
          <a href="./nominal.html" class="cursor-pointer">
              <div class="flex gap-[20px]">
              <p><-</p>
              <p>
                  Nominal <br />
                  Lain
              </p>
              </div>
          </a>
        </div>
        <div class="text-end">
          <p onclick="takeMoney(${packet.limaratus})" class="cursor-pointer">500.000 -></p>
          <p onclick="takeMoney(${packet.satujuta})" class="cursor-pointer">1.000.000 -></p>
          <p onclick="takeMoney(${packet.satusetengah})" class="cursor-pointer">1.500.000 -></p>
          <div class="flex gap-[20px]" class="cursor-pointer">
            <p>
              Transaksi <br />
              Lain
            </p>
            <p>-></p>
          </div>
        </div>
      `;
  }

 let saldo = 5000000;
 let newSaldo;

if (formNominal) {
  formNominal.addEventListener("submit", (e) => {
     e.preventDefault();

     const value = nominalValue.value;
     if (value.length > 0) {
       if (saldo < value) {
         alert("Maaf saldo anda tidak cukup");
       } else if (value % 50000 == 0) {
        const nominalConf = confirm(
          `Anda akan mengambil nominal sebesar ${value}`
        );
        if (nominalConf) {
          newSaldo = saldo - value;
          saldo = newSaldo;
          alert(`Sisa uang anda ${saldo}`);
        }
      } else {
        alert("Nominal harus pecahan!");
      }
    } else {
      alert("Tidak boleh kosong");
    }
});
 }