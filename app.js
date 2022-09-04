//* DOM Buttons
const btnMinusBag = document.querySelector(".buttonMinus1");
const btnMinusShoe = document.querySelector(".buttonMinus2")

const btnAddBag = document.querySelector(".buttonAdd1");
const btnAddShoe = document.querySelector(".buttonAdd2");

const qntBag = document.querySelector(".quantity1");
const qntShoe = document.querySelector(".quantity2");

const sum = document.querySelector(".sum");

const submitBtn = document.querySelector(".btn-submit");


//* Variables
let quantityBag = 0;
let quantityShoe= 0;
let total = 0;
let shipping = false;

//*Events

btnAddBag.addEventListener('click' , function(){
    if(!shipping){
        total +=19;
        shipping = true;
    }
    quantityBag++;
    total = total + 54.99;
    qntBag.textContent = quantityBag.toString();
    sum.textContent = `$${total.toFixed(2)}`;
})

btnMinusBag.addEventListener('click', function(){
    if(quantityBag <= 0){
        quantityBag =0;
    }else{
        quantityBag--;
        total = total - 54.99;
    }

     if (quantityBag === 0 && quantityShoe === 0 && total >0) {
       total = 0;
       if(shipping) shipping = false;
     }

    qntBag.textContent = quantityBag.toString();
    sum.textContent = `$${total.toFixed(2)}`;

});

btnAddShoe.addEventListener("click", function () {
    if (!shipping) {
        total += 19;
        shipping = true;
    }
  quantityShoe++;
  total += 74.99;
  qntShoe.textContent = quantityShoe.toString();
  sum.textContent = `$${total.toFixed(2)}`;
});

btnMinusShoe.addEventListener("click", function () {
  if (quantityShoe <= 0) {
    quantityShoe = 0;
  } else {
    quantityShoe--;
    total = total - 74.99;
  }

  if (quantityBag === 0 && quantityShoe === 0 && total > 0) {
    total = 0;
    if (shipping) shipping = false;
  }

  qntShoe.textContent = quantityShoe.toString();
  sum.textContent = `$${total.toFixed(2)}`;
});

//? Sumbit Button SweetAlert

submitBtn.addEventListener('click' , function(e){
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure to send all information?",
        text: "No to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm!",
        cancelButtonText: "Cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your infos has been sent.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your infos didn't sent! :)",
            "error"
          );
        }
      });
})